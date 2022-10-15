import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';

function Clip1(props) {
  console.log(Dimensions.get('window').width);
  return (
    <View>
      <View style={styles.card}>
        <Text>hi~</Text>
      </View>
      <View style={styles.card}>
        <Text>hi~</Text>
      </View>
      <View style={styles.card}>
        <Text>hi~</Text>
      </View>
    </View>
  );
}

export default Clip1;

const colors = ['#333', '#222', '#ffa100'];
const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 190,
    // width: '80%',
    // height: Dimensions.get('window').width * 0.8 * 0.65, // width 의 비율에 따라 할 수 없을 까?
    borderRadius: 8,
    // backgroundColor: colors., //색상 랜덤으로 보여지게
  },
});
