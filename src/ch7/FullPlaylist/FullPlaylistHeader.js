import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import IconButton from '../IconButton';

export default function FullPlaylistHeader({ setSize }) {
  const [musicToggle, setMusicToggle] = useState(true);
  const onBtnPress = () => {};
  const onTogglePress = () => {
    setMusicToggle(val => !val);
  };
  const onHidePress = () => {
    setSize('small');
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <IconButton
        name="keyboard-arrow-down"
        size={26}
        onBtnPress={onHidePress}
      />

      <View style={styles.toggleWrapper}>
        <View style={styles.toggle}>
          <TouchableWithoutFeedback onPress={onTogglePress}>
            <View style={musicToggle ? styles.toggleOn : styles.toggleOff}>
              <Text style={styles.toggleText}>노래</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={onTogglePress}>
            <View style={musicToggle ? styles.toggleOff : styles.toggleOn}>
              <Text style={styles.toggleText}>동영상</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <IconButton name="cast" size={26} onBtnPress={onBtnPress} />
        <IconButton name="more-vert" size={26} onBtnPress={onBtnPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  toggleWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    width: '100%',
    zIndex: -1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggle: {
    flexDirection: 'row',
    borderRadius: 100,
    backgroundColor: '#333',
  },
  toggleOn: {
    backgroundColor: '#444',
    borderRadius: 100,
  },
  toggleOff: {},
  toggleText: { color: 'white', paddingVertical: 8, paddingHorizontal: 14 },
});
