import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useEffect } from 'react';
import {useRoute} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/Store';
import { getBlogById } from '../store/BlogSlice';

const Details = ({route,navigation}: any) => {
  const {id} = route.params;
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getBlogById(id));
  }, [])
  const { blog } = useSelector<RootState, any>((state) => state.blogs);

  
  
  
  
  


  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View style={{alignItems: 'center'}}>
        <Image source={{uri: blog.avatar}} style={{width: 100, height: 100}} />
        <Text>{blog.description}</Text>
        <Text>{blog.title}</Text>
      </View>

      <TouchableOpacity style={{alignItems:"center"}} onPress={()=>navigation.navigate("EditScreen")}>
        <View style={{height:30,width:80,backgroundColor:"purple",alignItems:"center",justifyContent:"center"}}> 
          <Text>Edit</Text>
        </View>
      </TouchableOpacity>
    </View>
    
   
  );
};

export default Details;

const styles = StyleSheet.create({});
