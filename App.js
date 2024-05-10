import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import Product from './components/Product';
import Search from './components/Search';
import patiStore from './patistore.json';

function App() {
  const renderFun = ({item}) => <Product product={item} />;

  return (
    <SafeAreaView style={styles.body}>
      <Search />
      <FlatList data={patiStore} renderItem={renderFun} numColumns={2} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({body: {flex: 1, backgroundColor: 'black'}});

export default App;
