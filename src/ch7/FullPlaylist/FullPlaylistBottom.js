import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';

export default function FullPlaylistBottom({}) {
  const onTabPress = () => {};

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.swipeBtn} />
      <View style={{ flexDirection: 'row' }}>
        <MenuItem name="다음 트랙" onTabPress={onTabPress} />
        <MenuItem name="가사" onTabPress={onTabPress} />
        <MenuItem name="관련항목" onTabPress={onTabPress} />
      </View>
    </SafeAreaView>
  );
}

function MenuItem({ name, onTabPress }) {
  return (
    <TouchableWithoutFeedback onPress={onTabPress}>
      <View style={styles.menuItemWrapper}>
        <Text style={styles.menuItemText}>{name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#33333390',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullWrapper: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#333333',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  swipeBtn: {
    backgroundColor: '#777777',
    height: 6,
    width: 40,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  menuItemWrapper: {
    flex: 1,
    padding: 20,
  },
  menuItemText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#aaa',
    marginTop: 8,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
});
