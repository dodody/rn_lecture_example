import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles'

export default function Header(props) {
  return (
    <View style={styles.wrapper}>
      <SafeAreaView>
      <Image style={styles.img} source={require('../../img/logo.png')}/>
      <Icon name="cast" size={30} color="#fff" />
      <Icon name="search" size={30} color="#fff" />
      </SafeAreaView>
      <View style={styles.person}>
        <Icon name="person" size={30} color="#fff" />
      </View>
    </View>
  );
}
