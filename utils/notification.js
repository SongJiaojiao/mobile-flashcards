import AsyncStorage from '@react-native-community/async-storage'
import { Notifications} from 'expo'
import * as Permissions from "expo-permissions"
// import * as Permissions from "expo-permissions"

const NOTIFICATION_KEY = 'mobile-flashcards:notifications'

export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync())

}

function createNotification() {
    return {
        title: `Take a quiz!`,
        body: 'It is time to take a quiz!',
        ios: {
            sound: true
        },
        andorid: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,

        }
    }
}

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data == null) {
                Permissions.askAsync(Permissions.NOFICATIONS)
                    .then(({ status }) => {
                        if (status == 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync()

                            let tomorrow = new Date()
                            tomorrow.setDate(tomorrow.getDate() + 1)
                            tomorrow.setHours(20)
                            tomorrow.setMinutes(0)

                            Notifications.scheduleLocalNotificationsAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day',
                                }
                            )
                            AsyncsStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))

                        }
                    })
            }
        })
}