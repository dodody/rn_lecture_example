import React, { useState, useRef } from 'react';
import { View, StatusBar, Animated } from 'react-native';
import Header from './Header';
import HeaderCategory from './HeaderCategory';
import BottomTab from './BottomTab';
import Playlist from './Playlist';
import YoutubeHome from './YoutubeHome';
import HomeBtnLayout from '../HomeBtnLayout';

// done: npm i react-native-vector-icons
// todo: 배경화면 색이 계속 바뀜
// ! 페이지로 보지 않고, 플레이리스트 모달, 안의 모달 두개의 모달이 겹쳐져있는걸로 할게요.
// ! 여러 status가 여기서 관리될 것이다.
// ! 상태에 따라 small, full => 액션이 발생하면 full이 되게 합니다.
function YoutubeMusic(props) {
  const translateAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;
  const [size, setSize] = useState('small'); // ! 무슨 사이즈인지 명확히 알려줘야 함

  const onHomeScroll = e => {
    const yOffSet = e.nativeEvent.contentOffset.y;
    
    if (yOffSet > 20) {
      Animated.spring(translateAnim, {
        toValue: -70,
        friction: 1000,
        tension: 2,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(translateAnim, {
        toValue: 0,
        friction: 1000,
        tension: 2, 
        useNativeDriver: true,
      }).start();
      // Animated.timing(translateAnim, {
      //   toValue: e.nativeEvent.contentOffset.y,
      //   duration: 0,
      //   useNativeDriver: true,
      // }).start();
      // Animated.timing(opacityAnim, {
      //   toValue: 1,
      //   duration: 0,
      //   useNativeDriver: true,
      // }).start();
    }
  };

  return (
    <>
      <HomeBtnLayout />
      <StatusBar barStyle={'light-content'} />
      <Animated.View
        style={{
          transform: [{ translateY: translateAnim }],
        }}
      >
        <Header opacityAnim={opacityAnim} />
        <HeaderCategory />
      </Animated.View>
      {/*  */}
      <View style={{ flex: 1 }}>
        <YoutubeHome onScroll={onHomeScroll} />
      </View>
      {/*  */}
      {<Playlist size={size} setSize={setSize} />}
      <BottomTab size={size} />
    </>
  );
}

export default YoutubeMusic;
