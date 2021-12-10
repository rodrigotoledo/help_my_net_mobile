import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input, Image } from 'react-native-elements'

import Icon from 'react-native-vector-icons/FontAwesome'

const LoginScreen = () => {
  return (
    <View>
      <StatusBar style="light" />
      <Icon name="comments-o" size={100} color="#ccc" />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})
