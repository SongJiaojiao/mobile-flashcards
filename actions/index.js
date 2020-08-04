import { getDecks, addCardToDeck, createDeck } from '../utils/api'
export const GET_DECKS = 'GET_DECKS'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'
export const ADD_DECK = 'ADD_DECK'

const getDecksData = (decks) => {
    return {
        type: GET_DECKS,
        decks
    }
}

export const handleGetDecks = () => {
    return (dispatch) => {
        getDecks()
            .then(decks => {
                dispatch(getDecksData(decks))
            }

            )

    }
}

const addCard = (deckName, card) => {
    return {
        type: ADD_CARD_TO_DECK,
        deckName,
        card
    }

}

export const handleAddCardToDeck = (deckName, card) => {
    return (dispatch) => {
        dispatch(addCard(deckName, card))
        return (
            addCardToDeck(deckName, card)
                .catch(error => console.warn('Error in adding card:', error))
        )
    }
}

const addDeck = (deck) => {
    return {
        type: ADD_DECK,
        deck
    }
}

export const handleAddDeck = (deckName) => {
    return (dispatch) => {
        return (
            createDeck(deckName)
                .then((deck) => dispatch(addDeck(deck)))
                .catch(error => console.warn('Error adding deck', error))
        )


    }
}