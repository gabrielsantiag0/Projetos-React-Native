import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserList from './views/UserList';
import UserForm from './views/UserForm';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
      <NavigationContainer>

        <Stack.Navigator
        initialRouteName='UserList'
        screenOptions={screenOptions}
        >
    <Stack.Screen
    name='UserList'
    component={UserList}
    >

    </Stack.Screen>
    <Stack.Screen
    name='UserForm'
    component={UserForm}
    options={{
        title: 'Formulario de Usuarios '
    }}
    >
    </Stack.Screen>

        </Stack.Navigator>
      </NavigationContainer>
  );
}

const screenOptions ={
    headerStyle: {
        backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}