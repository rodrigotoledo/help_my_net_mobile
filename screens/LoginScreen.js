import React from 'react'
import { Button } from 'react-native-elements'
import Hr from 'react-native-hr-component'

import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'

import useAuth from '../hooks/useAuth'
import { SafeAreaView, StyleSheet, TextInput } from 'react-native'

const LoginScreen = () => {
  const signInWithGoogle = useAuth()
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <Icon name="comments-o" size={100} color={DEFAULT_COLOR} />
      <TextInput
        style={styles.textInput}
        placeholderTextColor={DEFAULT_COLOR}
        placeholder="Entre com seu usuário"
      />
      <Hr
        text="Todas as informações são necessárias"
        fontSize={14}
        lineColor={DEFAULT_COLOR}
        textPadding={5}
        thickness={4}
        hrStyles={{
          padding: 5,
        }}
        textStyles={{
          color: DEFAULT_COLOR,
        }}
      />
      <TextInput
        style={styles.textInput}
        placeholderTextColor={DEFAULT_COLOR}
        placeholder="Entre com sua senha"
        secureTextEntry={true}
      />
      <Button
        title="Ir Dashboard"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate('Dashboard')}
      />
    </SafeAreaView>
  )
}

export default LoginScreen

const DEFAULT_COLOR = '#c40093'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,
    width: '100%',
  },

  textInput: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: DEFAULT_COLOR,
    width: '90%',
    height: 60,
    padding: 10,
    margin: 10,
    alignSelf: 'center',
  },

  button: {
    backgroundColor: DEFAULT_COLOR,
    width: '90%',
  },
})
