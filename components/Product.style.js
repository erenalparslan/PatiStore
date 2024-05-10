import {Dimensions, StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    borderRadius: 10,
    width: Dimensions.get('window').width / 2 - 20,
    height: Dimensions.get('window').width / 2 - 10,
  },
  text_styles: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  image_styles: {
    flex: 1,
    height: 100,
    borderRadius: 10,
    resizeMode: 'stretch',
  },
  search: {
    backgroundColor: 'white',
    height: 40,
    borderWidth: 1,
    margin: 20,
    borderColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  input: {
    flex: 1,
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    height: 500,
    placeholder: 'Search'
  },
});
