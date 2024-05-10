import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import styles from './Product.style';

const Search = () => {
  const [text, onChangeText] = useState('');

  return (
    <View>
      <TextInput
        style={styles.search}
        onChangeText={onChangeText}
        value={text}
        placeholder='Search for products'
      />
    </View>
  );
};

export default Search;
