import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { Button } from 'react-native-elements'

import Icon from 'react-native-vector-icons/FontAwesome'
import HomeMap from '../comonents/HomeMap'

const DashboardScreen = () => {
  const [search, setSearch] = useState('')
  return (
    <SafeAreaView style={styles.container}>
      <HomeMap />
    </SafeAreaView>
  )
}

export default DashboardScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    padding: 10,
  },
})
