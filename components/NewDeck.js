import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { styleSheet } from '../utils/stylesheet'
import { connect } from 'react-redux'
import { handleAddDeck, handleAddCardToDeck } from '../actions'

class NewDeck extends React.Component {
    state = {
        title: ''
    }
    navigateToDeck = () => {
        const { navigation, dispatch } = this.props
        dispatch(handleAddDeck(this.state.title)).then(() => {
            navigation.navigate(
                'DeckDetail', {
                deckName: this.state.title,
                numOfCards: 0
            }
            )
            this.setState({
                title: ''
            })

        })

    }
    handleTextChange = (e) => {
        this.setState({
            title: e
        })

    }
    render() {
        return (
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styleSheet.container}>
                <View style={styleSheet.container}>
                    <Text style={styleSheet.bodyRegular}>What's the title of your deck?</Text>
                    <TextInput value={this.state.title} onChangeText={this.handleTextChange} style={styleSheet.textInput} />
                    <TouchableOpacity onPress={this.navigateToDeck} style={styleSheet.primaryButton}>
                        <Text style={styleSheet.buttonTextLight}>Create Deck</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const mapStateToProps = ({ decks }) => {
    return { decks }
}

export default connect(mapStateToProps)(NewDeck)

const styles = StyleSheet.create({


});