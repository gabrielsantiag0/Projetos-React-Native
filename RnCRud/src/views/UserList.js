import React from 'react'
import { FlatList, Text, View } from 'react-native'
import Users from '../data/Users'
import { ListItem, Avatar } from '@rneui/themed';



export default props =>{

    function getUserItem(  { item: Users }  ) {
        return (
            <ListItem>
                <Avatar
                source={{uri: }}
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