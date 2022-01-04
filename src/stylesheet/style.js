import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  centerAligned: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
});
