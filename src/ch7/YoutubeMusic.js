import React, { useState } from 'react';
import { View, StatusBar } from 'react-native';
import Header from './Header';
import HeaderCategory from './HeaderCategory';
import BottomTab from './BottomTab';
import Playlist from './Playlist';
import YoutubeHome from './YoutubeHome';
import HomeBtnLayout from '../example/HomeBtnLayout';

// done: npm i react-native-vector-icons
// todo: 배경화면 색이 계속 바뀜
// ! 페이지로 보지 않고, 플레이리스트 모달, 안의 모달 두개의 모달이 겹쳐져있는걸로 할게요.
// ! 여러 status가 여기서 관리될 것이다.
function YoutubeMusic(props) {
  const [size, setSize] = useState('small'); // ! 무슨 사이즈인지 명확히 알려줘야 함
  // ! 상태에 따라 small, full => 액션이 발생하면 full이 되게 합니다.

  const onHomeScroll = e => {
    console.log(e);
  };

  return (
    <>
      <HomeBtnLayout />
      <StatusBar barStyle={'light-content'} />
      <Header />
      <HeaderCategory />
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
