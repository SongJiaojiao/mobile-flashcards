import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { purple, white } from '../utils/stylesheet'
import { useNavigation } from '@react-navigation/native';
import { styleSheet,blue } from '../utils/stylesheet'


function DeckItem(props) {
    // const navigation = useNavigation()
    const {navigation} = props
    navigateToDeck = () => {
        navigation.navigate(
            'DeckDetail', {
            deckName: props.deckName,
            numOfCards:props.numOfCards
        }
        )
    }

    return (
        <View>
            <TouchableOpacity onPress={this.navigateToDeck} style={styles.deck}>
                <Text style = {[styleSheet.header1,{color:white}]} >{props.deckName}</Text>
                <Text style = {[styleSheet.header2,{color:white}]}>{props.numOfCards} Cards</Text>
            </TouchableOpacity>
        </View>


    )

}

export default DeckItem

const styles = StyleSheet.create({
    deck: {
        height: 112,
        backgroundColor: blue,
        borderRadius: 10,
        padding: 16,
        marginBottom: 16
    },
});
