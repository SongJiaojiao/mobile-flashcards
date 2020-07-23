import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { purple, white } from '../utils/colors'
import { useNavigation } from '@react-navigation/native';


const Stack = createStackNavigator()

function DeckItem(props) {
    const navigation = useNavigation()
    navigateToDeck = () =>{
        navigation.navigate(
            'DeckDetail',
          )

    }


    return (
        <View style={styles.deck}>
        
            <TouchableOpacity onPress = {this.navigateToDeck}>
                <Text >Deck  {props.deckName}</Text>
                <Text>{props.numOfCards}</Text>
            </TouchableOpacity>
        </View>

        
    )

}

export default DeckItem

const styles = StyleSheet.create({
    deck: {
        height: 128,
        backgroundColor: white,
        borderRadius: 10,
        padding: 16,
        marginBottom: 16
    },
});
