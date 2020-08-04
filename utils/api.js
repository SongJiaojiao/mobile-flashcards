import AsyncStorage from '@react-native-community/async-storage'
import { data } from './data'

export const STORAGE_KEY = 'mobile-flashcards';

export const getDecks = async () => {
  // const keys = await AsyncStorage.getAllKeys();

  // await AsyncStorage.multiRemove(keys);

  try {
    
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY)

    if (jsonValue) {
      // console.log('data from async:',JSON.parse(jsonValue))
      return JSON.parse(jsonValue)

    }
    return AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))


  } catch (e) {
    alert('error occured')
  }
}


export const addCardToDeck = (deckName, card) => {

  AsyncStorage.getItem(STORAGE_KEY).then(results => {
    const data = JSON.parse(results);

    // Add card to existing deck data.
    data[deckName] = {
      ...data[deckName],
      questions: [
        ...data[deckName].questions,
        { question: card.question, answer: card.answer, explanation:card.explanation}
      ]
    };

    // Save updated deck data back to storage
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  });

  return AsyncStorage.getItem(STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    console.log(data)

    return data[deckName]
  })
};

export const createDeck = (deckName) => {
  const newDeck = {}
  newDeck[deckName] = {
    title: deckName,
    questions: []
  }
  AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(newDeck))
  return AsyncStorage.getItem(STORAGE_KEY).then(results => {
    const data = JSON.parse(results)
    return data[deckName]
  })

}