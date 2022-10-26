import React, { useRef } from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Easing,
  SafeAreaView,
} from 'react-native';
import globalStyles from '../globalStyles';
import HomeBtnLayout from '../HomeBtnLayout';

export default function Clip6() {
  const translateAnim = useRef(new Animated.Value(0)).current;
  const onPress = () => {
    translateAnim.setValue(0);
    // 오늘은 빠르게 움직이는 컴포넌트가 감속 되는 예시를 실습해보겠습니다.
    // 그 말은 즉슨, 초기속도를 0 으로 수렴시킨다는 뜻입니다.
    // 필요한 값으로 초기 속도 값이 필요하구요.
    // 감속을 얼마나 시킬지도

    Animated.decay(translateAnim, {
      velocity: 1,  
      deceleration: 0.997,
      useNativeDriver: true,
    }).start();
    // velocity: 초기 속도. 필수의.
    // deceleration: 부패율. 기본값은 0.997입니다.
    // isInteraction: 이 애니메이션이 에 "상호작용 핸들"을 생성하는지 여부 InteractionManager. 기본값은 참입니다.
    // useNativeDriver

    // 이런식으로 작동하는 함수입니다. 
  };

  return (
    <SafeAreaView>
      <View style={globalStyles.wrapper}>
        <HomeBtnLayout onPress={onPress} />
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            transform: [{ translateY: translateAnim }],
          }}
        >
          <Text style={{ fontSize: 50 }}>🍊</Text>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
