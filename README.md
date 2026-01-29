# 📱 Welcome to React Native – Expo Course

A complete, beginner‑to‑advanced guide to building **production‑ready mobile applications** using **React Native with Expo**.

This course is designed for developers who want to create **cross‑platform (Android & iOS) apps** faster, cleaner, and with modern best practices.

---

## 🚀 Course Overview

In this course, you will:

* Learn **React Native fundamentals** from scratch
* Understand **Expo** and why it simplifies mobile development
* Build real‑world mobile applications
* Learn project structuring, navigation, APIs, and deployment
* Prepare yourself for **production‑level apps & jobs**

> 💡 No prior mobile development experience required (basic JavaScript is helpful).

---

## 🛠 Tech Stack

* **React Native**
* **Expo (SDK)**
* **JavaScript / TypeScript**
* **Expo Router / React Navigation**
* **REST APIs**
* **AsyncStorage / SecureStore**
* **Firebase / Supabase (optional)**

---

## 📦 Prerequisites

Before starting, make sure you have:

* Node.js (LTS version)
* Basic JavaScript knowledge
* VS Code (recommended)
* Android Studio / Xcode (optional but useful)
* Expo Go app installed on your phone

---

## ⚙️ Environment Setup

### 1️⃣ Install Node.js

Download from: [https://nodejs.org](https://nodejs.org)

Verify installation:

```
node -v
npm -v
```

---

### 2️⃣ Install Expo CLI

```
npm install -g expo-cli
```

Check Expo version:

```
expo --version
```

---

### 3️⃣ Create Expo App

```
npx create-expo-app myApp
cd myApp
npm start
```

Scan QR code using **Expo Go** or run on emulator.

---

## 📂 Project Structure (Standard)

```
myApp/
│
├── app/                # Screens (Expo Router)
├── assets/             # Images, fonts, icons
├── components/         # Reusable UI components
├── constants/          # Colors, themes, configs
├── hooks/              # Custom hooks
├── services/           # API & backend logic
├── utils/              # Helper functions
├── app.json            # Expo configuration
├── package.json        # Dependencies
└── README.md           # Project documentation
```

---

## 📚 Course Curriculum

### 🔹 Module 1: Basics

* What is React Native?
* Expo vs React Native CLI
* Project structure
* JSX & Components

### 🔹 Module 2: Core Concepts

* Props & State
* Styling & Layout (Flexbox)
* Images & Fonts
* Pressable & Touchables

### 🔹 Module 3: Navigation

* Stack Navigation
* Tab Navigation
* Expo Router
* Deep Linking

### 🔹 Module 4: Data Handling

* API integration (fetch/axios)
* Environment variables
* AsyncStorage
* Forms & Validation

### 🔹 Module 5: Advanced Topics

* Authentication
* Push Notifications
* Permissions
* Animations
* Performance optimization

### 🔹 Module 6: Production

* App icons & splash screen
* Build APK & IPA
* EAS Build
* Play Store & App Store deployment

---

## 🧪 Running the Project

```
npm install
npm start
```

Other options:

```
npm run android
npm run ios
npm run web
```

---

## 🐞 Common Issues

* Metro bundler not starting → Restart terminal
* App not loading → Clear cache

```
expo start -c
```

* Emulator not detected → Check Android Studio/Xcode

---

## 📈 Best Practices

* Use reusable components
* Keep logic outside UI
* Follow folder structure strictly
* Use environment variables for secrets
* Test on real devices

---

## 🔐 Environment Variables

Create `.env` file:

```
EXPO_PUBLIC_API_URL=https://api.example.com
```

---

## 🤝 Contribution Guidelines

1. Fork the repository
2. Create a new branch
3. Commit changes
4. Open a pull request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 🙌 Support

If you find this course helpful:

* ⭐ Star the repository
* 🧠 Practice daily
* 💬 Share with others

Happy Coding! 🚀

— **React Native Expo Course Team**
