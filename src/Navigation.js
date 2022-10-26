import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from 'Home';
// ch2
import Clip2 from './ch2/Clip3';
import Clip4 from './ch2/Clip4';
import Clip5 from './ch2/Clip5';
import Clip6 from './ch2/Clip6';
// import Clip2 from './ch2/Clip2'

import BannerSlider from './example/BannerSlider';
import Collapse from './example/Collapse';
import DrawerMenu from './example/DrawerMenu';
import FontSlider from './example/FontSlider';
import LayoutAnimationCollapse from './example/LayoutAnimationCollapse';
import LayoutAnimationPageHeader from './example/LayoutAnimationPageHeader';
import Modal from './example/Modal';
import ProgressBar from './example/ProgressBar';
import Skeleton from './example/Skeleton';
import Snackbar from './example/Snackbar';
import SnowBackground from './example/SnowBackground';
import YoutubeMusic from './ch7/YoutubeMusic';
import SamsungPay from './ch8/SamsungPay';
const Stack = createNativeStackNavigator();

function Navigation() {
  const navigationRef = useRef();
  return (
    <NavigationContainer navigationRef={navigationRef}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={detailOption} />
        {/*  */}
        <Stack.Screen name="Clip2" component={Clip2} options={detailOption} />
        <Stack.Screen name="Clip4" component={Clip4} options={detailOption} />
        <Stack.Screen name="Clip5" component={Clip5} options={detailOption} />
        <Stack.Screen name="Clip6" component={Clip6} options={detailOption} />
        {/* <Stack.Screen name="Home" component={Home} options={detailOption} />
        <Stack.Screen name="Home" component={Home} options={detailOption} /> */}
        <Stack.Screen
          name="Snackbar"
          component={Snackbar}
          options={detailOption}
        />
        <Stack.Screen
          name="DrawerMenu"
          component={DrawerMenu}
          options={detailOption}
        />
        <Stack.Screen
          name="Collapse"
          component={Collapse}
          options={detailOption}
        />
        <Stack.Screen
          name="ProgressBar"
          component={ProgressBar}
          options={detailOption}
        />
        <Stack.Screen
          name="Skeleton"
          component={Skeleton}
          options={detailOption}
        />
        <Stack.Screen
          name="SnowBackground"
          component={SnowBackground}
          options={detailOption}
        />
        <Stack.Screen
          name="LayoutAnimationCollapse"
          component={LayoutAnimationCollapse}
          options={detailOption}
        />
        <Stack.Screen
          name="LayoutAnimationPageHeader"
          component={LayoutAnimationPageHeader}
          options={detailOption}
        />
        <Stack.Screen name="Modal" component={Modal} options={detailOption} />
        <Stack.Screen
          name="BannerSlider"
          component={BannerSlider}
          options={detailOption}
        />
        <Stack.Screen
          name="FontSlider"
          component={FontSlider}
          options={detailOption}
        />
        <Stack.Screen
          name="YoutubeMusic"
          component={YoutubeMusic}
          options={detailOption}
        />
        <Stack.Screen
          name="SamsungPay"
          component={SamsungPay}
          options={detailOption}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const noHeaderOption = {
  headerShown: false,
  // animationEnabled: false,
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
