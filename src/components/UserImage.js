import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.photo}
        source={{uri: 'https://randomuser.me/api/portraits/women/76.jpg'}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 5,
  },
  photo: {
    width:125,
    height: 125,
    borderRadius: 75,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'blue',
  },
});

export default DisplayAnImage;