import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function FullPlayController() {
  const [play, setPlay] = useState(true);
  const onPlayPress = () => {
    setPlay(val => !val);
  };
  const onPress = () => {};

  return (
    <View>
      <PlayBar />
      <View
        style={{
          margin: 30,
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TouchableHighlight onPress={onPress}>
          <Icon name="playlist-add" size={30} color="#fff" />
        </TouchableHighlight>
        <TouchableHighlight onPress={onPress}>
          <Icon name="skip-previous" size={30} color="#fff" />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={onPlayPress}
          style={{
            backgroundColor: '#ffffff80',
            borderRadius: 100,
            padding: 10,
          }}
        >
          <Icon name={play ? 'pause' : 'play-arrow'} size={60} color="#fff" />
        </TouchableHighlight>
        <TouchableHighlight onPress={onPress}>
          <Icon name="skip-next" size={30} color="#fff" />
        </TouchableHighlight>
        <TouchableHighlight onPress={onPress}>
          <Icon name="loop" size={30} color="#fff" />
        </TouchableHighlight>
      </View>
    </View>
  );
}

function PlayBar() {
  return (
    <>
      <View style={{ position: 'relative' }}>
        {/* 진행도에 따라 동그라미가 이동을 해야한다. */}
        <View
          style={{
            ...styles.circle,
            position: 'absolute',
            bottom: -4,
            left: 75,
          }}
        />
        <View style={styles.bar} />
        <View style={styles.emptyBar} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 30,
          marginTop: 10,
        }}
      >
        <Text style={{ color: 'white', fontSize: 12 }}>0:52</Text>
        <Text style={{ color: 'white', fontSize: 12 }}>4:14</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bar: {
    position: 'absolute',
    bottom: -2,
    left: 30,
    height: 4,
    width: 50,
    borderColor: '#ffffff',
    borderBottomWidth: 5,
    borderRadius: 100,
  },
  emptyBar: {
    height: 2,
    borderColor: '#ffffff90',
    borderBottomWidth: 2,
    borderRadius: 100,
    marginHorizontal: 30,
    marginTop: 20,
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 50,
    backgroundColor: 'white',
  },
});
