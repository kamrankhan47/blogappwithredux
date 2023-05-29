import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const Details = ({route}: any) => {
  const {item} = route.params;
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View style={{alignItems: 'center'}}>
        <Image source={{uri: item.avatar}} style={{width: 100, height: 100}} />
        <Text>{item.description}</Text>
        <Text>{item.title}</Text>
      </View>

      <TouchableOpacity style={{alignItems:"center"}}>
        <View style={{height:30,width:80,backgroundColor:"purple",alignItems:"center",justifyContent:"center"}}> 
          <Text>Edit</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
