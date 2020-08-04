import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { styleSheet, blue, gray } from '../utils/stylesheet'
import DeckList from './DeckList'
import NewDeck from './NewDeck'
import DeckItem from './DeckItem'
import DeckDetail from './DeckDetail';
import NewCard from './NewCard'
import Quiz from './Quiz'
import Score from './Score'


const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()



function Home() {
    return (
        <Tab.Navigator initialRouteName="Home"

            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = Platform.OS === 'ios' ? 'ios-home' : 'md-home';
                    }
                    else if (route.name === 'NewDeck') {
                        iconName = Platform.OS === 'ios' ? 'ios-add-circle' : 'md-add-circle';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },

            })}
            tabBarOptions={{
                activeTintColor: blue,
                inactiveTintColor: gray,
                labelStyle: {
                    fontSize: 12,
                },

                tabStyle: {
                    height: 48,
                }
            }}
        >

            <Tab.Screen name="Home"
                component={DeckList}
                options={{ tabBarLabel: 'Home', headerTitle: 'Home' }}

            />
            <Tab.Screen name="NewDeck"
                component={NewDeck}
                options={{ tabBarLabel: 'New Deck', headerTitle: 'NewDeck' }}
            />
        </Tab.Navigator>
    )
}

function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home}
                    options={(navigator) => {
                        const { index, routeNames } = navigator.route?.state || {}
                        if (!routeNames?.length) {
                            return {
                                headerTitle: 'Home'
                            }
                        }
                        return {
                            headerTitle: routeNames[index]
                        }
                    }} />
                <Stack.Screen name="DeckDetail"
                    component={DeckDetail}
                    options={({ route }) => ({ title: route.params.deckName })} />
                <Stack.Screen name="NewCard"
                    component={NewCard}
                    options={{ title: 'New Card' }} />
                <Stack.Screen name="DeckItem"
                    component={DeckItem} />
                <Stack.Screen name="Quiz"
                    component={Quiz} />
                <Stack.Screen name="Score"
                    component={Score}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Navigator
