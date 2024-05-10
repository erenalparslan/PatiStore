import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './Product.style';

export default class Product extends Component {
  render() {
    return (
      <TouchableOpacity>
        <View style={styles.container}>
          <Image
            style={styles.image_styles} // Genişlik ve yükseklik değerlerini ayarlayın
            source={{
              uri: this.props.product.imgURL,
            }}
          />
          <Text style={styles.text_styles}>{this.props.product.title}</Text>
          <Text style={styles.text_styles}>{this.props.product.price}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
