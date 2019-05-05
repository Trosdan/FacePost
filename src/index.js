import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Post from './componentes/post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Nunc malesuada velit eget cursus aliquet.',
        autor: 'Henry Benjamin da Cruz',
        conteudo:
          'unc malesuada velit eget cursus aliquet. Sed at lectus ex. Morbi molestie lacinia gravida. Nullam quis lectus eget lectus iaculis vulputate id at velit. Pellentesque sit amet mauris sagittis nisl imperdiet aliquet. Donec volutpat justo in arcu efficitur, ac aliquam nisi pellentesque. Etiam vitae sem tincidunt, lobortis libero vitae, pharetra lacus.',
      },
      {
        id: 2,
        title: 'Curabitur quam lectus, fringilla nec velit ut, congue sagittis ipsum.',
        autor: 'Ian Pietro Joaquim Gonçalves',
        conteudo:
          'aCurabitur quam lectus, fringilla nec velit ut, congue sagittis ipsum. Fusce fermentum nisl risus, gravida posuere lacus iaculis at. Aenean ac purus elementum, sagittis massa molestie, dignissim augue. Donec lobortis, lectus eu tristique tempus, enim lacus euismod magna, non auctor massa felis non nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin vel dui accumsan, pellentesque neque quis, ultrices velit. Ut in egestas nisi, ut efficitur sapien. Aliquam pharetra nec metus a dictum.sd',
      },
      {
        id: 3,
        title: 'Sed sollicitudin enim eget iaculis fringilla.',
        autor: 'Caio Augusto Enrico Pires',
        conteudo:
          'Sed sollicitudin enim eget iaculis fringilla. Ut pretium, arcu bibendum dictum vehicula, ex ligula imperdiet enim, ut iaculis dui nibh imperdiet magna. Duis blandit faucibus lectus at lobortis. Aenean nec nisi ex. Aliquam accumsan blandit neque eu mattis. Mauris vitae tellus nec augue tincidunt dictum a ut lacus. Donec molestie, lacus id eleifend efficitur, velit justo aliquam leo, et placerat sem arcu ut orci. Praesent sit amet vehicula velit. Vestibulum tempor tincidunt iaculis.',
      },
    ],
  };

  componentDidMount() {}

  render() {
    const { posts } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          {posts.map(data => (
            <Post key={data.id} data={data} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff7171',
  },
});
