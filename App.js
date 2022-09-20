/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {InputFields} from './src/components/InputFields';
import {HomeScreen} from './src/Screens/HomeScreen';

const App = () => {
  return <HomeScreen />;
};

export default App;
