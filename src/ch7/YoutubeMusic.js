import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import Header from './Header/Header'
import HeaderCategory from './Header/HeaderCategory'


// done: npm i react-native-vector-icons
// todo: 배경화면 색이 계속 바뀜
function YoutubeMusic(props) {
  return (
    <>
      <Header />
      <HeaderCategory />
      {/* // <View style={styles.wrapper}> */}
    {/* //   <Text> {data[0].title}</Text>
    //   <Text> {data[0].artist}</Text>
    //   <Image 
    //     source={{uri: data[0].thumbnail}}
    //     style={{width: 200, height: 200}} />
    // </View> */}
    </>
  );
}

export default YoutubeMusic;
