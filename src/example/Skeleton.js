import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import HomeBtnLayout from '../HomeBtnLayout';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Skeleton() {
  return (
    <SafeAreaView>
      <HomeBtnLayout />
      <Text style={{ padding: 30, paddingBottom: 10, fontSize: 20 }}>
        Skeleton
      </Text>

      {/*  */}
      {/* 빈화면을 그리고, 컬러에 애니메이션을 줄거다. */}
      <ScrollView style={{ margin: 20 }}>
        <Unit />
        <Unit />
        <Unit />
        <Unit />
        <Unit />
        <Unit />
      </ScrollView>
    </SafeAreaView>
  );
}

// ! 이거 애니메이션 넣으면 됨.
function Unit() {
  return (
    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
      <View style={styles.thumbnail} />
      <View>
        <View style={styles.text} />
        <View style={styles.text} />
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.subText} />
          <View style={styles.subText} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  thumbnail: {
    width: 120,
    height: 80,
    backgroundColor: '#333',
    borderRadius: 4,
    marginRight: 10,
  },
  text: {
    width: 300,
    height: 16,
    backgroundColor: '#333',
    borderRadius: 4,
    marginBottom: 8,
  },
  subText: {
    width: 40,
    height: 10,
    backgroundColor: '#333',
    borderRadius: 3,
    marginRight: 8,
  },
});
