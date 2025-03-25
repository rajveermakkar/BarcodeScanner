import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useRouter, Stack } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      
      <View style={styles.headerContainer}>
        <Image
          source={require('../../assets/images/icon.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>UPC Barcode Scanner</Text>
        <Text style={styles.subtitle}>Quickly scan and identify products</Text>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <FontAwesome name="barcode" size={50} color={Colors.light.tint} style={styles.cardIcon} />
          <Text style={styles.cardTitle}>Scan Product Barcodes</Text>
          <Text style={styles.cardDescription}>
            This app helps you scan UPC-A, UPC-E, EAN-13, and EAN-8 barcodes.
            Simply point your camera at the barcode to identify products.
          </Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.push('/barcode-scanner')}
        >
          <FontAwesome name="camera" size={24} color="white" />
          <Text style={styles.buttonText}>Start Scanning</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>
        Made with Expo & React Native
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.light.tint,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  cardContainer: {
    width: '100%',
    padding: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardIcon: {
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: Colors.light.tint,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 18,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  footer: {
    fontSize: 12,
    color: '#999',
    marginBottom: 10,
  },
});
