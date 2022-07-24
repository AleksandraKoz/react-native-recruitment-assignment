import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import DisplayAnImage from './UserImage.js'
import Input from './Input.js'
import Counter from './Counter.js'

const Screen1 = ({ navigation }) => {
  const [counter, setCounter] = useState(0)
  const [input, setMessage] = useState('My message...')

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic">
      <View style={styles.screen}>
        <DisplayAnImage />
        <Text style={styles.name}>
          Jennie Mitchell
        </Text>
        <Counter counter={counter} setCounter={event => setCounter(event)}/>
        <Input userInput={input} setText={event => setMessage(event)} />
        <TouchableOpacity
          onPress={() => navigation.navigate('Screen2', { name: 'Jane', counter: counter, userInput: input })}
          style={styles.roundButton}>
          <Text style={styles.textStyle}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  name: {
    fontSize: 26,
    fontWeight: '400',
    alignSelf: 'center',
    color: 'black',
  },
  roundButton: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'green',
  },
  textStyle: {
    color: 'white',
    fontSize: 15,
  }
});

export default Screen1;
