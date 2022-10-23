import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SmallPlaylist from './SmallPlaylist';
import FullPlaylist from './FullPlaylist/FullPlaylist';

export default function Playlist({ size, setSize }) {
  return {
    small: <SmallPlaylist setSize={setSize} />,
    full: <FullPlaylist setSize={setSize} />,
  }[size];
}

const styles = StyleSheet.create({
  wrapper: {
    height: 70,
    backgroundColor: '#333',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1, // ! 음성이 진행됨에 따라, 어찌저찌된다.
  },
});
