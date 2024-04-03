import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AddMedication = ({ navigation }) => {
  const [name, setName] = useState('');
  const [form, setForm] = useState('');
  const [dose, setDose] = useState('');
  const [price, setPrice] = useState('');

  const handleAddMedication = () => {
    fetch('http://192.168.100.40:3000/medications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, form, dose, price }),
    })
    .then(response => {
      if (response.ok) {
        // Medication added successfully, navigate back to the medication list screen
        navigation.navigate('MedicationsList');
      } else {
        // Handle medication add error, show error message to the user
        console.error('Failed to add medication');
      }
    })
    .catch(error => {
      console.error('Error occurred while adding medication:', error);
    });
  };  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Medication</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Form"
        value={form}
        onChangeText={setForm}
      />
      <TextInput
        style={styles.input}
        placeholder="Dose"
        value={dose}
        onChangeText={setDose}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleAddMedication}>
        <Text style={styles.buttonText}>Add Medication</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: '100%',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AddMedication;
