import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserList from './views/UserList';
import UserForm from './views/UserForm';
import { Button, Icon } from '@rneui/themed';



const Stack = createNativeStackNavigator()

export default function CrudReact() {
  return (
      <NavigationContainer>

        <Stack.Navigator
        initialRouteName='UserList'
        screenOptions={screenOptions}
        >
    <Stack.Screen
    name='UserList'
    component={UserList}
    options={ ( { navigation  } ) =>{
        return {
            title: "Lista De Usuários",
            headerRight: () => (
              <Button 
              onPress={() => navigation.navigate("UserForm")}
              type="clear"
              icon ={<Icon name="add" size={24} color="white"/>}
              />
            )
        }
    }}
    >

    </Stack.Screen>
    <Stack.Screen
    name='UserForm'
    component={UserForm}
    options={{
        title: 'Formulario de Usuários '
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