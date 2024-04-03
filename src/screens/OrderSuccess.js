import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import tickImage from '../tick.png';

const OrderSuccess = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={tickImage} style={styles.tickImage} />
      <Text style={styles.message}>Your order has been successfully placed!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.link}>Go to home</Text>
      </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tickImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default OrderSuccess;
