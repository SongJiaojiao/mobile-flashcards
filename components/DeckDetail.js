import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import DeckItem from './DeckItem'


class DeckDetail extends React.Component{
    render(){
        return (
            <View style={styles.deckList}>
                <Text>DeckDetails</Text>
            </View>
        )
    }
}

export default DeckDetail

const styles = StyleSheet.create({
    deckList: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        paddingLeft:16,
        paddingRight:16,
        paddingTop:48

    },
});