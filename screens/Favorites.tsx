import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/Store';

const Favorites = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {FavoritesSlice,favorites} = useSelector<RootState, any>((state) => state);
  return (
    <View>
      <Text>{favorites.favorites}</Text>
    </View>
  )
}

export default Favorites

const styles = StyleSheet.create({})