import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <Text style={{ fontSize: 40, marginBottom: 30 }}>Navigation Home</Text>
      <Button title="Clip2" onPress={() => navigation.navigate('Clip2')} />
      <Button title="Clip3" onPress={() => navigation.navigate('Clip3')} />
      <Button title="Clip4" onPress={() => navigation.navigate('Clip4')} />
      <Button title="Clip5" onPress={() => navigation.navigate('Clip5')} />
      <Button title="Clip6" onPress={() => navigation.navigate('Clip6')} />
      <Button
        title="BannerSlider"
        onPress={() => navigation.navigate('BannerSlider')}
      />
      <Button
        title="Collapse"
        onPress={() => navigation.navigate('Collapse')}
      />
      <Button
        title="DrawerMenu"
        onPress={() => navigation.navigate('DrawerMenu')}
      />
      <Button
        title="FontSlider"
        onPress={() => navigation.navigate('FontSlider')}
      />
      <Button
        title="LayoutAnimationCollapse"
        onPress={() => navigation.navigate('LayoutAnimationCollapse')}
      />
      <Button
        title="LayoutAnimationPageHeader"
        onPress={() => navigation.navigate('LayoutAnimationPageHeader')}
      />
      <Button title="Modal" onPress={() => navigation.navigate('Modal')} />
      <Button
        title="ProgressBar"
        onPress={() => navigation.navigate('ProgressBar')}
      />
      <Button
        title="Skeleton"
        onPress={() => navigation.navigate('Skeleton')}
      />
      <Button
        title="Snackbar"
        onPress={() => navigation.navigate('Snackbar')}
      />
      <Button
        title="SnowBackground"
        onPress={() => navigation.navigate('SnowBackground')}
      />
      {/*  */}
      <Button
        title="YoutubeMusic"
        onPress={() => navigation.navigate('YoutubeMusic')}
      />
      <Button
        title="SamsungPay"
        onPress={() => navigation.navigate('SamsungPay')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
