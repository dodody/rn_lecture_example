// 01. Animated 기본 개념, components (10)
import React, { useRef, useState } from 'react';
import { Animated, Button, View, Text } from 'react-native';
const AnimatedButton = Animated.createAnimatedComponent(Button);

export default function Clip1() {
  const opacityAnim = useRef(new Animated.Value(0)).current;
  // const [dody, setDody] = useState(0);
  const opacityAnimStatus = () => opacityAnim.addListener(({ value }) => console.log(value));
  // opacityAnim.removeListener(opacityAnimStatus);
  // opacityAnim.removeAllListeners();


  const animatedHide = () => {
    // opacityAnimStatus()
    opacityAnim.setValue(0);
    Animated.timing(opacityAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    
    // setTimeout(() => {
    //   // opacityAnim.setOffset(0.1);
    //   // opacityAnim.flattenOffset();
    //   opacityAnim.stopAnimation()
    //   // opacityAnim.resetAnimation()
    // }, 1000);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="버튼" onPress={animatedHide} />
      <Animated.View
        style={{
          width: 100,
          height: 100,
          borderRadius: opacityAnim.interpolate({
            inputRange: [0, 1], 
            outputRange: [100, 1], 
            extrapolateRight: 'identity'
          }),
          backgroundColor: '#ffa100',
          opacity: opacityAnim,
        }}
      />

      {/* <AnimatedButton
        title="애니메이션이 가능해진 버튼"
        style={[
          styles.circle,
          {
            opacity: opacityAnim,
          },
        ]}
      /> */}
    </View>
  );
}
