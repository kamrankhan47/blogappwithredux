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
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBlog, getAllBlogs } from '../store/BlogSlice';
import { AppDispatch, RootState } from '../store/Store';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { addFavorite } from '../store/FavoritesSlice';

const Home = ({ navigation }: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const { blogs } = useSelector<RootState, any>((state) => state);
  const [searchText, setSearchText] = useState('');
  const {FavoritesSlice} = useSelector<RootState, any>((state) => state);

  const filteredBlogs = blogs.data.filter((blog: any) =>
    blog.title.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    dispatch(getAllBlogs());
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(getAllBlogs());
    }, [])
  );

  const gotoDetail = (id: number) => {
    navigation.navigate('Details', { id: id });
  };

  const deletemyBlog = (item: any) => {
    dispatch(deleteBlog(item));
  };
  
  const addtoFav = (item: any) => {
    dispatch(addFavorite(item))
  }
  

  return (
    <View>
      <View>
        <TextInput
          placeholder="Search"
          style={{ borderWidth: 2, marginHorizontal: 20 }}
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>
      <View style={{ borderWidth: 2, marginHorizontal: 10, marginTop: 10, height: 400 }}>
        <FlatList
          data={filteredBlogs}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => gotoDetail(item.id)}>
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
                  <TouchableOpacity onPress={()=>addtoFav(item)}>
                    <View style={{ marginLeft: 10, backgroundColor: 'purple' }}>
                      <Text style={{ fontSize: 20, color: 'white' }}>addtoFav</Text>
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
