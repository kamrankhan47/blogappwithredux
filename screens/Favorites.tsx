import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store/Store';
import { removeFavorite } from '../store/FavoritesSlice';



const Favorites = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { favorites } = useSelector((state: RootState) => state.favorites);
  const removefromFav = (item: any) => {
    dispatch(removeFavorite(item))
  }
  return (
    <View >
       <FlatList
       data={favorites}
        renderItem={({item})=>(
          <TouchableOpacity onPress={()=>removefromFav(item)}>
          <View style={{flexDirection:"row",justifyContent:"space-between",borderWidth:2}}>
            <Text>{item.title}</Text>
            <Image source={{ uri: item.avatar }} style={{ width: 100, height: 100 }} />
          </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={{gap:10}}
       />
      
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({});
