import messaging from '@react-native-firebase/messaging'
import {Platform} from 'react-native';
import PushNotification from "react-native-push-notification";

class FCMService {
    messageListener:any ;
    register = (onRegister:any, onNotification:any, onOpenNotification:any) => {
        this.checkPermission(onRegister)
        this.createNotificationListeners(onRegister, onNotification, onOpenNotification)
    }

    registerAppWithFCM = async() => {
        if (Platform.OS === 'ios') {
            await messaging().registerDeviceForRemoteMessages();
            await messaging().setAutoInitEnabled(true)
        } 
    }

    checkPermission = (onRegister:any) => {
        messaging().hasPermission()
        .then(enabled => {
            if (enabled) { 
                // User has permissions
                this.getToken(onRegister)
            } else {
                // User doesn't have permission
                this.requestPermission(onRegister)
            }
        }).catch(error => {
            console.log("[FCMService] Permission rejected ", error)
        })
    }

    getToken = (onRegister:any) => {
        messaging().getToken()
        .then(fcmToken => {
            if (fcmToken) {
                onRegister(fcmToken)
            }else {
                console.log("[FCMService] User does not have a device token")
            }
        }).catch(error => {
            console.log("[FCMService] getToken rejected ", error)
        })
    }
    getTokenService=()=>{
        return new Promise((resolve,reject)=>{
            messaging().getToken().then((fcmToken)=>{
                resolve(fcmToken);
            }).catch(error=>{
                reject(error)
            })
        })
    }
    requestPermission = (onRegister:any) => {
         messaging().requestPermission()
        .then(() => {
            this.getToken(onRegister)
        }).catch(error => {
            console.log("[FCMService] Request Permission rejected ", error)
        })
    }

    deleteToken = () => {
        console.log("[FCMService] deleteToken ")
        messaging().deleteToken()
        .catch(error => {
            console.log("[FCMService] Delete token error ", error)
        })
    }
    createNotificationListeners = (onRegister:any, onNotification:any, onOpenNotification:any) => {
  
        // When the application is running, but in the background
        messaging()
        .onNotificationOpenedApp(remoteMessage => {
            console.log('[FCMService] onNotificationOpenedApp Notification caused app to open from background state:',remoteMessage)
            if (remoteMessage) {
                //const notification = remoteMessage.notification
                onOpenNotification(remoteMessage)
                // this.removeDeliveredNotification(notification.notificationId)
            }
        });

         // When the application is opened from a quit state.
        messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            console.log('[FCMService] getInitialNotification Notification caused app to open from quit state:',remoteMessage)

            if (remoteMessage) {
                const notification = remoteMessage
                onOpenNotification(remoteMessage)
                //  this.removeDeliveredNotification(notification.notificationId)
            }
        });

        // Foreground state messages
        this.messageListener = messaging().onMessage(async (remoteMessage:any) => {
            console.log('[FCMService] A new FCM message arrived!', remoteMessage);
            if (remoteMessage) {
                let notification:any = null
                if (Platform.OS === 'ios') {
                    notification = remoteMessage.data.notification
                } else {
                    notification = remoteMessage
                }
                onNotification(notification)
            }
        });

        // Triggered when have new token
        messaging().onTokenRefresh(fcmToken => {
            console.log("[FCMService] New token refresh: ", fcmToken)
            onRegister(fcmToken)
        })

    }

    unRegister = () => {
        this.messageListener()
    }
    subscribeToTopic=(topic:string)=>{
        messaging().subscribeToTopic(topic)
    }
    unSubscribeToTopic=(topic:string)=>{
        messaging().unsubscribeFromTopic(topic)
    }
}

export const fcmService = new FCMService();