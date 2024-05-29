import { Image, ScrollView, Text, View } from 'react-native'
import React, { useState }  from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

import { images } from '../../constants'

import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'

const SingIn = () => {

  const [Form, setForm] = useState({
    email: '',
    password: ''
  })

  const [isSubmitting, setisSubmitting] = useState(false)

  const submit = () => {

  }

  return (
    <SafeAreaView
    className="bg-primary h-full"
    >
     <ScrollView>
      <View
                                      //min-h-[85vh] \\
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
          <FormField 
          title="Email"
          value={Form.email}
          handleChangeText={(e) => setForm({  ...Form, email: e  })}
          otherStyles="mt-7"
          keybordType="email-address"
          />
          <FormField 
          title="Password"
          value={Form.password}
          handleChangeText={(e) => setForm({  ...Form, password: e  })}
          otherStyles="mt-7"
          />
          <CustomButton 
          title="Sign In"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={isSubmitting}
          />
          <View
          className="justify-center pt-5 flex-row gap-2"
          >
            <Text
            className="text-lg text-gray-100 font-pregular"
            >
              Don't have account?
              </Text>
              <Link
              className="text-lg font-psemibold text-secondary"
              href="/sign-up"
              >
                Sign Up
              </Link>
          </View>
      </View>
      </ScrollView> 
    </SafeAreaView>
  )
}

export default SingIn

