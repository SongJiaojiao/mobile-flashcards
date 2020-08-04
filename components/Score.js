import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { styleSheet, blue, white } from '../utils/stylesheet'

class Score extends React.Component {
    state = {
        score: 0,

    }

    componentDidMount() {
        const { route, navigation, decks } = this.props
        const deckName = route.params.deckName
        const questionState = route.params.questionState
        const questions = decks[deckName].questions
        const numOfQuestions = questions.length
        let sum = 0

        for (var index = 0; index < numOfQuestions; index++) {
            console.log('userAnswer', typeof questionState[index].userAnswer, 'correctAnswer', typeof questions[index].answer)
            if (questionState[index].userAnswer == questions[index].answer) {
                sum = sum + 1
                this.setState({
                    score: (sum/numOfQuestions*100).toFixed(2)            
                })
            }
        }


    }

    navigateToQuiz=()=>{
        const { route, navigation, decks } = this.props
        const deckName = route.params.deckName

        navigation.navigate(
            'Quiz', {
            deckName
        
        }
        )

    }

    navigateToDeck=()=>{
        const { route,navigation,decks} = this.props
        const deckName = route.params.deckName
        const numOfQuestions = decks[deckName].questions.length
        navigation.navigate(
            'DeckDetail', {
            deckName,
            numOfCards:numOfQuestions
           
        
        }
        )

    }


    render() {

        console.log(this.state.score)
       
        return (
            <View style={styleSheet.container}>
                <Text style={[styleSheet.header2,{alignSelf:'center',marginBottom:24}]}>Your score is:</Text>
                <Text style={[styleSheet.header1,{alignSelf:'center'}]}>{this.state.score}</Text>

                <TouchableOpacity style={[styleSheet.primaryButton]} onPress={this.navigateToQuiz} >
                    <Text style={styleSheet.buttonTextLight}>Restart Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styleSheet.primaryButton]} onPress={this.navigateToDeck} >
                    <Text style={styleSheet.buttonTextLight}>Go to Deck</Text>
                </TouchableOpacity>

                
            </View>

        )
    }
}




const mapStateToProps = ({ decks }) => {
    return { decks }
}


export default connect(mapStateToProps)(Score)