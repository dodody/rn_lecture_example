import React from 'react';
import { TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// ! 유튜브 버튼의 특징은 highlight가 있는것이 특징이기 때문에
// ! 왠만한 버튼들은 TouchableHighlight을 이용할 예정
// ! TouchableHighlight는 스타일링이 가능한 컴포넌트 입니다~!

// ! 버튼영역이 명확한 것이 유저들 사용에 있어서도 편리하겠죠~!
// ! 항상 시안을 주는 디자이너에게 클릭영역을 요구할 역할을 개발자는 가지고 있습니다!
export default function IconButton({ name, size, onBtnPress }) {
  return (
    <TouchableHighlight
      style={{ borderRadius: 100, padding: 12 }}
      onPress={onBtnPress}
      underlayColor={"#ffffff10"}
    >
      <Icon name={name} size={size || 22} color="#fff" />
    </TouchableHighlight>
  );
}
