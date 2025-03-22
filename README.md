# Expo Barcode Scanner Template

A reusable template for creating barcode scanning apps using Expo and React Native.

## Setup Instructions

1. Create a new Expo project:
```bash
npx create-expo-app YourAppName
cd YourAppName
```

2. Install required dependencies:
```bash
npx expo install expo-camera @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context
```

3. Copy the following files from this template:
- `App.js`
- `screens/ScannerScreen.js`
- `screens/ResultScreen.js`

## Important Notes

### Camera Permissions
- For iOS: Add the following to your `app.json`:
```json
{
  "expo": {
    "plugins": [
      [
        "expo-camera",
        {
          "cameraPermission": "Allow $(PRODUCT_NAME) to access your camera"
        }
      ]
    ]
  }
}
```

### Common Issues & Fixes
1. If you see "CameraType.back is undefined":
   - Use `CameraView` instead of `Camera` component
   - Use `useCameraPermissions` hook for permission handling
   - Remove `CameraType` import and usage

2. If camera permissions don't work:
   - Make sure to use `useCameraPermissions` hook
   - Check if permissions are properly configured in app.json
   - Test on a physical device as simulators may have permission issues

### Supported Barcode Types
- QR Code
- EAN-13
- EAN-8
- UPC

## Usage
1. Start the development server:
```bash
npx expo start
```

2. Scan the QR code with:
- iOS: Camera app
- Android: Expo Go app

## Features
- Real-time barcode scanning
- Permission handling
- Navigation between screens
- Clean UI with proper error states
- Support for multiple barcode types 