# React Native Template App (Analytics Dashboard)

A robust, enterprise-grade React Native template built with **Expo**, **Redux Toolkit**, **Unistyles**, and **React Navigation**. This project serves as a comprehensive starting point for building high-performance mobile applications with a focus on data visualization and clean architecture.

## 🚀 Key Features

-   **Complex Data Handling**: Implementation of a nested analytics dashboard using mock API responses.
-   **Adaptive Theming**: Real-time Light/Dark mode switching powered by [Unistyles](https://unistyl.es/).
-   **Navigation Architecture**: Dynamic switching between Auth and App stacks based on authentication state.
-   **Global State Management**: Integrated with Redux Toolkit (RTK) and persistence via MMKV.
-   **Localization**: Multi-language support (English/Spanish) using `i18n-js` and `expo-localization`.
-   **Modern UI Components**: A library of reusable, theme-aware components (Button, TextField, KPICards, etc.).
-   **Responsive Design**: Breakpoint-based layouts that adjust to different screen sizes.

---

## 📂 Project Structure

```text
src/
├── assets/             # Global assets like fonts and local images
├── components/         # Atomic UI components (Buttons, Inputs, Loaders)
├── constants/          # Static data, mock APIs, and configuration
├── localization/       # i18n setup and translation JSON files
├── navigation/         # Navigators (Stack, Tab, Root logic)
├── redux/              # Redux setup (Store, Slices, RTK Query Services)
├── screens/            # Application screens (feature-based folders)
├── storage/            # MMKV storage instance and utilities
├── styles/             # Unistyles themes, breakpoints, and global styles
├── theme/              # Font family and typography configurations
└── utils/              # Helper functions and hooks
```

---

## 🛠️ How Everything Works

### 1. Theming (Unistyles)
The app uses `react-native-unistyles` for styling. Themes are defined in `src/styles/themes.ts`.
-   **Dynamics**: The theme instance is automatically injected into components via the `createStyleSheet` hook.
-   **Switching**: Controlled globally. Components respond instantly to system theme changes or manual overrides.
-   **Breakpoints**: Defined in `src/styles/breakpoints.ts`, allowing for different styles on mobile vs. tablet.

### 2. Navigation Flow
Navigation is managed in `src/navigation/`.
-   **`RootNavigator`**: Checks the `isLoggedIn` state from Redux.
-   **`AuthNavigator`**: Handles Login/Signup flows.
-   **`AppNavigator`**: Handles the main application (Home, Profile, Dashboard).
-   **Splash Screen**: Stays visible until fonts and initial resources are loaded.

### 3. State Management (Redux & MMKV)
-   **Store**: Located in `src/redux/store/`. It combines slices and RTK Query services.
-   **Persistence**: Uses `redux-persist` combined with `react-native-mmkv` for high-performance, synchronous disk storage.
-   **User Slice**: Manages authentication tokens and profile data.

### 4. Dashboard Implementation
The `DashboardScreen` is a showcase of complex UI building.
-   **Data Fetching**: Simulates an API call fetching deeply nested JSON from `mockData.js`.
-   **Data Derivation**: Uses `useMemo` to transform raw API data (e.g., calculating growth percentages from revenue stats).
-   **Sub-components**: Separated into `DashboardHeader`, `KPICard`, `ActivityList`, `PlatformStats`, and `RegionStats` for better maintainability.
-   **States**: Handles loading (ActivityIndicator), empty, and error states gracefully.

### 5. Localization
-   Located in `src/localization/`.
-   To add a language: Add a new JSON file in `translations/` and register it in `i18n.js`.
-   Usage: Use the `i18n.t('key')` function within components.

---

## 🔧 Getting Started

### Prerequisites
-   Node.js (v18+)
-   Yarn or npm
-   Expo Go (for testing on physical devices)

### Installation
1.  **Clone & Install**:
    ```bash
    git clone <repo-url>
    cd reactnativetemplateapp
    yarn install
    ```
2.  **Run Development Server**:
    ```bash
    yarn start
    ```
3.  **Launch on Platform**:
    -   Press `a` for Android Emulator.
    -   Press `i` for iOS Simulator.

---

## 📝 development Guide

### Adding a New Screen
1.  Create a folder in `src/screens/`.
2.  Define the screen component and export it.
3.  Add the screen to the appropriate Navigator in `src/navigation/`.

### Adding a New API Endpoint
1.  Create or update a service in `src/redux/services/`.
2.  Use RTK Query's `createApi` to define endpoints.
3.  Add the generated hook to your component.

### Updating Themes
-   Modify `src/styles/themes.ts` to change colors, margins, or shared constants globally.

---

## 📦 Dependencies
-   **Theming**: `react-native-unistyles`
-   **Navigation**: `@react-navigation/native`
-   **State**: `@reduxjs/toolkit`, `react-redux`, `redux-persist`
-   **Storage**: `react-native-mmkv`
-   **Icons**: `expo-vector-icons`
-   **Fonts**: `expo-font`, `Open Sans`
