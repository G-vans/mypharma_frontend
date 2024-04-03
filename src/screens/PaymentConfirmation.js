import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const PaymentConfirmation = ({ navigation }) => {
  const [paymentOption, setPaymentOption] = useState(null);
  const [mpesaNumber, setMpesaNumber] = useState('');

  const handlePaymentOption = (option) => {
    setPaymentOption(option);
  };

  const handleConfirmPayment = () => {
    if (paymentOption === 'payNow' && !mpesaNumber) {
      alert('Please provide M-Pesa phone number for payment.');
      return;
    }
    // Handle payment confirmation logic here
    if (paymentOption === 'payNow') {
      // Implement logic to initiate STK push payment
      Alert.alert('Initiating STK push payment to', mpesaNumber);
      //navigate to the final screen
      navigation.navigate('OrderSuccess');
    } else {
      // Navigate to order details page/ final screen
      navigation.navigate('OrderSuccess');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Confirmation</Text>
      <TouchableOpacity
        style={[styles.optionButton, paymentOption === 'payNow' && styles.selectedOption]}
        onPress={() => handlePaymentOption('payNow')}
      >
        <Text style={styles.optionButtonText}>Pay Now</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.optionButton, paymentOption === 'payLater' && styles.selectedOption]}
        onPress={() => handlePaymentOption('payLater')}
      >
        <Text style={styles.optionButtonText}>Pay Later</Text>
      </TouchableOpacity>
      {paymentOption === 'payNow' && (
        <TextInput
          style={styles.input}
          placeholder="Enter M-Pesa Phone Number"
          value={mpesaNumber}
          onChangeText={setMpesaNumber}
        />
      )}
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmPayment}>
        <Text style={styles.confirmButtonText}>Confirm Payment</Text>
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '100%',
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

export default PaymentConfirmation;
