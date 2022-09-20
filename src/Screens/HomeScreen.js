import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {ScreenSize} from '../../assests/ScreenSize';
import {HeaderComponent} from '../components/headerComponent';
import {InputFields} from '../components/InputFields';

export const HomeScreen = () => {
  return (
    <View>
      <HeaderComponent />
      <View style={styles.mainPage}>
        <Text>What your schedule Today</Text>
        <InputFields text={'Add Your Task:'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainPage: {
    alignItems: 'center',
    paddingTop: ScreenSize.height10,
  },
});
