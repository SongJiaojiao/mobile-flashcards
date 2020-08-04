import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import DeckItem from './DeckItem'
import NewCard from './NewDeck'
import { styleSheet, blue, white, red } from '../utils/stylesheet'
import { setStatusBarStyle } from 'expo-status-bar';
import { connect } from 'react-redux'

function DeckDetail({ route, navigation }, props) {

    const { deckName, numOfCards } = route.params
    const { decks } = props
   

    navigateToNewCard = () => {
        navigation.navigate(
            'NewCard', {
            deckName,
            numOfCards
        }
        )
    }
    navigateToQuiz =()=>{
        navigation.navigate(
            'Quiz',{
                deckName
            }
        )

    }

    return (
        <View style={styles.deckList}>
            <Text style={[styleSheet.header1, { alignSelf: 'center' }]}>{deckName}</Text>
            <Text style={[styleSheet.header2, { alignSelf: 'center' }]}>{numOfCards} cards</Text>
            <View style={{ flex:1,justifyContent: 'flex-end', marginBottom:64}}>
                <TouchableOpacity style={styleSheet.secondaryButton} onPress={this.navigateToNewCard}>
                    <Text style={styleSheet.buttonTextDark}>Add Card</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styleSheet.primaryButton} onPress={this.navigateToQuiz}>
                    <Text style={styleSheet.buttonTextLight}>Start Quiz</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styleSheet.textButton}>
                    <Text style={{
                        fontSize: 16,
                        color: red,
                        alignSelf: 'center',
                        fontWeight: '600'
                    }}>Delete Deck</Text>
                </TouchableOpacity>

            </View>

        </View>
    )

}

const mapStateToProps = ({ decks }) => {
    return { decks }
};


export default connect(mapStateToProps)(DeckDetail)



const styles = StyleSheet.create({
    deckList: {
        flex: 1,
        alignItems: 'stretch',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 48
    },


});