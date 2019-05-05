import React from 'react';

import { View, Text } from 'react-native';

import styles from './styles';

const Post = ({ data }) => (
  <View style={styles.container}>
    <View>
      <Text style={styles.title}>{data.title}</Text>
    </View>
    <View>
      <Text style={styles.autor}>{data.autor}</Text>
    </View>
    <View style={styles.lineStyle} />
    <View>
      <Text style={styles.conteudo}>{data.conteudo}</Text>
    </View>
  </View>
);

export default Post;
