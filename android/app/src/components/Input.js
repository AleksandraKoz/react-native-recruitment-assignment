import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const Input = (props) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={(value) => props.setText(value)}
        placeholder="Enter text here..."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 70,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 15,
    padding: 10,
  },
});

export default Input;
