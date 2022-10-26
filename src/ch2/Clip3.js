import React, { useRef } from 'react';
import { View, Button, Animated, Easing } from 'react-native';
import globalStyles from '../globalStyles';
import HomeBtnLayout from '../HomeBtnLayout';
import Face from '../components/Face';

export default function Clip3() {
  const translateAnim = useRef(new Animated.Value(0)).current;

  const onPress = () => {
    translateAnim.setValue(0);
    // back
    // Animated.parallel([
    //   Animated.timing(translateAnim, {
    //     toValue: 100,
    //     duration: 500,
    //     useNativeDriver: true,
    //   }),
    //   Animated.timing(translateAnim, {
    //     toValue: -30,
    //     duration: 1000,
    //     easing: Easing.back(2),
    //     useNativeDriver: true,
    //   }),
    // ]).start();

    Animated.timing(translateAnim, {
      toValue: 100,
      duration: 500,
      // 기본 인터렉션
      // easing: Easing.bounce,
      // easing: Easing.ease,
      // easing: Easing.elastic(Easing.bounce(2)),

      // 함수에 따른 인터렉션
      // easing: Easing.linear,
      // easing: Easing.quad,
      // easing: Easing.cubic,
      // easing: Easing.poly(1),

      // 추가 수학함수
      // easing: Easing.bezier(0, 2, 1, -1),
      // easing: Easing.circle,
      // easing: Easing.sin,
      // easing: Easing.exp,

      // 추가 도우미
      // easing: Easing.in(Easing.bounce), // 앞으로 실행
      easing: Easing.inOut(Easing.bounce), // 대칭으로
      // easing: Easing.out(Easing.bounce), // 뒤로 실행

      // in out inout
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={globalStyles.wrapper}>
      <HomeBtnLayout />
      <Button title="Action!" onPress={onPress} />
      <Animated.View
        style={{
          transform: [{ translateY: translateAnim }],
        }}
      >
        <Face />
      </Animated.View>
    </View>
  );
}
