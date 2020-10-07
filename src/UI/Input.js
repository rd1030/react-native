import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

export const Input = props => {
    return (
        <View style={styles.layoutInput}>
            <TextInput
                onChangeText={text => props.method(text)}
                style={styles.input}
                secureTextEntry={props.secure}
                placeholder={props.name}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#8A8A8A',
        height: 60,
        paddingLeft: 20,
        fontSize: 20,
    },
    layoutInput: {
        paddingTop: 10
    }
})