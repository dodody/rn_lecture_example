import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import { category } from './lib/data';

// todo: 카테고리를 누르면
// todo: 각자에 맞는 레이아웃이 나타나고, 배경이 fade로 바뀐다. ,
// todo: 같은 버튼을 누르면 맨 첫 페이지로 나온다.
// todo: 옆으로 스와이프

// ! 원래는 이 category도 api로 가져오겠죠~? 저희는 더미 데이터를 이용해봅시다.
// ! 여기서는 가로 스크롤이 필요합니다.
export default function HeaderCategory() {
  const [chipText, setChipText] = useState();
  const onChipPress = val => {
    if (val !== chipText) {
      setChipText(val);
    } else {
      setChipText();
    }
  };

  return (
    <View>
      <ScrollView
        horizontal={true}
        style={styles.scrollViewWrapper}
        contentContainerStyle={styles.contentContainer}
      >
        {category.map((value, index) => {
          return (
            <TouchableWithoutFeedback
              onPress={() => onChipPress(value.title)}
              key={index}
            >
              <View
                key={index}
                style={chipText === value.title ? selectedChip : styles.chip}
              >
                <Text
                  style={
                    chipText === value.title
                      ? selectedChipText
                      : styles.chipText
                  }
                  key={value.title}
                >
                  {value.title}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollViewWrapper: {
    alignContent: 'stretch',
    paddingVertical: 14,
    flexDirection: 'row',
    backgroundColor: '#222',
  },
  contentContainer: {
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    height: 40,
    marginHorizontal: 4,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#ffffff30',
    backgroundColor: '#ffffff01',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chipText: {
    color: 'white',
    fontSize: 16,
  },
});

const selectedChip = StyleSheet.flatten([
  styles.chip,
  {
    borderColor: '#ffffff',
    backgroundColor: '#ffffff',
  },
]);

const selectedChipText = StyleSheet.flatten([
  styles.chipText,
  {
    color: '#222',
  },
]);
