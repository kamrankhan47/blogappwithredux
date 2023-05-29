import {
  Alert,
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBlog, getAllBlogs } from '../store/BlogSlice';
import { AppDispatch, RootState } from '../store/Store';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

const Home = ({navigation}:any) => {
  const dispatch = useDispatch<AppDispatch>();
  const { blogs } = useSelector<RootState, any>(state => state);
  // const navigation = useNavigation();

  useEffect(() => {
    dispatch(getAllBlogs());
    console.log(blogs);
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(getAllBlogs());
    }, [])
  );

  const deletemyBlog = (item: any) => {
    dispatch(deleteBlog(item));
  };

  return (
    <View>
      <View style={{ borderWidth: 2, marginHorizontal: 10, marginTop: 10, height: 400 }}>
        <FlatList
          data={blogs.data}
          renderItem={({ item }) => {
            return (
                <TouchableOpacity onPress={()=>navigation.navigate("Details",{item:item})}>
                <View style={{ flexDirection: 'row' }}>
                  <View>
                    <Image source={{ uri: item.avatar }} style={{ width: 100, height: 100 }} />
                  </View>
                  <View>
                    <Text style={{ fontSize: 20 }}>{item.title}</Text>
                    <Text style={{ fontSize: 20 }}>{item.description}</Text>
                  </View>
                  <TouchableOpacity onPress={() => deletemyBlog(item)}>
                    <View style={{ marginLeft: 10, backgroundColor: 'purple' }}>
                      <Text style={{ fontSize: 20, color: 'white' }}>Delete</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                </TouchableOpacity>
              
            );
          }}
          contentContainerStyle={{ gap: 10 }}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
