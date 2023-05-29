import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/Store';
import { addBlog } from '../store/BlogSlice';

const Add = () => {
    let dispatch = useDispatch<AppDispatch>();
    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")

    const addNewBlog = ()=>{
        const newBlog = {
            title:title,
            description:description
        }
        dispatch(addBlog(newBlog));
        settitle("")
        setdescription("")
    }
  return (
    <View style={{flex: 1,justifyContent:"center"}}>
      <View style={{alignItems:"center",}}>
        <View style={{marginTop:20}}>
        <TextInput style={{borderWidth:2,borderRadius:10,marginHorizontal:10,width:300,height:100}} value={title} onChangeText={settitle} placeholder='enter title'/>
        </View>
        <View style={{marginTop:20}}>
        <TextInput style={{borderWidth:2,borderRadius:10,marginHorizontal:10,width:300,height:100}} value={description} onChangeText={setdescription} placeholder='enter desciption'/>
        </View>

        <TouchableOpacity style={{backgroundColor:"purple",height:40,width:70,alignItems:"center",justifyContent:'center',marginTop:20,}} onPress={()=>addNewBlog()}>
            <Text>
                Add
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({});
