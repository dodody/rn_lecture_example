import React, { useState, useRef, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import HomeBtnLayout from '../HomeBtnLayout';
import data from '../data/collapse';

export default function Collapse() {
  // 나머지 값들을 전부 올렸다가 내렸다가 하는 방법도 있지 않을띾/?
  return (
    <SafeAreaView>
      <HomeBtnLayout />
      <Text style={{ padding: 30, fontSize: 20 }}>Animated Collapse</Text>
      {data.map((value, index) => {
        const listRef = useRef(0);
        const [open, setOpen] = useState();
        const translation = useRef(new Animated.Value(-50)).current;

        const onShowPress = () => {
          console.log(123)
          Animated.timing(translation, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }).start();
        };

        const onHidePress = () => {
          Animated.timing(translation, {
            toValue: -100,
            duration: 300,
            useNativeDriver: false,
          }).start();
        };

        return (
          <View key={index}>
            <TouchableWithoutFeedback
              onPress={open ? onHidePress : onShowPress}
            >
              <View style={styles.collapseQuestion}>
                <Text style={styles.collapseQuestionText}>
                  {index + 1}) {value.q}
                </Text>
              </View>
            </TouchableWithoutFeedback>

            <Animated.View
              ref={listRef}
              onLayout={e => console.log(e.nativeEvent.layout)}
              style={[
                styles.collapseAnswer,
                {
                  // padding: translation.interpolate({
                  //   inputRange: [0, 100],
                  //   outputRange: [0, 20],
                  // }),
                  // padding: translation.interpolate({
                  //   inputRange: [-50, 1],
                  //   outputRange: [0, 1],
                  // }),
                  // height: translation.interpolate({
                  //   inputRange: [0, 100],
                  //   outputRange: [0, 50],
                  // }),
                  transform: [{ translateY: translation }],
                  opacity: translation.interpolate({
                    inputRange: [-50, 1],
                    outputRange: [0, 1],
                  }),
                },
              ]}
            >
              <Text style={styles.collapseAnswerText}>{value.a}</Text>
            </Animated.View>
          </View>
        );
      })}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  collapseQuestion: {
    backgroundColor: '#006aff',
    borderBottomColor: '#428df5',
    borderBottomWidth: 1,
    width: '100%',
    padding: 20,
    zIndex: 100,
  },
  collapseQuestionText: {
    color: 'white',
    fontSize: 14,
  },
  collapseAnswer: {
    backgroundColor: '#f4f4f4',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    width: '100%',
    paddingLeft: 40,
  },
  collapseAnswerText: {
    color: '#333',
  },
});
