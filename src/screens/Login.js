import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '../components/styles'

export default function Login() {
  return (
    <View style={{flex:1, backgroundColor:'blue'}}>
      <Text style={[globalStyles.h1_bold, {color:'white'}]}>Login</Text>
    </View>
  )
}