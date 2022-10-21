import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import YoutubeMusic from '../ch7/YoutubeMusic';
const Stack = createNativeStackNavigator();

function HomeScreen() {
  return <Text style={{color: 'red', borderColor: 'red'}}>Home Screen</Text>;
}

function DetailsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="YoutubeMusic">
        <Stack.Screen
          name="YoutubeMusic"
          component={YoutubeMusic}
          options={noHeaderOption}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const noHeaderOption = {
  headerShown: false,
  animationEnabled: false,
};

const config = {
  animation: 'spring',
  config: {
    stiffness: 4000,
    damping: 1000,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const detailOption = {
  headerShown: false,
  gestureResponseDistance: {
    // 스와이프 위치
    horizontal: 10000,
  },
  transitionSpec: {
    open: config,
    close: config,
  },
};

export default Navigation;
