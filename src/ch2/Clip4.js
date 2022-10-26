import React, { useRef } from 'react';
import { View, Text, Animated, Button } from 'react-native';
import globalStyles from '../globalStyles';
import HomeBtnLayout from '../HomeBtnLayout';
import Face from '../components/Face';

export default function Clip4() {
  const translateAnim = useRef(new Animated.Value(0)).current;

  const onMovePress = () => {
    translateAnim.setValue(0);
    // 1
    Animated.spring(translateAnim, {
      toValue: 100,
      friction: 20,
      tension: 140,
      useNativeDriver: true,
    }).start();

    // 2
    // Animated.spring(translateAnim, {
    //   toValue: 100,
    //   speed: 10000,
    //   bounciness: 100,
    //   useNativeDriver: true,
    // }).start();

    // 3
    // Animated.spring(translateAnim, {
    //   toValue: 100,
    //   stiffness: 10,
    //   damping: 1,
    //   mass: 1,
    //   useNativeDriver: true,
    // }).start();

    // 느슨한 경우
    // Animated.spring(this._animation, {
    //   toValue: 100,
    //   friction: 2,
    //   tension: 140,
    // }).start();

    // 탄력이 있는 경우
    // Animated.spring(this._animation, {
    //   toValue: 100,
    //   friction: 15,
    //   tension: 140,
    // }).start();
  };

  return (
    <View style={globalStyles.wrapper}>
      <HomeBtnLayout />
      <Button title="Action!" onPress={onMovePress} />
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
