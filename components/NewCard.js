import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import DeckItem from './DeckItem'
import { styleSheet } from '../utils/stylesheet'
import { addCardToDeck, getDecks } from '../utils/api'
import { connect } from 'react-redux'
import { handleAddCardToDeck } from '../actions'
import { ButtonGroup } from 'react-native-elements'


class NewCard extends React.Component {
    state = {
        question: '',
        answer: '',
        explanation: '',
        selectedIndex: null

    }

    handleSubmit = () => {
        const { route, navigation, dispatch } = this.props
        const deckName = route.params.deckName
        const card = this.state
        dispatch(handleAddCardToDeck(deckName, card)).then(() => {
            const { decks } = this.props
            navigation.navigate(
                'DeckDetail',
                {
                    deckName,
                    numOfCards: decks[deckName].questions.length
                })

        })

    }
    updateIndex = (selectedIndex) => {
        this.setState({
            answer: selectedIndex === 0 ? 'True' : 'False',
            selectedIndex: selectedIndex
        }, () => console.log(this.state.answer))

    }

    render() {
        const buttons = ['True', 'False']

        return (
            <KeyboardAvoidingView  behavior={Platform.OS == "ios" ? "padding" : "height"}  style={styleSheet.container}>
                <View>
                    <Text style={styleSheet.bodyRegular}>Question</Text>
                    <TextInput value={this.state.question} style={styleSheet.textInput} onChangeText={(question) => this.setState({ question })}></TextInput>
                    <Text style={styleSheet.bodyRegular}>Answer</Text>
                    <ButtonGroup
                        onPress={this.updateIndex}
                        buttons={buttons}
                        selectedIndex={this.state.selectedIndex}
                    >
                    </ButtonGroup>

                    <Text style={[styleSheet.bodyRegular, { marginTop: 24 }]}>Explanation</Text>
                    <TextInput value={this.state.explanation} style={styleSheet.textInput} onChangeText={(explanation) => this.setState({ explanation })}></TextInput>
                    <TouchableOpacity onPress={this.handleSubmit} style={styleSheet.primaryButton}>
                        <Text style={styleSheet.buttonTextLight}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>

        )
    }
}

const mapStateToProps = ({ decks }) => {
    return { decks }
}
export default connect(mapStateToProps)(NewCard)