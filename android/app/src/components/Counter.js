import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Counter = (props) => {
  return (
      <View style={styles.container}>
        <TouchableOpacity
            onPress={() => props.setCounter(props.counter - 1)}
            style={styles.roundButton}>
            <Text style={styles.buttonTextStyle}>
            -</Text>
        </TouchableOpacity>

        <Text style={styles.textStyle}>{props.counter}</Text>

        <TouchableOpacity
            onPress={() => props.setCounter(props.counter + 1)}
            style={styles.roundButton}>
            <Text style={styles.buttonTextStyle}>
            +</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  roundButton: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'green',
  },
  buttonTextStyle: {
    color: 'white',
    fontSize: 20,
  },
  textStyle: {
    padding: 20,
    fontSize: 36,
    fontWeight: '700',
    color: 'black',
  }
});

export default Counter;
