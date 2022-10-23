import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconButton from '../IconButton';

export default function FullPlaylistAlbum() {
  const width = Dimensions.get('window').width;
  const [thumbUp, setThumbUp] = useState(false);
  const [thumbDown, setThumbDown] = useState(false);
  const [albumClick, setAlbumClick] = useState(false);
  const onAlBumPress = () => {
    if (!albumClick) {
      setAlbumClick(true);
      setTimeout(() => {
        setAlbumClick(false);
      }, 3000);
    } else {
      setAlbumClick(false);
    }
  };

  return (
    <View style={{ marginTop: 20, marginHorizontal: 30 }}>
      {/* 앨범 클릭하면 뭐 나오는거 fadeout 으로 넣을지 말지 */}
      <View
        style={{
          justifyContents: 'center',
          alignItems: 'center',
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TouchableWithoutFeedback onPress={onAlBumPress}>
          <Image
            source={{ uri: 'https://picsum.photos/200/200' }}
            style={{
              width: '100%',
              height: width - 60 ,
              backgroundColor: '#222',
              borderRadius: 6,
            }}
          />
        </TouchableWithoutFeedback>

        {/*  */}
        {albumClick && (
          <TouchableWithoutFeedback onPress={onAlBumPress}>
            <View
              style={{
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                width: '100%',
                height: width - 60,
                backgroundColor: '#00000089',
                borderRadius: 6,
              }}
            >
              <CircleIconButton name={'share'} />
              <CircleIconButton name={'file-download'} />
              <CircleIconButton name={'playlist-add'} />
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  zIndex: 1909,
                }}
              >
                <IconButton
                  name={'fullscreen'}
                  size={26}
                  onBtnPress={() => console.log(123)}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>

      {/*  */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, }}>
        <TouchableHighlight>
          <Icon
            name={thumbDown ? 'thumb-down-alt' : 'thumb-down-off-alt'}
            size={26}
            color="#fff"
          />
        </TouchableHighlight>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 28, fontWeight: 'bold', color: 'white' }}>가을밤 떠난 너</Text>
          <Text style={{marginTop: 2, color: 'white', fontSize: 14, }}>케이시(Kassy)</Text>
        </View>
        <TouchableHighlight>
          <Icon
            name={thumbUp ? 'thumb-up' : 'thumb-up-off-alt'}
            size={26}
            color="#fff"
          />
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

function CircleIconButton({ name, onBtnPress }) {
  return (
    <TouchableHighlight
      onPress={onBtnPress}
      style={{
        padding: 12,
        backgroundColor: '#000000aa',
        borderRadius: 100,
        margin: 8,
      }}
    >
      <Icon name={name} size={22} color="#fff" />
    </TouchableHighlight>
  );
}
