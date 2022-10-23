import React, { useState, useRef, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import HomeBtnLayout from './HomeBtnLayout';
import data from '../data/collapse';

export default function Collapse() {

  return (
    <SafeAreaView>
      <HomeBtnLayout />
      <Text style={{ padding: 30, fontSize: 20 }}>Animated Collapse</Text>
      {data.map((value, index) => {
        const [open, setOpen] = useState();
        const translation = useRef(new Animated.Value(100)).current;
        const onShowPress = () => {
          setOpen(true);
          translation.setValue(100);
          Animated.timing(translation, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
          }).start();
        };

        const onHidePress = () => {
          setOpen(false);
          translation.setValue(0);
          Animated.timing(translation, {
            toValue: 100,
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

            {open && (
              <Animated.View
                style={[
                  styles.collapseAnswer,
                  {
                    transform: [{ translateY: translation }],
                    opacity: translation.interpolate({
                      inputRange: [0, 100],
                      outputRange: [1, 0],
                    }),
                  },
                ]}
              >
                <Text style={styles.collapseAnswerText}>{value.a}</Text>
              </Animated.View>
            )}
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
    padding: 20,
    paddingLeft: 40,
  },
  collapseAnswerText: {
    color: '#333',
  },
});
