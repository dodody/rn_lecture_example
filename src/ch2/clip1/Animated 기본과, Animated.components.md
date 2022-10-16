### 01. Animated 기본 개념, components (10)

이번은 Animated api에 대해 알아볼겁니다.
앞에서도 말했듯, Animated는 React Native에서 가장 바리에이션이 높은 애니메이션 생성 api라고 말씀을 드렸었는데요,

Animated는
움직이는 대상이 되는 컴포넌트부터,
기본적인 인터렉션,
기본 인터렉션을 (내 입맛에 맞게)바꿀 수 있는 커스텀 기능들,
그리고, 애니메이션의 value 등을
모두 관리하는 api 입니다.

animated 를 이용해서 애니메이션을 생성하려면, 모두 세팅해줘야합니다.
번거롭다고 생각할수도 있지만, 그만큼 커스텀이 수월하다고 생각하면
사랑스러운 기능이 아닐 수가 없습니다.

Animated의 컴포넌트, value, 기본인터렉션, 커스텀 기능들 에 대해서 하나씩 짚어보겠습니다.

당연하게도 애니메이션은 움직여야 하는 대상이 있어야합니다.
react native에서는 이를 기본적으로 제공해주고 있습니다.
그는 아래와 같습니다.

<Animated.Image />
<Animated.ScrollView />
<Animated.Text />
<Animated.View />
<Animated.FlatList />
<Animated.SectionList />

Animated에 온점을 찍고, 기본으로 제공하는 컴포넌트를 붙이면 애니메이션화 시킬 수 있습니다.
그럼, React Native의 다른 컴포넌트은 Animated.를 붙여서 사용할 수 없는가? 방법이 없지는 않고, createAnimatedComponents 기본내장함수를 이용하면 애니메이션화 가능한 컴포넌트로 만들 수 있습니다.

import {Button} from 'react-native';
const AnimatedButton = Animated.createAnimatedComponentㄴ(Button);

이런식으로 기본으로 제공하지 않는 컴포넌트를 createAnimatedComponents의 argument로 받으면 애니메이션화 할 수 있습니다. React Native에서 기본으로 제공하는 애니메이션 컴포넌트로도 충분히 애니메이션 컨트롤이 되기때문에 그렇게 자주 사용되는 기능은 아닙니다.
참고로만 알아주세요!
