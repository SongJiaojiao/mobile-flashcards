import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import DeckItem from './DeckItem'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


class DeckList extends React.Component {
    render() {
        return (
            <View style={styles.deckList}>
                <DeckItem deckName='Deck 1' numOfCards='1' />
                <DeckItem deckName='Deck 2' numOfCards='2' />
            </View>
           
        )
    }
}

export default DeckList

const styles = StyleSheet.create({
    deckList: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 48

    },
});