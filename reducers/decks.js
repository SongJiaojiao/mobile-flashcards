import { GET_DECKS, ADD_CARD_TO_DECK, ADD_DECK } from '../actions/index'

export function decks  (state = {}, action) {
    switch (action.type) {
        case GET_DECKS:
            return action.decks
        case ADD_CARD_TO_DECK:
            const { deckName, card } = action
            return {
                ...state,
                [deckName]: {
                    ...state[deckName],
                    questions: [
                        ...state[deckName].questions,
                        { question: card.question, answer: card.answer }
                    ]
                }
            }
        case ADD_DECK:
            const deckName2 = action.deck.title
            const newDeck = {
                ...state,
                [deckName2]: action.deck
            }
            return newDeck
        default:
            return state

    }

}
