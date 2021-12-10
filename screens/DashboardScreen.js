import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Button, Input, Image } from 'react-native-elements'

import Icon from 'react-native-vector-icons/FontAwesome'

const DashboardScreen = () => {
  const [search, setSearch] = useState('')
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View>
        <TextInput
          placeholder="Digite o chamado ou operador"
          style={styles.input}
          onChangeText={(search) => setSearch(search)}
          defaultValue={search}
        />
        <Button title="Buscar" />
        <Text>{search}</Text>
      </View>
    </View>
  )
}

export default DashboardScreen

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    padding: 10,
  },
})
