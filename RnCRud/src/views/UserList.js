import React, { useContext } from 'react'
import { Alert, FlatList, View } from 'react-native'
import { ListItem, Avatar, Icon } from '@rneui/themed';
import { Button } from '@rneui/themed';
import { UserContext } from '../context/UsersContext';


export default props =>{

  const { state, dispatch } =  useContext(UserContext)

    function confirmUserDeletion(User) {
        Alert.alert('Excluir Usuário', 'Deseja exluir o usuário?', [
            {
                text: 'SIM',
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload:  User,
                    })
                }
            },
            {
                text: 'NÃO'
            }
        ])
    }

    function getUserItem(  { item: Users }  ) {
        return (
            <ListItem 
            bottomDivider
            onPress={ () => props.navigation.navigate('UserForm') }
          >
                <Avatar
                source={{uri: Users.avatarUrl}}
                key={Users.id}
                />
              <ListItem.Content>
                <ListItem.Title>{Users.name}</ListItem.Title>
                <ListItem.Subtitle>{Users.email}</ListItem.Subtitle>
              </ListItem.Content>
              <Button 
                onPress={() => props.navigation.navigate('UserForm', Users)}
                type="clear"
                icon={<Icon name='edit' size={25} color='orange'/>}
                />
                <Button 
                onPress={() => confirmUserDeletion(Users)}
                type="clear"
                icon={<Icon name='delete' size={25} color='red'/>}
                />
            </ListItem>
        )
    }

    return(
        <View>
            <FlatList 
            keyExtractor={user => user.id.toString()}
            data={state.Users}
            renderItem={getUserItem}
            />
        </View>
    )
}