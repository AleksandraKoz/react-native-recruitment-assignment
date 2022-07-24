import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import ColorButtons from './ColorButtons'
import ColorCounter from './ColorCounter'

const Screen2 = ({ navigation, route }) => {
  const [color, setColor] = useState('green')
  return (
    <View style={styles.screen}>
      <ColorCounter counter={route.params.counter} color={color}/>
      <Text style={styles.userText}>{route.params.userInput}</Text>
      <ScrollView style={styles.scrollView}>
        <ColorButtons
          color='red'
          setCounterColor={event => setColor(event)} />
        <ColorButtons
          color='green'
          setCounterColor={event => setColor(event)} />
        <ColorButtons
          color='blue'
          setCounterColor={event => setColor(event)} />
        <ColorButtons
          color='orange'
          setCounterColor={event => setColor(event)} />
        <ColorButtons
          color='steelblue'
          setCounterColor={event => setColor(event)} />
        <ColorButtons
          color='violet'
          setCounterColor={event => setColor(event)} />
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('Screen1')}
        style={styles.roundButton}>
        <Text style={styles.textStyle}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};
  
const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  scrollView: {
    maxHeight: 240,
    marginTop: 30, 
  },
  userText: {
    fontSize: 24,
    fontWeight: '400',
    alignSelf: 'center',
    color: 'black',
    padding: 5,
  },
  roundButton: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'green',
    marginTop: 50,
  },
  textStyle: {
    color: 'white',
    fontSize: 15,
  }
});

export default Screen2;
