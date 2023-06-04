import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { deleteBlog, getAllBlogs } from '../store/BlogSlice';
import { addFavorite } from '../store/FavoritesSlice';
import { AppDispatch, RootState } from '../store/Store';

const Home = ({ navigation }: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const { blogs } = useSelector<RootState, any>((state) => state);
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(blogs.data);

  useEffect(() => {
    dispatch(getAllBlogs());
  }, []);

  useEffect(() => {
    setFilteredData(blogs.data);
  }, [blogs.data]);

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
    dispatch(addFavorite(item));
  };

  const searchFilter = (text: string) => {
    const newData = blogs.data.filter((item: any) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(newData);
    setSearchText(text);
  };

  return (
    <View>
      <View>
        <TextInput
          placeholder="Search"
          style={{ borderWidth: 2, marginHorizontal: 20 }}
          value={searchText}
          onChangeText={searchFilter}
        />
      </View>
      <View style={{ borderWidth: 2, marginHorizontal: 10, marginTop: 10, height: 400 }}>
        <FlatList
          data={filteredData}
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
                      <Text style={{ fontSize: 20, color: 'white' }}>Add to Fav</Text>
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
