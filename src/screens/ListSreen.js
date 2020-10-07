import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Navbar } from '../UI/Navbar'
import data from '../../basedate.json'

export const ListScreen = ({ navigation }) => {
  const goToElement = (username,description,name) => {
    navigation.navigate('Element', { username,description, name })
  }
  function createNames() {
    return data.map(item => {
      return <TouchableOpacity
        onPress={ ()=>goToElement( navigation.state.params.login,item.description,item.title)}
        key={`${item.id}${item.title}`}
        style={styles.title}>
        <Text style={styles.textStyle}>{item.title}</Text>
      </TouchableOpacity >
    })
  }
  return (
    <View >
      <Navbar title="Список" textRight={navigation.state.params.login} icon={true} /> 
      {createNames()}
    </View>
  )
}

ListScreen.navigationOptions = {
  headerShown: false
}

{/*navigation.state.params.username ||*/}
const styles = StyleSheet.create({
  textStyle: {
    padding: 20,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#8A8A8A',
    fontSize: 20
  },
  title: {
    padding: 10
  }
})
