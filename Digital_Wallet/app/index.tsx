import React from "react";
import AppLoading from "expo-app-loading";
import { Text, SafeAreaView } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider   } from "styled-components/native";

import {
    useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold
} from "@expo-google-fonts/poppins"

import {  DMSans_400Regular  } from "@expo-google-fonts/dm-sans"
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display"

import COLORS from "../src/styles/theme"
import Wallet from "@/src/wallet";

export default function App() {
    
    const [fontsLoaded] = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold_Italic,
        Poppins_800ExtraBold,
        DMSans_400Regular,
        DMSerifDisplay_400Regular
    }) 

    if (!fontsLoaded) {
        return<AppLoading />
    }

    return(
    <ThemeProvider theme={COLORS}>
   <StatusBar
   style="dark"
   translucent
   backgroundColor="transparent"
/>
        <SafeAreaView>
            <Wallet />
        </SafeAreaView>
    </ThemeProvider>
    )
}