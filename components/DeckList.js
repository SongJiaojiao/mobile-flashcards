import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import DeckItem from './DeckItem'
import { connect } from 'react-redux'
import { styleSheet } from '../utils/stylesheet'
import { handleGetDecks } from '../actions'

class DeckList extends React.Component {
    state = {
        deck: {}
    }
    componentDidMount() {
        this.props.dispatch(handleGetDecks())
    }
    render() {

        const { decksList } = this.props

        return (
            <View style={styles.deckList}>
                {decksList !== undefined
                    ? decksList.map(
                        (deck) =>
                            <DeckItem key={deck.title} deckName={deck.title} numOfCards={deck.numOfCards} navigation={this.props.navigation}/>
                    )
                    : <Text>Loading</Text>
                }
            </View>

        )
    }
}


const mapStateToProps = ({ decks }) => {

    const decksList = []
    const decksName = Object.keys(decks)
    decksName.map((deckName) => {
        const deck = {
            title: deckName,
            numOfCards: decks[deckName].questions.length
        };

        decksList.push(deck)
    })
    return { decksList }
};

export default connect(mapStateToProps)(DeckList)

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