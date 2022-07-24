import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

const ColorButton = (props) => {
  return (
    <View style={[styles.colorBox, {backgroundColor: props.color}]}>
      <Text style={styles.textStyle}>{props.color}</Text>
      <TouchableOpacity style={styles.selectButton} onPress={() => props.setCounterColor(props.color)}>
        <Text style={{color: 'white', textAlign: 'center'}}>
          SELECT
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  colorBox: {
    width: 360,
    minHeight: 60,
    paddingHorizontal: 15,
    marginVertical: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    color: 'white',
    fontSize: 13,
    textTransform: 'uppercase',
  },
  selectButton: {
    width: 100,
    height: 35,
    backgroundColor: 'grey',
    justifyContent: 'center',
  },
});
  
export default ColorButton;