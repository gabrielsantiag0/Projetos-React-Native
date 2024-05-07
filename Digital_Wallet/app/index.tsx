 import Wallet from '@/src/wallet'
import React from 'react'
import { View, Text, StyleSheet  } from 'react-native'
import COLORS from "../src/styles/theme"


export default function App() {
    return (
      <View style={styles.container}>
        <Wallet />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: COLORS.COLORS.ATTENTION_LIGHT4
    },
  });
  