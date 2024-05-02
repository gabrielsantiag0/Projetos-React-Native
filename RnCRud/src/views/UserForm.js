import { Input } from '@rneui/themed'
import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { UserContext } from '../context/UsersContext'



export default ( { route, navigation  } ) =>{
    const [User, setUser] = useState( route.params ? route.params : {} )
    
         const {dispatch}   = useContext(UserContext)
    
    return(
        <View style={style.form}>
            <Text>Name</Text>
            <Input
            style={style.Input} 
            onChangeText={name =>setUser( { ...User, name } ) }
            placeholder=' Your Name '
            value={User.name}
          />
              <Text>Email</Text>
            <Input
            style={style.Input} 
            onChangeText={email =>setUser( { ...User, email } ) }
            placeholder=' Your email '
            value={User.email}
          />
              <Text>Url do Avatar</Text>
            <Input
            style={style.Input} 
            onChangeText={avatarUrl =>setUser( { ...User, avatarUrl } ) }
            placeholder='  Url  '
            value={User.avatarUrl}
          />
        <Button 
        title='Salvar'
        onPress={() => {
           dispatch({
            type: User.id ? 'uptadeUser' : 'createUser',
            payload: User,
           })
            navigation.goBack()
        }}
        />
        </View>
    )
}

const style = StyleSheet.create({
    form: {
        padding: 12,

    },
    Input: {
        borderWidth: 1,
    }
})