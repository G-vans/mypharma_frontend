import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to MyPharma</Text>
      <Text style={styles.smallText}>Utibu's health pharmaceutical partner</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddMedication')}>
        <Text style={styles.buttonText}>Add Medication</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    // marginBottom: 20,
  },
  smallText: {
    color: '#fff',
    fontSize: 14,
    // fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
  },
  buttonText: {
    color: '#007bff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
