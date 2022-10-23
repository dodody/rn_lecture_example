import React from 'react';
import { View, SafeAreaView } from 'react-native';
import FullPlaylistBottom from './FullPlaylistBottom';
import FullPlaylistHeader from './FullPlaylistHeader';
import FullPlayController from './FullPlayController';
import FullPlaylistAlbum from './FullPlaylistAlbum';

export default function FullPlaylist({ setSize }) {
  return (
    <>
      <View
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          backgroundColor: '#222',
        }}
      >
        <SafeAreaView>
          <FullPlaylistHeader setSize={setSize} />
          <FullPlaylistAlbum />
          <FullPlayController />
        </SafeAreaView>
      </View>
      <FullPlaylistBottom />
    </>
  );
}
