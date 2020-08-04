import 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import middleware from './middleware'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, RecyclerViewBackedScrollView } from 'react-native';
import Navigator from './components/Navigator'
import { handleGetDecks } from './actions'
import {setLocalNotification} from './utils/notification'


const store = createStore(reducer, middleware)

class App extends React.Component {


  componentDidMount() {
    setLocalNotification()

  }

  render() {

    return (
      <Provider store={store}>
        <Navigator />
      </Provider>

    )
  }
}

// function mapStateToProps(store) {

//   const deckObjectsByName = store.decksReducer;
//   const decks = [];

//   for (const deckName in deckObjectsByName) {
//     decks.push(deckObjectsById[deckName]);
//   }

//   return {
//     decks
//   };
// }

export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
