import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 5,
    marginTop: 20,
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: '#fff',
    elevation: 3,
  },
  title: {
    fontWeight: 'bold',
    color: '#000',
  },
  autor: { paddingBottom: 3, fontStyle: 'italic', color: '#858585' },
  conteudo: { paddingVertical: 5 },
  lineStyle: {
    borderBottomColor: '#858585',
    borderBottomWidth: 1,
    paddingVertical: 3,
  },
});

export default styles;
