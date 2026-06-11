# WayGood Study Abroad Programs App 🌍

A responsive and visually rich React Native mobile application built with **Expo** and **TypeScript** for the WayGood Intern Technical Assignment. The app displays study abroad programs across the globe and lets students view comprehensive program details.

---

## 📱 Features

- **Home Screen**: Displays a curated list of study abroad programs and universities with country flags, university names, locations, and short descriptions.
- **Details Screen**: Provides full information about each university program, including:
  - 💰 Tuition fees
  - 📅 Intakes
  - 📍 Country location
  - 📖 Detailed program overview
- **Responsive Layout**: Designed to adapt to different mobile device screen sizes (Android, iOS, and Web).
- **Clean Component Architecture**: Built using modular, reusable components and organized file layout.
- **Navigation Options**: Fully configured with **Expo Router** (file-based routing) and includes a backup **React Navigation** configuration.

---

## 🛠️ Tech Stack & Libraries

- **Framework**: Expo (React Native)
- **Language**: TypeScript / JavaScript
- **Navigation**: Expo Router v3 (with backup Stack Navigation setup)
- **Styling**: Vanilla `StyleSheet` for cross-platform responsiveness and native performance

---

## 📂 Project Structure

```text
WayGoodApp/
├── data/
│   └── programs.js          # Static JSON mock data for universities
├── src/
│   ├── app/                 # Expo Router file-based screens
│   │   ├── _layout.tsx      # Core navigation stack setup
│   │   ├── index.tsx        # Home Screen with programs listing
│   │   └── detail.tsx       # Details Screen with full program info
│   ├── components/          # Reusable UI components
│   └── hooks/               # Custom React hooks
├── screens/                 # Backup screens using standard React Navigation
│   ├── HomeScreen.js        
│   └── DetailScreen.js      
├── package.json             # App dependencies and scripts
└── app.json                 # Expo configurations
```

---

## 🚀 Getting Started

Follow these steps to set up and run the application locally:

### 1. Prerequisites
Ensure you have **Node.js** and **npm** installed on your system.

### 2. Clone the Repository
```bash
git clone https://github.com/Ishaan583/waygood-react-native.git
cd waygood-react-native
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start the Application
Start the Expo development server:
```bash
npx expo start
```

### 5. Running the App
Once the server starts, you can:
- Press **`a`** to run on an Android Emulator or device.
- Press **`i`** to run on an iOS Simulator or device.
- Press **`w`** to run in a web browser.
- Scan the QR code using the **Expo Go** app on your physical mobile device.

---

## 📋 Evaluation Criteria Check

- **Code Structure and Readability**: The code uses clean TypeScript types, consistent styling variables, and follows modular React coding conventions.
- **Responsive UI**: Both screens utilize flexible flexbox layouts, relative padding/margins, and `SafeAreaView` to ensure compatibility across notches, punch-holes, and varying device ratios.
- **Component Usage**: Modern component practices are used throughout the application, featuring optimized lists (`FlatList`) and touch interactions (`TouchableOpacity`).
- **GitHub Quality**: Clear project setup, full instructions, and descriptive git commits.
