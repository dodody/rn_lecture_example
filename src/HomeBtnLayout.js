import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Button,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function HomeBtnLayout({ onPress }) {
  const navigation = useNavigation();
  const onHomeBtnPress = () => navigation.navigate('Home');

  return (
    <>
      <TouchableWithoutFeedback onPress={onHomeBtnPress}>
        <View style={styles.wrapper}>
          <Icon name="home" size={20} color="#fff" />
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.leftWrapper}>
          <Icon name="play-arrow" size={20} color="#fff" />
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 30,
    right: 10,
    width: 40,
    height: 40,
    backgroundColor: '#55555530',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  leftWrapper: {
    position: 'absolute',
    top: 30,
    left: 10,
    width: 40,
    height: 40,
    backgroundColor: '#55555530',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
});
