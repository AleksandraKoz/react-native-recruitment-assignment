import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const ColorCounter = (props) => {
  return (
    <View style={[styles.screen, {backgroundColor: props.color}]}>
      <Text style={styles.textStyle}>
        {props.counter}
      </Text>
    </View>
  );
};
  
const styles = StyleSheet.create({
  screen: {
    width:125,
    height: 125,
    borderRadius: 75,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  textStyle: {
    padding: 20,
    fontSize: 36,
    fontWeight: '700',
    color: 'white',
  }
});
  
export default ColorCounter;
