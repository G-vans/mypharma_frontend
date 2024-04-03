import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const MedicationsList = ({ navigation }) => {
  const [medications, setMedications] = useState([]);

  useEffect(() => {
    // Fetch medications from the server when the component mounts
    fetch('http://192.168.100.40:3000/medications')
      .then(response => response.json())
      .then(data => setMedications(data))
      .catch(error => console.error('Error fetching medications:', error));
  }, []);

  const handleRefillPress = (medication) => {
    // Navigate to MedicationDetails screen with the selected medication
    navigation.navigate('MedicationDetails', { medication });
  };

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.name}</Text>
      <Text style={styles.cell}>{item.form}</Text>
      <Text style={styles.cell}>${item.price.toFixed(2)}</Text>
      <TouchableOpacity style={styles.actionButton} onPress={() => handleRefillPress(item)}>
        <Text style={styles.actionButtonText}>Refill</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medications List</Text>
      <View style={styles.header}>
        <Text style={[styles.cell, styles.headerText]}>Medication</Text>
        <Text style={[styles.cell, styles.headerText]}>Form</Text>
        <Text style={[styles.cell, styles.headerText]}>Price</Text>
        <Text style={[styles.cell, styles.headerText]}>Action</Text>
      </View>
      <FlatList
        data={medications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
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
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 5,
  },
  headerText: {
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  cell: {
    flex: 1,
    padding: 5,
  },
  actionButton: {
    backgroundColor: 'lightblue',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  actionButtonText: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default MedicationsList;
