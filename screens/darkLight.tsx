import { StyleSheet, Text, View, Switch, useColorScheme } from 'react-native';
import React, { useState } from 'react';

const DarkModeLightMode = () => {
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <Switch
        value={isDarkMode}
        onValueChange={toggleDarkMode}
        trackColor={{ false: 'grey', true: 'blue' }}
        thumbColor={isDarkMode ? 'white' : 'white'}
      />
      <Text style={styles.text}>DarkModeLightMode</Text>
    </View>
  );
};

export default DarkModeLightMode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  containerDark: {
    backgroundColor: 'black',
  },
  text: {
    fontSize: 24,
    color: 'black',
  },
});
