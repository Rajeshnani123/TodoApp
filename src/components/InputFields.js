import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {ScreenSize} from '../../assests/ScreenSize';

export const InputFields = ({text}) => {
  return (
    <View>
      <Text style={styles.textStyle}>{text}</Text>
      <TextInput style={styles.inputStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    paddingTop: 20,
  },
  inputStyle: {
    alignItems: 'center',
    backgroundColor: '#F1F4FA',
    borderRadius: 10,
    flexDirection: 'row',
    width: ScreenSize.width41p6,
  },
});
