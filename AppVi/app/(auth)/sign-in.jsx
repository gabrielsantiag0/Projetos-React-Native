import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import React from 'react'

import { images } from '../../constants'

const SingIn = () => {
  return (
    <SafeAreaView
    className="bg-primary h-full"
    >
     <ScrollView>
      <View
      className=" w-full justify-center h-full px-4 my-6"
      >
        <Image 
          className="w-[115px] h-[35px]"
          source={  images.logo  }
          resizeMode='contain'
        />
        <Text
        className="text-2xl text-white text-semibold mt-10 font-psemibold"
        >
          Log in to Aora
          </Text>
      </View>
      </ScrollView> 
    </SafeAreaView>
  )
}

export default SingIn

