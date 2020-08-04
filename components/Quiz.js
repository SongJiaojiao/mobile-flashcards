import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { styleSheet, blue, white } from '../utils/stylesheet'
import { ButtonGroup } from 'react-native-elements'
import { clearLocalNotification, setLocalNotification } from '../utils/notification'


class Quiz extends React.Component {

    initQuestionState = () => {
        const { route, decks } = this.props
        const deckName = route.params.deckName
        const numOfQuestions = decks[deckName].questions.length
        const questionState = {}

        for (var index = 0; index < numOfQuestions; index++) {
            questionState[index] = {
                visited: false,
                userAnswer: 'unanswered'
            }
        }
        return questionState
    }

    state = {
        currentIndex: 0,//decides which question to show. can be controlled by (1)user click true/false (2)next/previous button
        answer: '',//collect current user input: true/false
        showAnswer: false,//if true
        questionState: this.initQuestionState(),
        selectedIndex: ''
    }


    showAnswer = () => {
        const { currentIndex, questionState } = this.state
        questionState[currentIndex].userAnswer = 'answerChecked'

        this.setState({
            questionState: questionState,
            showAnswer: true
        })
    }

    nextQuestion = () => {
        const { currentIndex, questionState } = this.state
        questionState[currentIndex].visited = 'True'

        this.setState({
            currentIndex: this.state.currentIndex + 1,
            questionState: questionState,
            showAnswer: questionState[currentIndex + 1].userAnswer === 'answerChecked'
                ? true
                : false,
            selectedIndex: questionState[currentIndex + 1].userAnswer === 'unanswered'

                ? ''
                : (questionState[currentIndex + 1].userAnswer === 'True' ? 0 : 1)

        })
    }
    previousQuestion = () => {
        const { currentIndex, questionState } = this.state
        questionState[currentIndex].visited = 'True'

        this.setState({
            currentIndex: this.state.currentIndex - 1,
            showAnswer: questionState[currentIndex - 1].userAnswer === 'answerChecked'
                ? true
                : false,
            selectedIndex: questionState[currentIndex - 1].userAnswer === 'unanswered'
                ? ''
                : (questionState[currentIndex - 1].userAnswer === 'True' ? 0 : 1)
        })
    }


    updateButtonGroupIndex = (selectedIndex) => {
        const { currentIndex, questionState } = this.state
        questionState[currentIndex].userAnswer = selectedIndex === 0 ? 'True' : 'False'
        this.setState({
            questionState: questionState,
            selectedIndex: selectedIndex
        })

    }

    handleSubmit = () => {
        const { route, navigation, dispatch, decks } = this.props
        const { questionState } = this.state
        const deckName = route.params.deckName


        this.setState({
            currentIndex: 0,//decides which question to show. can be controlled by (1)user click true/false (2)next/previous button
            answer: '',//collect current user input: true/false
            showAnswer: false,//if true
            questionState: this.initQuestionState(),
            selectedIndex: ''

        })

        navigation.navigate(
            'Score', {
            deckName,
            questionState
        }
        )

        clearLocalNotification().
            then(setLocalNotification())


    }

    render() {
        // console.log('questionState', this.state.questionState)
        const { currentIndex, showAnswer } = this.state
        const buttons = ['True', 'False']
        const { route, decks } = this.props
        const deckName = route.params.deckName
        const questions = decks[deckName].questions //get question array
        const numOfQuestions = questions.length
        const correctAnswer = questions[currentIndex].answer
        const explanation = questions[currentIndex].explanation


        return (
            <View style={[styleSheet.container, { justifyContent: "stretch" }]}>
                <Text style={[styleSheet.bodyRegular, { alignSelf: 'center' }]}>
                    Question {this.state.currentIndex + 1}/{numOfQuestions}
                </Text>

                <View style={styles.card}>
                    <Text style={[styleSheet.header1, { color: white, marginBottom: 0 }]}>
                        {questions[currentIndex].question}?
                    </Text>
                </View>


                {
                    showAnswer === true
                        ? <View style={{ marginBottom: 48 }}>
                            <Text style={styleSheet.bodyRegular}>Answer is: </Text>
                            <Text style={styleSheet.header1}>{correctAnswer}</Text>
                            <Text style={styleSheet.bodyRegular}>{explanation}</Text>
                        </View>


                        : <View>
                            <ButtonGroup style={styleSheet.bodyRegular}
                                onPress={this.updateButtonGroupIndex}
                                buttons={buttons}
                                selectedIndex={this.state.selectedIndex}
                            >
                            </ButtonGroup>
                            <TouchableOpacity style={styleSheet.textButton} onPress={this.showAnswer}>
                                <Text style={styleSheet.buttonTextDark}>Show Answer</Text>
                            </TouchableOpacity>
                        </View>
                }

                <View style={{ flexDirection: 'row', height: 72, alignItems: 'flex-end' }}>

                    {currentIndex > 0
                        ?
                        <TouchableOpacity style={[styleSheet.secondaryButton, { flex: 1 }]} onPress={this.previousQuestion}>
                            <Text style={styleSheet.buttonTextDark}>Previous</Text>
                        </TouchableOpacity>
                        :
                        null}

                    {currentIndex === numOfQuestions - 1
                        ?
                        <TouchableOpacity style={[styleSheet.primaryButton, { flex: 1 }]} onPress={this.handleSubmit} >
                            <Text style={styleSheet.buttonTextLight}>Submit</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={[styleSheet.secondaryButton, { flex: 1 }]} onPress={this.nextQuestion} >
                            <Text style={styleSheet.buttonTextDark}>Next</Text>
                        </TouchableOpacity>
                    }

                </View>

            </View>
        )
    }
}

const mapStateToProps = ({ decks }) => {
    return { decks }
}


export default connect(mapStateToProps)(Quiz)


const styles = StyleSheet.create({
    card: {
        marginVertical: 48,
        paddingLeft: 16,
        paddingRight: 16,
        paddingVertical: 24,
        backgroundColor: blue,
        borderRadius: 8,


    },

});