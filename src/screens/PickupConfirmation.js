import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const PickupConfirmation = ({ navigation }) => {
  const [deliveryOption, setDeliveryOption] = useState(null);
  const [address, setAddress] = useState('');
  const [contactInfo, setContactInfo] = useState('');

  const handleDeliveryOption = (option) => {
    setDeliveryOption(option);
  };

  const handleConfirm = () => {
    if (deliveryOption === 'delivery' && (!address || !contactInfo)) {
      alert('Please provide address and contact information for delivery.');
      return;
    }
    Alert.alert('Delivery option confirmed');
    // Navigate to payment page or further steps
    navigation.navigate('PaymentConfirmation');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pickup Confirmation</Text>
      <TouchableOpacity
        style={[styles.optionButton, deliveryOption === 'delivery' && styles.selectedOption]}
        onPress={() => handleDeliveryOption('delivery')}
      >
        <Text style={styles.optionButtonText}>Delivery</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.optionButton, deliveryOption === 'pickup' && styles.selectedOption]}
        onPress={() => handleDeliveryOption('pickup')}
      >
        <Text style={styles.optionButtonText}>Pickup at Hospital</Text>
      </TouchableOpacity>
      {deliveryOption === 'delivery' && (
        <View style={styles.deliveryDetails}>
          <TextInput
            style={styles.input}
            placeholder="Enter Address"
            value={address}
            onChangeText={setAddress}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Contact Information"
            value={contactInfo}
            onChangeText={setContactInfo}
          />
        </View>
      )}
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: 'lightblue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  optionButtonText: {
    fontWeight: 'bold',
    color: 'white',
  },
  selectedOption: {
    backgroundColor: 'blue',
  },
  deliveryDetails: {
    width: '100%',
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  confirmButton: {
    backgroundColor: 'green',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 20,
  },
  confirmButtonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
});

export default PickupConfirmation;
