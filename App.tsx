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
