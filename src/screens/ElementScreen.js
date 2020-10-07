import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity,ScrollView } from 'react-native'
import { Navbar } from '../UI/Navbar'

export const ElementScreen = ({ navigation }) => {
  const goToList = (login) => {
    navigation.navigate('List', { login })
    console.log('log = ',login)
  }
  const goToAuth = () => {
    navigation.navigate('Auth', {  })
  }
  return (
    <View style={styles.mainlayout}>
      <View style={styles.topContent}>
        <Navbar title="График" textRight={navigation.state.params.username} icon={true} />
        <ScrollView style={styles.textContainer}>
          <Text style={styles.nameText}>{navigation.state.params.name}</Text>
          <Text style={styles.desText}>{navigation.state.params.description}</Text>
        </ScrollView>
      </View>
      <View style={styles.layoutButton}>

        <TouchableOpacity
          onPress={() => goToList(navigation.state.params.username)}
          style={styles.leftButton}
        >
          <Text style={styles.leftText}>Назад</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={goToAuth}
          style={styles.rightButton}
        >
          <Text style={styles.rightText}>Выйти из аккаунта</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

ElementScreen.navigationOptions = {
  headerShown: false
}

const styles = StyleSheet.create({
  mainlayout: {
    flexDirection: "column",
    justifyContent: "space-between",
    height:"100%"
  },
  textContainer: {
    padding: 20,
    height: "80%"
  },
  layoutButton: {
    flexDirection: "row"
  },
  leftButton: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    paddingBottom:15,
    height: 80,
    justifyContent: "center",
    width: "50%",
    borderWidth: 2,
    borderColor: "#AD1A10"
  },
  leftText: {
    color: "#AD1A10",
    fontSize: 25
  },
  rightButton: {
    alignItems: "center",
    backgroundColor: "#AD1A10",
    padding: 10,
    paddingLeft:40,
    paddingBottom:25,
    flexDirection:"row",
    height: 80,
    justifyContent: "center",
    width: "50%"
  },
  rightText: {
    color: "#fff",
    fontSize: 25
  },
  nameText: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 20
  },
  desText: {
    fontSize: 30,
    paddingBottom: 80
  }
})
