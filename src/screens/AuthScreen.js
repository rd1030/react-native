import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Navbar } from '../UI/Navbar';
import { Input } from '../UI/Input';
import { ButtonElement } from '../UI/ButtonElement'
import { useDispatch, useSelector } from 'react-redux'
import { loadLogin } from '../store/actions/login'

export const AuthScreen = ({ navigation }) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

   useEffect(() => {
     dispatch(loadLogin(username))})

  const login = useSelector(state => {
    return state.login.login})

  const goToList = () => {
    navigation.navigate('List', { login })
  }

  return (
    <View style={styles.container}>
      <Navbar title="Вход в личный кабинет" />
      <Text style={styles.mainTitle}>Вход</Text>
      <Text style={styles.mainDescription}>
        Согласно классификации М. Вебера, форма политического сознания предсказуема.
        Политиеская пихология, согласно традиционным представлениям, символизирует системный культ  личности
      </Text>
      <View style={styles.inputArea}>
        <Input
          method={setUsername}
          name="Логин"
          secure={false}
        />
        <Input
          method={setPassword}
          name="Пароль"
          secure={true}
        />
      </View>
      <View style={styles.bthLayout}>
        <ButtonElement onPress={goToList} bthStyle="Standart" />
      </View>
    </View>
  )
}

AuthScreen.navigationOptions = {
  headerShown: false
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '94%'
  },
  mainTitle: {
    color: '#AD1A10',
    fontSize: 50,
    fontWeight: 'bold',
    paddingTop: 80,
    paddingBottom: 50
  },
  mainDescription: {
    color: '#8A8A8A',
    textAlign: 'center',
    width: '70%',
    fontSize: 20,
    paddingBottom: 40
  },
  inputArea: {
    width: '80%'
  },
  bthLayout: {
    paddingTop: 40,
    width: '50%',
    height: 80
  }
})
