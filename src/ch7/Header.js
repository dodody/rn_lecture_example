import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconButton from './IconButton';

// ! 값은 랜덤하게 했다. 정확하지 않게 내 눈에 이쁘게, 하지만 최대한 비슷하게!
// ! 이것이 클론 코딩의 재미가 아닐까 싶네요
export default function Header({opacityAnim}) {
  const onProfilePress = () => {};
  const onCastBtnPress = () => {};
  const onSearchBtnPress = () => { };
  
  console.log(1, opacityAnim)

  {/* // ! SafeAreaView는 스타일링이 가능한 컴포넌트 입니다 */}
  return (
    <View style={styles.wrapper}>
      <SafeAreaView style={styles.header}>
        {/* 로고 */}
        <Image style={styles.logo} source={require('../img/logo.png')} />
        {/* 우측로고 */}
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <IconButton name={'cast'} onBtnPress={onCastBtnPress} />
          <IconButton name={'search'} onBtnPress={onSearchBtnPress} />
          <ProfileButton onProfilePress={onProfilePress} />
        </View>
      </SafeAreaView>
    </View>
  );
}

function ProfileButton({ onProfilePress }) {
  return (
    <TouchableHighlight onPress={onProfilePress}>
      <View style={styles.person}>
        <Icon name={'person'} size={20} color="#daf1f5" />
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  // ! 왠만한 컴포넌트의 겉 스타일은 wrapper 이름을 이용할 예정입니다.
  // ! 이런 자기만의 룰은 코딩 시간을 줄여주기도 하는거같아요 ㅎㅎ
  wrapper: {
    backgroundColor: '#222',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 4,
  },
  logo: {
    width: 80,
    height: 50,
  },
  person: {
    borderRadius: 100,
    backgroundColor: '#266ced',
    height: 26,
    width: 26,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
});
