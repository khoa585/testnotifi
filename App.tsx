// import React from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';
// import { OnRegisterNotification, onNotification, onOpenNotification } from './src/notification/NotificationService';
// import { localNotificationService } from './src/firebase/LocalNotificationService';
// import { fcmService } from './src/firebase/FCMService';
// const App = () => {
//   React.useEffect(() => {

//     fcmService.registerAppWithFCM();
//     fcmService.register(OnRegisterNotification, onNotification, onOpenNotification);

//     localNotificationService.configure(onOpenNotification);

//     return () => {
//       console.log("[App] unRegister")
//       fcmService.unRegister()
//       localNotificationService.unregister()
//     }
//   }, []);
//   const backgroundStyle = {
//     backgroundColor: 'while'
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>

//     </SafeAreaView>
//   );
// };


// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
// import React, { Component } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import {
//   IronSource,
//   IronSourceSegment,
//   IronSourceRewardedVideo,
//   IronSourceInterstitials,
//   IronSourceOfferwall,
//   IronSourceBanner,
// } from '@wowmaking/react-native-iron-source';
// import A from './A';

// const segment = new IronSourceSegment();

// const App = () => {

//   let [count, setcount] = React.useState(0)


//   React.useEffect(() => {
//     IronSource.initializeIronSource('8a19a09d', 'demoapp', {
//       validateIntegration: false,
//     })
//   })



//   return (
//     <View style={styles.container}>
//       <A></A>
//     </View>
//   );
// }
// export default App
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   button: {
//     alignSelf: 'center',
//     fontSize: 21,
//     backgroundColor: '#face8d',
//     margin: 7,
//   },
//   bannerContainer: {
//     borderColor: 'red',
//     borderWidth: 1,
//     width: '90%',
//   },
//   banner: {
//     borderWidth: 1,
//     height: 150,
//   },
// });

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Platform,
} from 'react-native';
import PushNotification from "react-native-push-notification";
import messaging from '@react-native-firebase/messaging'
import SetupNotification from './src/notifi/SetupNotification';
import PushController from './src/notifi/PushController';
const App = () => {

  return (
    <SafeAreaView>
      <SetupNotification/>
      <Text>sss</Text>
      <PushController/>
    </SafeAreaView>
  );
};

export default App
