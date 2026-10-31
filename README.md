# 📱 The Cheap Phone Test

### Testing Mobile Applications Under Real-World Indian Conditions

## 🚀 About the Project

The Cheap Phone Test is a web-based Android application testing and reliability platform designed to help developers understand how their applications behave on budget smartphones under real-world conditions.

In India, millions of people use affordable Android smartphones with limited RAM, storage, battery capacity, and inconsistent internet connectivity. However, many applications are primarily tested on high-end devices and stable networks.

This creates a gap between laboratory testing and the actual experience of everyday users.

The Cheap Phone Test aims to address this problem by providing a testing dashboard that helps developers run Android app checks, collect evidence, record issues, and generate reports.

Its main goal is simple:

**Build applications that work reliably for everyone, not just users with expensive smartphones.**

## 🎯 Problem Statement

Many mobile applications face performance and reliability problems on budget smartphones.

Common challenges include:

- Limited device storage.
- Unstable or slow internet connections.
- Application crashes and unexpected behavior.
- Battery-saving restrictions.
- Background process termination.
- Device limitations and resource constraints.
- Problems during application launch and usage.

These problems can negatively affect users who depend on affordable Android devices.

Traditional testing environments may not always represent these real-world conditions.

## 💡 Our Solution

The Cheap Phone Test provides a centralized dashboard for conducting Android application checks using Android Debug Bridge (ADB).

It connects an Android device to a computer and helps developers:

- Check connected Android devices.
- Execute application testing workflows.
- Capture Android logs before and after testing actions.
- Launch selected Android applications.
- Record testing sessions.
- Save observed issues and findings.
- Document reproduction steps and supporting evidence.
- Export testing data in JSON format.
- Generate printable testing reports.

The platform focuses on evidence-based testing so developers can understand and document problems instead of relying only on assumptions.

## ✨ Key Features

### 1. Android Device Detection
Uses ADB to identify connected Android devices and display their connection status.

### 2. Application Launch Testing
Allows developers to specify an Android application package name and execute an application launch check.

### 3. Android Log Collection
Captures Android logs before and after testing actions to help developers investigate application behavior.

### 4. Testing Run History
Records testing sessions with information such as:
- Test run ID
- Application package name
- Testing journey
- Start time
- Execution status
- Command results

### 5. Issue and Finding Management
Allows developers to document observed issues, including their severity, description, reproduction steps, and evidence.

### 6. JSON Export
Allows testing results and recorded findings to be exported as JSON files for further analysis.

### 7. Printable Testing Reports
Provides a printable report interface to organize and review testing information.

### 8. Real-World Testing Scenarios
Supports documenting scenarios such as:
- Intermittent network conditions.
- Low storage situations.
- Battery-saving behavior.
- Background process restrictions.
- Application launch and recovery behavior.

Some environmental conditions require manual observation or separate setup; they are not automatically simulated by the dashboard.

## 🛠️ Technology Stack

**Frontend**
- HTML5
- CSS3
- JavaScript

**Backend**
- Node.js
- Express.js

**Android Testing**
- Android Debug Bridge (ADB)
- Android SDK Platform Tools

**Data Storage**
- JSON-based local data storage

**Development Tools**
- Visual Studio Code
- Git
- GitHub
- Google Chrome

## ⚙️ How It Works

1. Connect an Android smartphone to your computer using a USB cable.
2. Enable Developer Options and USB Debugging on the smartphone.
3. Install Android SDK Platform Tools and configure ADB.
4. Open the project in Visual Studio Code.
5. Install the required Node.js dependencies.
6. Start the Express server.
7. Open the testing dashboard in your browser.
8. Check whether the Android device is detected.
9. Select the application package and testing journey.
10. Execute the testing workflow.
11. Review the collected logs and test results.
12. Record observed issues and export the reports.

## 💻 Installation and Setup

### Prerequisites

- Node.js installed.
- npm installed.
- Android SDK Platform Tools installed.
- USB Debugging enabled on an Android device.
- Visual Studio Code.

### Step 1: Clone the Repository

```bash
git clone https://github.com/bhartiaditya117-star/cheap-phone-test-1.git
```

### Step 2: Open the Project

```bash
cd cheap-phone-test-1
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Start the Application

```bash
npm start
```

### Step 5: Open the Dashboard

Visit:

```text
http://localhost:3000
```

## 📂 Project Structure

```text
cheap-phone-test-1/
│
├── public/
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   ├── report.html
│   ├── report.css
│   └── report.js
│
├── data/
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## 🌍 Project Impact

The Cheap Phone Test focuses on making mobile application testing more practical and accessible.

It encourages developers to consider users who have:
- Budget Android smartphones.
- Limited device resources.
- Unreliable internet connections.
- Limited available storage.

By documenting real-world issues and collecting testing evidence, developers can make better decisions about application reliability and user experience.

## 🔮 Future Improvements

Potential future enhancements include:

- Automated network throttling and offline testing.
- Device performance and memory monitoring.
- Battery consumption analysis.
- Automated low-storage testing.
- Multi-device testing support.
- Crash detection and advanced log analysis.
- Test result comparison across different devices.
- Advanced analytics and issue prioritization.

These are planned improvements, not claims about currently implemented features.

## 👨‍💻 Developer

**Aditya Kumar**

GitHub: https://github.com/bhartiaditya117-star

Project Repository: https://github.com/bhartiaditya117-star/cheap-phone-test-1

## 📌 Final Note

The Cheap Phone Test is built around an important idea:

**Every user deserves a reliable mobile application experience, regardless of the smartphone they own.**

Test beyond flagship devices. Build for real-world users.

---

⭐ If you find this project useful, consider giving the repository a star!
