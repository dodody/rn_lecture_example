import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';
import HomeBtnLayout from './HomeBtnLayout';
import Icon from 'react-native-vector-icons/MaterialIcons';

// ! 나둥에 유저 행동을
export default function DrawerMenu() {
  const [open, setOpen] = useState(false);
  const onDrawerPress = () => {
    console.log(123);
    // 애니메이션 시작
  };

  return (
    <SafeAreaView>
      <HomeBtnLayout />
      <Text style={{ padding: 30, paddingBottom: 10, fontSize: 20 }}>
        DrawerMenu
      </Text>
      {/*  */}
      {/* 선택 영역  */}
      <TouchableHighlight onPress={onDrawerPress}>
        <View>
          <View style={styles.buttonArea}>
            {/* // ! 싱텡[ 띠리 엔;ㅁ[ㅇ;샨더 비끄;게 */}
            <Icon name={'offline-pin'} size={26} color="#fff" />
          </View>
          <View style={styles.buttonSpace} />
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonArea: {
    backgroundColor: '#ffa100',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
  },
  // buttonSpace: {
  //   position: 'absolute',
  //   width: 10,
  //   backgroundColor: 'red',
  //   height: '100%',
  // },
});
