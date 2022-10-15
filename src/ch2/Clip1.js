// 01. Animated 기본 개념, components (10)
import React, {useRef} from 'react';
import {StyleSheet, Animated, Button} from 'react-native';
const AnimatedButton = Animated.createAnimatedComponent(Button);

export function Clip1() {
  const opacityAnim = useRef(new Animated.Value(1)).current;

  const animatedHide = () => {
    Animated.timing(opacityAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <Button title="버튼" onPress={animatedHide} />
      <Animated.View
        style={[
          styles.circle,
          {
            opacity: opacityAnim,
          },
        ]}
      />

      <AnimatedButton
        title="애니메이션이 가능해진 버튼"
        style={[
          styles.circle,
          {
            opacity: opacityAnim,
          },
        ]}
      />
    </>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: '#ffa100',
  },
});
