import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getBottomSpace } from 'react-native-iphone-x-helper';

// ! 이게 있어야 여기에 붙이는게 가능하니까,,, 일단 만들어 보겠다.
export default function BottomTab({ size }) {
  const onTabPress = () => {};

  return (
    size !== 'full' && (
      <View style={styles.wrapper}>
        <TabItem title="홈" iconName="home" onTabPress={onTabPress} />
        <TabItem title="둘러보기" iconName="explore" onTabPress={onTabPress} />
        <TabItem
          title="보관함"
          iconName="library-music"
          onTabPress={onTabPress}
        />
      </View>
    )
  );
}

function TabItem({ title, iconName, onTabPress }) {
  return (
    <TouchableWithoutFeedback onPress={onTabPress}>
      <View style={styles.itemWrapper}>
        <Icon name={iconName} size={26} color="#fff" />
        <Text style={styles.tabText}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#222',
    paddingBottom: getBottomSpace(),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  itemWrapper: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    fontSize: 12,
    marginTop: 6,
  },
});
