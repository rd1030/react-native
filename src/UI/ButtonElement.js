import React from 'react'
import { StyleSheet, TouchableOpacity,Text} from 'react-native'

export const ButtonElement = props => {
    return (
        <TouchableOpacity
        style={styles.button}
        onPress={props.onPress}
      >
        <Text style={styles.textColor}>Войти</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#AD1A10",
        borderRadius: 10,
        padding: 10,
        height:60,
        justifyContent:"center"
      },
      textColor: {
        color: "#fff",
        fontSize:20
      }
})


