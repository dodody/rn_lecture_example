import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import ImgList from './ImgList';
import { playlist } from './lib/data';

export default function YoutubeHome({ onScroll }) {
  return (
    <ScrollView
      scrollEventThrottle={16}
      style={styles.wrapper}
      onScroll={e => onScroll(e)}
    >
      <View />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <Text style={styles.titleText}>다시듣기</Text>
        <Text style={styles.subText}>더보기</Text>
      </View>
      <ImgList imgType="medium" data={playlist} />
      <View style={{ marginTop: 10 }}>
        <View>
          <Text style={styles.subText}>이 노래로 뮤직 스테이션 시작하기</Text>
          <Text style={styles.titleText}>빠른선곡 </Text>
          <ImgList imgType="small" data={playlist} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#222',
    flex: 1,
    padding: 20,
  },
  titleText: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },
  subText: {
    color: '#e2e2e2',
    fontSize: 13,
  },
});
