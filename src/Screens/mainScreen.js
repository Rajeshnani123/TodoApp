import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {InputFields} from '../components/InputFields';

export const MainScreen = () => {
  return (
    <View style={styles.mainPage}>
      <Text>What your schedule Today</Text>
      <InputFields text={'Add Your Tasks:'} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainPage: {
    alignItems: 'center',
    paddingTop: ScreenSize.height10,
  },
});
