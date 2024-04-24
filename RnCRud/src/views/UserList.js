import React from 'react'
import { FlatList, Text, View } from 'react-native'
import Users from '../data/Users'
import { ListItem, Avatar, Icon } from '@rneui/themed';
import { Button } from '@rneui/themed';


export default props =>{

    function confirmUserDeletion(User) {

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
                onPress={() => props.navigation.navigate('UserForm', Users)}
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
            data={Users}
            renderItem={getUserItem}
            />
        </View>
    )
}