# UPC Barcode Scanner

A React Native Expo app that allows users to scan UPC barcodes using their device's camera. This app demonstrates how to implement barcode scanning functionality in a React Native application using Expo libraries with a beautiful, modern UI.

## Features

- Scan UPC barcodes (UPC-A, UPC-E, EAN-13, EAN-8) with a beautifully designed scanner
- Display the scanned barcode value in a clean, modern UI
- Flashlight/torch control for low-light scanning
- Beautiful animations and transitions between screens
- Clean, modern UI with intuitive design

## Technologies Used

- React Native
- Expo
- expo-camera
- Expo Router for navigation

## Getting Started

### Prerequisites

- Node.js (LTS version)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator (optional)
- Physical device with Expo Go app (for testing on a real device)

### Installation

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

3. Use the app:
   - Scan the QR code with Expo Go app on your phone
   - Press `i` to open in iOS simulator
   - Press `a` to open in Android emulator

## How to Use

1. Launch the app and view the welcome screen
2. Tap "Start Scanning" to open the scanner 
3. Position a UPC barcode within the scanning frame
4. Once the barcode is scanned, view the result on the detailed result screen
5. Choose to scan another barcode or return to the home screen

## App Structure

- **Welcome Screen**: Introduction with a "Start Scanning" button
- **Scanner Screen**: Beautiful scanner with guides and flashlight control
- **Result Screen**: Displays the scanned barcode with options to scan another or return home

## Implementation Details

The app uses the `CameraView` component from `expo-camera` to implement the barcode scanning functionality. The UI has been carefully designed with modern aesthetics including:

- Corner markers for the scan area
- Flashlight/torch button
- Beautiful transitions between screens
- Detailed result display

## Documentation References

- [Expo Camera Documentation](https://docs.expo.dev/versions/latest/sdk/camera/)

## License

MIT
