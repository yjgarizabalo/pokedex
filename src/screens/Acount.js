import React from 'react'
import { View, Text } from 'react-native'
import LoginForm from '../components/Auth/LoginForm'
import UserData from '../components/Auth/UserData'


const auth = null

export default function Acount() {
  return (
    <View>
      {auth ? <UserData /> : <LoginForm />}
    </View>
  )
}