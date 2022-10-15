import React, {useRef, useState} from 'react';
import {StyleSheet, View, Text, Animated, Button} from 'react-native';
import {globalStyles} from '@style';

export const Clip2 = props => {
  const anim1 = useRef(new Animated.ValueXY()).current;
  const anim2 = useRef(new Animated.ValueXY(0)).current;

  // 애니메이션의 현재 값을 바로 읽고 싶을 떄 useState를 사용하려나
  const [anim3, setAnim3] = useState(new Animated.ValueXY());
  const [anim4, setAnim4] = useState(new Animated.ValueXY({x: 0, y: 0, z: 0}));

  return (
    <View>
      <Button title="qjxms" />
      <Animated.View style={globalStyles.circle} />
    </View>
  );
};
