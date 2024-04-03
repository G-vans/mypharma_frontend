import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpForm from '../screens/SignUpForm';
import AddMedication from '../screens/AddMedication';
import MedicationsList from '../screens/MedicationsList';
import MedicationDetails from '../screens/MedicationDetails';
import RefillConfirmation from '../screens/RefillConfirmation';
import PickupConfirmation from '../screens/PickupConfirmation';
import PaymentConfirmation from '../screens/PaymentConfirmation';
import OrderSuccess from '../screens/OrderSuccess';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpForm" component={SignUpForm} />
        <Stack.Screen name="AddMedication" component={AddMedication} />
        <Stack.Screen name="MedicationsList" component={MedicationsList} />
        <Stack.Screen name="MedicationDetails" component={MedicationDetails} />
        <Stack.Screen name="RefillConfirmation" component={RefillConfirmation} />
        <Stack.Screen name="PickupConfirmation" component={PickupConfirmation} />
        <Stack.Screen name="PaymentConfirmation" component={PaymentConfirmation} />
        <Stack.Screen name="OrderSuccess" component={OrderSuccess} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
