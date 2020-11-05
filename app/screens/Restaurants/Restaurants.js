
import React from 'react';
import {  Text, View ,StyleSheet } from 'react-native';
import {Icon} from 'react-native-elements'

export default function Restaurants() {
  return (
    <View style={styles.viewBody} >
      <Text> Restaurants</Text>
      <Icon
      reverse
      type="material-comunity"
      name="plus"
      color="#e3e3e3"
      containerStyle={styles.btnContainer}
      
      />

     
      
    </View>
  );
}


const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    backgroundColor: "#fff",
  },
  btnContainer: {
    position: "absolute",
    bottom: 10,
    right:10

  },
  
});
