import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'

export const Navbar = props => {

    return (
        <View style={styles.navbar}>

            <Text style={styles.text}>
                {props.title}
            </Text>

            {props.textRight ? <Text style={styles.textRight}>
                {props.textRight}<FontAwesome style={styles.icon} name='user' size={20} />
            </Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 90,
        paddingLeft: 25,
        paddingRight: 25,
        paddingBottom:20,
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        backgroundColor: '#BB0D02',
        width: '100%',
        flexDirection: 'row'
    },
    text: {
        color: '#fff',
        fontSize: 20,
    },
    textRight: {
        color: '#fff',
        fontSize: 20,
        alignItems: 'flex-end'
    },
    icon: {
        paddingLeft: 15,
        paddingRight:15
    }
})