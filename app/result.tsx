import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, Dimensions } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Colors } from '../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function ResultScreen() {
  const { barcode } = useLocalSearchParams();
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <FontAwesome name="arrow-left" size={18} color={Colors.light.tint} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Scan Result</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.content}>
        <View style={styles.barcodeImageContainer}>
          <FontAwesome name="barcode" size={110} color={Colors.light.tint} />
        </View>

        <View style={styles.resultCard}>
          <Text style={styles.resultLabel}>UPC BARCODE</Text>
          <Text style={styles.barcode}>{barcode}</Text>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <FontAwesome name="info-circle" size={16} color="#666" style={styles.infoIcon} />
            <Text style={styles.infoText}>
              This is the unique product code that can be used to identify this item.
            </Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.scanButton}
            onPress={() => router.back()}
          >
            <FontAwesome name="camera" size={20} color="white" />
            <Text style={styles.scanButtonText}>Scan Another</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.homeButton}
            onPress={() => router.push('/')}
          >
            <FontAwesome name="home" size={20} color={Colors.light.tint} />
            <Text style={styles.homeButtonText}>Back to Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  barcodeImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  resultCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    width: '100%',
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
  resultLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
    letterSpacing: 1,
  },
  barcode: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    letterSpacing: 1.5,
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    width: '100%',
    marginVertical: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
  },
  infoIcon: {
    marginRight: 10,
    marginTop: 2,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    flex: 1,
    lineHeight: 20,
  },
  buttonContainer: {
    marginTop: 30,
  },
  scanButton: {
    backgroundColor: Colors.light.tint,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  scanButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  homeButton: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.light.tint,
  },
  homeButtonText: {
    color: Colors.light.tint,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
}); 