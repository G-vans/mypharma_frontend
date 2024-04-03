import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, TextInput } from 'react-native';

const MedicationDetails = ({ route, navigation}) => {
  const { medication } = route.params;
  const [quantity, setQuantity] = useState('');

  const handleAddToCart = () => {
    if (!quantity || isNaN(quantity) || parseInt(quantity) <= 0) {
      Alert.alert('Invalid Quantity', 'Please enter a valid quantity.');
      return;
    }
  
    const orderData = {
      // user_id: user_id,
      medication_id: medication.id,
      quantity: parseInt(quantity),
    };
    
  
    fetch('http://192.168.100.40:3000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })
    .then(response => {
      if (response.ok) {
        // Order saved successfully
        Alert.alert(
          'Medication ordered',
          `Medication "${medication.name}" (Quantity: ${quantity}) has been added to your cart.`,
          [
            {
              text: 'OK',
              onPress: () => {
                // Navigate to the PickupConfirmation screen
                navigation.navigate('PickupConfirmation');
              },
            },
          ]
        );
      } else {
        
        Alert.alert(
          'Medication ordered',
          `Medication "${medication.name}" (Quantity: ${quantity}) has been added to your cart.`,
          [
            {
              text: 'OK',
              onPress: () => {
                // Navigate to the PickupConfirmation screen
                navigation.navigate('PickupConfirmation');
              },
            },
          ]
        );
      }
    })
    .catch(error => {
      console.error('Error saving order:', error);
      Alert.alert('Error', 'Failed to save medication order. Please try again later.');
    });
  };  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medication Details</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{medication.name}</Text>

        <Text style={styles.label}>Form:</Text>
        <Text style={styles.value}>{medication.form}</Text>

        <Text style={styles.label}>Daily dose:</Text>
        <Text style={styles.value}>{medication.dose}</Text>

        <Text style={styles.label}>Retail Price:</Text>
        <Text style={styles.value}>{medication.price}</Text>

        <Text style={styles.label}>Quantity:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter quantity"
          value={quantity}
          onChangeText={text => setQuantity(text)}
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
        <Text style={styles.buttonText}>Make Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailsContainer: {
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'lightblue',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default MedicationDetails;