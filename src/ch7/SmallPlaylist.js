import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function SmallPlaylist({setSize}) {
  const [play, setPlay] = useState(false)
  const onPlayPress = () => {setPlay(el => !el)}
  const onPlaylistPress = () => {setSize('full')}
  
  return (
    <TouchableHighlight onPress={onPlaylistPress}>  
      <View style={styles.wrapper}>
        {/* 음악 정보 */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image style={styles.thumbnail} source={{uri: 'https://picsum.photos/200/200'}}/>
          <View>
            <Text style={styles.title}>산책</Text>
            <Text style={styles.player}>오반</Text>
          </View>
        </View>
        {/* 재생 정보 */}
        <View style={{flexDirection: 'row'}}>
          {play
            ? <IconButton name="play-arrow" size={26} color="#fff" onPlayPress={onPlayPress}/>
            : <IconButton name="pause" size={26} color="#fff" onPlayPress={onPlayPress}/>
          }
          <IconButton name="skip-next" size={26} color="#fff" onPlayPress={onPlayPress}/>
        </View>
      </View>
    </TouchableHighlight>
  );
}

function IconButton({name, onPlayPress}){
  return (
    <TouchableHighlight onPress={onPlayPress} style={{padding: 12, borderRadius: 100}}>
      <Icon name={name} size={26} color="#fff" />
    </TouchableHighlight>
  )
}


const styles = StyleSheet.create({
  wrapper: {
    height: 68,
    paddingHorizontal: 20,
    backgroundColor: '#222',
    borderBottomColor: '#999', // ! 시간이 지나면 100%로 차게 되어있음.
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between',
    shadowOffset: {
      width: 100,
      height: -100
    },
    shadowOpacity: 1,
    shadowRadius: 100, 
  },
  thumbnail: {
    width: 45, 
    height: 45,
    marginRight: 20, 
  },
  title: {
    fontWeight: 'bold',
    color: 'white'
  }, 
  player: {
    marginTop: 8, 
    color: 'white'
  }
})