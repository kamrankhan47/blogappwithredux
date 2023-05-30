import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../store/Store';
import { updateBlog } from '../store/BlogSlice';

const EditScreen = () => {
    // const {item} = route.params;
    const blog=useSelector((state:any)=>state.blogs.blog)

    let dispatch = useDispatch<AppDispatch>();
    const [editedtitle, seteditedtitle] = useState(blog.title)
    const [editeddescription, setediteddescription] = useState(blog.description)

    const editBlog = ()=>{
        const editedblog = {
            title:editedtitle,
            description:editeddescription,
            id:blog.id
        }
        dispatch(updateBlog(editedblog))
        console.log(editedblog);
        
    }
  return (
    <View style={{flex: 1}}>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <View style={{flexDirection: 'column', gap: 10}}>
          <TextInput
            value={editedtitle}
            onChangeText={seteditedtitle}
            style={{borderWidth: 2, width: 300}}
          />
          <TextInput
            value={editeddescription}
            onChangeText={setediteddescription}
            style={{borderWidth: 2, width: 300}}
          />
        </View>
        <TouchableOpacity onPress={editBlog}>
          <View style={{backgroundColor:"purple",width:50,height:20,alignItems:"center"}}>
            <Text>Edit</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditScreen;

const styles = StyleSheet.create({});
