import React from "react";
import { SafeAreaView, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import Product from "./components/product/product";
import SearchBar from "./components/searchBar/searchBar";

import product_data from './products_data.json';

function App() {
  const Renderproduct = ({ item }) => <Product product={item} />
  return (
    <SafeAreaView style={styles.container}>
      
      <Text style={styles.text}>PATIKA STORE</Text>
      <SearchBar />
      <FlatList
      keyExtractor={item => item.id.toString()}
      data={product_data} 
      renderItem={Renderproduct}
      horizontal={false}
      numColumns={2}
      />
        
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    
  },
  text: {
    fontSize: 30,
    color: "#7C33C2",
    fontWeight: "bold",
    paddingLeft: 13
  }
});
export default App;