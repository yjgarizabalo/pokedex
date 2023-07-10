import React from 'react'
import { View, Text } from 'react-native'
import LoginForm from '../components/Auth/LoginForm'
import UserData from '../components/Auth/UserData'
import useAuth from '../hook/UseAuth'



export default function Acount() {
  const { auth } = useAuth()
  return (
    <View>
      {auth ? <UserData /> : <LoginForm />}
    </View>
  )
}