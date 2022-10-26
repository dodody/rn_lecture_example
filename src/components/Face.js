import { View, Text, Image } from 'react-native';
import React from 'react';

export default function Face() {
  return (
    <View
      style={{
        shadowOffset: {
          width: 1,
          height: -1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
      }}
    >
      <Image
        style={{
          width: 100,
          height: 100,
          borderRadius: 100,
        }}
        source={{
          uri: 'https://velog.velcdn.com/images/dody_/profile/57df91d1-45c3-4fbc-ad3d-a68e56ab5f99/image.png',
        }}
      />
    </View>
  );
}
