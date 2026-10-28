const express=require("express"),path=require("path"),fs=require("fs"),{spawn}=require("child_process");
const app=express(),PORT=process.env.PORT||3000,DATA=path.join(__dirname,"data");
const RUNS=path.join(DATA,"runs.json"),FINDINGS=path.join(DATA,"findings.json");
fs.mkdirSync(DATA,{recursive:true}); for(const f of [RUNS,FINDINGS])if(!fs.existsSync(f))fs.writeFileSync(f,"[]");
app.use(express.json({limit:"1mb"}));app.use(express.static(path.join(__dirname,"public")));
const read=f=>{try{return JSON.parse(fs.readFileSync(f,"utf8"))}catch{return []}};
const write=(f,v)=>fs.writeFileSync(f,JSON.stringify(v,null,2));
function cmd(args,ms=12000){return new Promise(resolve=>{let out="",p=spawn("adb",args,{windowsHide:true}),t=setTimeout(()=>{p.kill();out+="\nTimed out"},ms);p.stdout.on("data",d=>out+=d);p.stderr.on("data",d=>out+=d);p.on("error",e=>{clearTimeout(t);resolve({ok:false,output:e.message})});p.on("close",code=>{clearTimeout(t);resolve({ok:code===0,output:out.trim()})})})}
app.get("/api/status",async(_q,s)=>{let r=await cmd(["devices"],8000),devices=r.output.split(/\r?\n/).slice(1).map(x=>{let a=x.trim().split(/\s+/);return a.length>=2&&a[0]&&!a[0].startsWith("*")?{id:a[0],state:a[1]}:null}).filter(Boolean);s.json({adbAvailable:r.ok,devices,adbOutput:r.output})});
app.get("/api/runs",(_q,s)=>s.json(read(RUNS)));app.get("/api/findings",(_q,s)=>s.json(read(FINDINGS)));
app.post("/api/findings",(q,s)=>{let b=q.body||{};if(!b.title?.trim()||!b.description?.trim()||!b.steps?.trim())return s.status(400).json({error:"Title, description and reproduction steps are required."});let f={id:"F-"+Date.now().toString(36).toUpperCase(),title:b.title.trim(),severity:["Critical","High","Medium","Low","Info"].includes(b.severity)?b.severity:"Medium",description:b.description.trim(),steps:b.steps.trim(),expected:(b.expected||"").trim(),actual:(b.actual||"").trim(),runId:(b.runId||"").trim(),evidence:(b.evidence||"").trim(),status:"Open",createdAt:new Date().toISOString()};let all=read(FINDINGS);all.unshift(f);write(FINDINGS,all);s.status(201).json(f)});
app.patch("/api/findings/:id",(q,s)=>{let all=read(FINDINGS),f=all.find(x=>x.id===q.params.id);if(!f)return s.status(404).json({error:"Finding not found"});if(["Open","Investigating","Fixed","Won't Fix"].includes(q.body.status))f.status=q.body.status;write(FINDINGS,all);s.json(f)});
app.delete("/api/findings/:id",(q,s)=>{let all=read(FINDINGS),next=all.filter(x=>x.id!==q.params.id);if(next.length===all.length)return s.status(404).json({error:"Finding not found"});write(FINDINGS,next);s.json({ok:true})});
app.get("/api/findings/export",(_q,s)=>{s.set("Content-Disposition",'attachment; filename="cheap-phone-findings.json"');s.json(read(FINDINGS))});
app.post("/api/runs",async(q,s)=>{let packageName=String(q.body.packageName||"com.android.chrome"),profile=String(q.body.profile||"Baseline"),journey=String(q.body.journey||"Launch app and inspect first screen"),checks=[];
let d=await cmd(["devices"]),connected=d.output.split(/\r?\n/).slice(1).some(x=>/\sdevice\s*$/.test(x));checks.push({name:"ADB device check",ok:connected,output:d.output});
let before={ok:false,output:"Skipped: no authorized device"},launch={ok:false,output:"Skipped: no authorized device"},after={ok:false,output:"Skipped: no authorized device"};
if(connected){before=await cmd(["logcat","-d","-t","300"]);launch=await cmd(["shell","monkey","-p",packageName,"-c","android.intent.category.LAUNCHER","1"],15000);await new Promise(r=>setTimeout(r,1500));after=await cmd(["logcat","-d","-t","500"])}
checks.push({name:"Android logs before actions",...before},{name:"Launch app",...launch},{name:"Android logs after actions",...after});
let run={id:"run_"+Date.now(),profile,packageName,journey,startedAt:new Date().toISOString(),status:connected?"completed":"error",note:"Command completion does not prove UI correctness; manually verify the app.",checks};let all=read(RUNS);all.unshift(run);write(RUNS,all);s.json(run)});
app.get("/api/runs/:id/export",(q,s)=>{let r=read(RUNS).find(x=>x.id===q.params.id);if(!r)return s.status(404).json({error:"Run not found"});s.set("Content-Disposition",`attachment; filename="${r.id}.json`);s.json(r)});
app.listen(PORT,()=>console.log(`Cheap Phone Test running at http://localhost:${PORT}`));
