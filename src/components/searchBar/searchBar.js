import { View, TextInput } from 'react-native';
import React from 'react';
import styles from './searchBar.style'

const SearchBar = (props) => {
  return (
    <View>
      <TextInput style={styles.input} placeholder='Search...' onChangeText={props.onChange}></TextInput>
    </View>
  );
};
 
export default SearchBar; 

