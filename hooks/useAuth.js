import React, { createContext, useContext } from 'react'

import * as Google from 'expo-google-app-auth'

const AuthContext = createContext({})

const config = {
  androidClientId:
    '847723180440-a6efk6i1uvkaomo9i0j93ksdgig6j3b0.apps.googleusercontent.com',
  iosClientId:
    '847723180440-csi2hqgqjvjcddc4o4286942cfq8gp44.apps.googleusercontent.com',
  scopes: ['profile', 'email'],
  permissions: ['public_profile', 'email', 'gender', 'location'],
}

export const AuthProvider = ({ children }) => {
  const signInWithGoogle = async () => {
    await Google.logInAsync(config).then(async (loginResult) => {
      if (loginResult.type === 'success') {
      }
    })
  }

  return (
    <AuthContext.Provider value={{ user: null, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  )
}

export default function useAuth() {
  return useContext(AuthContext)
}
