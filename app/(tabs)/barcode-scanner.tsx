import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Camera, CameraView } from 'expo-camera';
import { Stack, useRouter, useFocusEffect } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';

const { width } = Dimensions.get('window');
const SCAN_AREA_SIZE = width * 0.7;

export default function BarcodeScannerScreen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [torch, setTorch] = useState(false);
  const router = useRouter();

  // Reset scanned state when screen comes into focus
  useFocusEffect(
    React.useCallback(() => {
      setScanned(false);
      return () => {};
    }, [])
  );

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getCameraPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }: { type: string, data: string }) => {
    setScanned(true);
    router.push({
      pathname: '/result',
      params: { barcode: data }
    });
  };

  if (hasPermission === null) {
    return (
      <View style={styles.permissionContainer}>
        <FontAwesome name="camera" size={70} color={Colors.light.tint} style={styles.permissionIcon} />
        <Text style={styles.permissionText}>Requesting camera permission...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.permissionContainer}>
        <FontAwesome name="exclamation-triangle" size={70} color="#FF6B6B" style={styles.permissionIcon} />
        <Text style={styles.permissionText}>No access to camera</Text>
        <Text style={styles.permissionSubtext}>Camera access is required to scan barcodes</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Scan Barcode', headerShown: false }} />

      <View style={styles.camera}>
        <CameraView
          style={StyleSheet.absoluteFillObject}
          facing="back"
          enableTorch={torch}
          barcodeScannerSettings={{
            barcodeTypes: ["upc_e", "upc_a", "ean13", "ean8"]
          }}
          onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        >
          <View style={styles.overlay}>
            <View style={styles.header}>
              <TouchableOpacity
                style={styles.homeButton}
                onPress={() => router.push('/')}
              >
                <FontAwesome name="home" size={20} color="white" />
              </TouchableOpacity>
              <Text style={styles.headerText}>UPC SCANNER</Text>
              <TouchableOpacity
                style={[styles.torchButton, torch ? styles.torchActive : {}]}
                onPress={() => setTorch(!torch)}
              >
                <FontAwesome name="bolt" size={20} color="white" />
              </TouchableOpacity>
            </View>

            <View style={styles.scanWindow}>
              <View style={styles.scanCorner1} />
              <View style={styles.scanCorner2} />
              <View style={styles.scanCorner3} />
              <View style={styles.scanCorner4} />
            </View>

            <Text style={styles.guidingText}>
              Align UPC barcode within the frame
            </Text>

            <View style={styles.footer}>
              <Text style={styles.footerText}>
                Scan UPC-A, UPC-E, EAN-13, EAN-8
              </Text>
            </View>
          </View>
        </CameraView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  camera: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  homeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  torchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  torchActive: {
    backgroundColor: Colors.light.tint,
  },
  scanWindow: {
    width: SCAN_AREA_SIZE,
    height: SCAN_AREA_SIZE / 1.5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  scanCorner1: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 20,
    height: 20,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderColor: Colors.light.tint,
  },
  scanCorner2: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 20,
    height: 20,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderColor: Colors.light.tint,
  },
  scanCorner3: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 20,
    height: 20,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderColor: Colors.light.tint,
  },
  scanCorner4: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 20,
    height: 20,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderColor: Colors.light.tint,
  },
  guidingText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: '500',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 12,
  },
  permissionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  permissionIcon: {
    marginBottom: 20,
  },
  permissionText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  permissionSubtext: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});