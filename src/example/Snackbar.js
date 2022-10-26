import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';
import HomeBtnLayout from '../HomeBtnLayout';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Snackbar() {
  const onBtnPress = () => {
    console.log('스낵바 띄윅');
  };

  return (
    <SafeAreaView style={{ flex: 1, borderWidth: 10 }}>
      <HomeBtnLayout />
      <Text style={{ padding: 30, paddingBottom: 10, fontSize: 20 }}>
        Snackbar
      </Text>
      <View style={{ flex: 1, width: '100%', alignContent: 'stretch' }}>
        <TouchableHighlight
          onPress={onBtnPress}
          style={{
            margin: 10,
            padding: 10,
            marginHorizontal: 30,
            borderRadius: 100,
            borderColor: '#ffa100',
            borderWidth: 2,
            justifyContent: 'center',
          }}
        >
          <Text style={{ textAlign: 'center', color: '#ffa100', fontSize: 14 }}>
            하단에 스낵바 띄우기
          </Text>
        </TouchableHighlight>

        <View
          style={{
            borderWidth: 1,
            position: 'absolute',
            bottom: 0,
            width: '100%',
          }}
        >
          <SnackbarItem />
          <SnackbarItem />
          <SnackbarItem />
          <SnackbarItem />
          <SnackbarItem />
        </View>
      </View>
    </SafeAreaView>
  );
}

function SnackbarItem() {
  return (
    <View style={{ justifyContent: 'flex-end' }}>
      <View style={styles.snackbarWrapper}>
        <Icon name={'offline-pin'} size={26} color="#fff" />
        <Text style={styles.snackbarText}>ㄴㅇㅇㄹㄴㅇㄹㄴㅇㄴ</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  snackbarWrapper: {
    alignItems: 'center',
    flex: 1,
    alignContent: 'stretch',
    backgroundColor: '#222222',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    marginBottom: 10,
  },
  snackbarText: {
    marginLeft: 10,
    color: 'white',
  },
});
