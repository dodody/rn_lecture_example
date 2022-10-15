# Animated 개념 및 실습

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

### 02. Animated - Value (15)

애니메이션에는 항상 시작과 끝이 있습니다. 즉, 초기 value와 종료 value가 있고,
초기값부터 종료값까지 변화하는 시간이, 애니메이션 작동 메카니즘입니다.

애니메이션의 초기값은 이와 같이 생겼습니다.
new Animated.Value(0), new Animated.ValueXY(0), useRef나 useEffect안에 넣어서 사용하는데요,
value 와 valueXY의 차이점은 단일값이냐, 두개의 값이냐를

<!-- new가 들어가있는 이유는 생성자 함수로 애니메이션 값을 설정한 것임.  -->

setValue
값을 직접 설정합니다. 그러면 값에서 실행 중인 모든 애니메이션이 중지되고 바인딩된 모든 속성이 업데이트됩니다.

---

<!-- ? 애니메이션 value 값 설정하는것을 보여준다. -->

value는 하나의 단일값과 벡터값으로 표현해줄 수 있는데
단일값은 단순하게 표현할 수 있는 애니메이션에서 많이 쓰이고 벡터값은 xy값이 따로 존재해야되는 상황에서 사용된다.
(벡터값 value를 보여주고) 이런식으로 생겼고, (벡터값 애니메이션을 인터렉션 하는 예시를 가볍게 보여준다.) 자세하게 컨트롤 하는건 추후, (심화라는말 쓰지말고 더 정확하게 xy를 사용해야할때랄까, 벡터값을 핸들링해야할 떄라는 말로 사용하기) 애니메이션에서 해보는걸로해요.
벡터값으로 인터렉션을 주는 가장 단순한 예제는 ~~~~ 이니까 그때 다시 더 본격적으로 살펴보는걸로 걸로 하겠습니다.

### 1. Animated - useNativeDriver (5)

<!-- ? 애니메이션을 이용한 제일 간단한 예시를 만들어보고, 여기서 발생하는 useNativeDriver(경고,오류)에 대해 한번 짚어주기  -->

### 1. Animated - property (10)

다음은 animation의 property에 대한 내용입니다.
컴포넌트 스타일링 사용되는 모든 속성이, Animated.Value 값으로 컨트롤되지 않습니다. 일부의 속성만 애니메이션을 사용할 수 있습니다.
opacity나 transform입니다. transform로는 scale, scaleX, scaleY, rotate, rotateX, rotateY, skewX, skewY, translateX, translateY 정도만 컨트롤 가능합니다.

<!-- ! 이거 보여주는게 맞을까? ! (이런 순수한 Value로 값을 바꾸는 예시를 살짝 보여드리자면, ) -->

그 외의 안되는 값을 animation value로 컨트롤 하려고 하면,
(안되는 경우 예제 보여주기 - width, height, flexbox, padding, margin) 이와같은 오류가 생기구요.

이런 순수한 Animated.Value로 컨트롤할수 없는 스타일은 아예 바꿀수 없는건 아닙니다.

<!-- ! 조금더 이해하기 쉽게 보여주면 좋을거같은데  -->

뒤쪽에서 배울거지만, interpolate를 이용해서 색을 바꾸려는 액션을 하려한다면, 값이 0~1이 되는 과정에 값을 바꿔주는 방식으로 작동하게 할 수 있습니다.
일단, 순수한 Animated.로 핸들링 하는건 opacity나 transform만 기억해주세요!

### 2. Animated - 제공하는 인터렉션 종류 (5)

react native는 크게 세가지의 애니메이션유형을 제공합니다.
앞 파트에서는 항상 timing을 이용한 예시를 보여드렸었는데요.
애니메이션 초기값에서 최종값까지의 어떤 곡선을 제공하는지에 따라
timing, spring, decay 이름으로 애니메이션을 제공합니다.

timing은 easing 애니메이션을 시간에 따라 컨트롤하는 애니메이션이고
그렇기 때문에 react native에서 제공하는 애니메이션api 중 하나인 Easing을 컨트롤합니다.

spring은 말 그대로 스프링물리 애니메이션을 제공합니다.

decay는 초기에 제공하는 속도에서 점차적으로 속도가 느려지고,
최종적으론 정지하는 액션을 제공합니다.

하나하나 애니메이션을 생성해보고, 커스텀할 수 있는 영역들에 대해 하나하나 알아봅십니다.

### 2. Animated - Animated.timing 실습해보기 (15)

<!-- ? 기본 timing 애니메이션 생성하기   -->
<!-- ? Easing api 를 이용해서 고도화된 timing 애니메이션 만들어보기   -->

### 2. Animated - Animated.spring 실습해보기 (15)

<!-- ? 기본 spring 애니메이션 생성하기 (경우의 수가 몇가지 있어서 시간 좀 걸림 )   -->

### 2. Animated - Animated.dacay 실습해보기 (5)

<!-- ? 기본 dacay 애니메이션 생성하기 (가벼운 예시 만들기) , 공던지기 예시 만들어주기  -->

### 4. 애니메이션 합성 (10)

합성기능
Animated.delay()란,
Animated.parallel()란
Animated.sequence()란
Animated.stagger()란

<!-- ? 애니메이션 합성하는 예시를 차례대로 보여주기   -->

### 4. 애니메이션 결합 (10)

아래와 같은 애니메이션의 결합에 사용되는 기본함수가 있는데,
Animated.add() 란
Animated.subtract() 란
Animated.divide()란
Animated.modulo()란
Animated.multiply()란

<!-- ? 애니메이션 결합하는 예시를 차례대로 보여주기   -->

### 4. 애니메이션 보간법, interpolate (15)

Animated.interpolate()란

<!-- ? 애니메이션 interpolate 심플 예시 보여주기   -->

앞에서 말했던 opacity, transform 이외의 값들을 컨트롤하는거 보여주기

<!-- ? opacity, transform 이외의 값들을 컨트롤하는거 예시 보여주기   -->

### 5. 예제) Snackbar (10)

<!-- ? 버튼을 누르면, (timing, spring) 올라왔다가, 시간이 지나면 내려가는 예시  -->
<!-- 위에서 아래로 내려올 수도 있고, 아래에서 위로 올라갈 수도 있다. -->
<!-- timing, spring, decay 셋다 보여줄 수 있을 까?  -->

- snackbar 마스터플랜 보여주고, 애니메이션 기획 설명하기
- snackbar ui 만들기
- 애니메이션 구현하기
- 작업한 내용 가볍게 정리

### 6. 예제) drawer menu (15)

<!-- 버튼을 누르면 왼/오 에서 메뉴가 펼쳐지고, 백그라운드가 어두워진다.  -->
<!-- timing, spring, decay 셋다 보여줄 수 있을 까?  -->

- drawer menu 마스터플랜 보여주고, 애니메이션 기획 설명하기
- drawer menu ui 만들기
- 애니메이션 구현하기
- 작업한 내용 가볍게 정리

### 7. 예제) Collapse UI / Carousel (20)

<!-- 여러개의 리스트가 있고, 거기엔 부모와 자식이 있다. 부모 리스트를 누르면 아래가 접힌다.  -->
<!-- 각자의 상태가 있고 상태에 따라 바뀌게 된다.  -->
<!-- 열리고 닫힐 때, icon이 있고 아이콘이 움직이게 한다. -->
<!-- 아이콘도 svg로 간단하게 만들수 있지 않을까? -->

- Collapse UI 마스터플랜 보여주고, 애니메이션 기획 설명하기
- Collapse ui 만들기
- 애니메이션 구현하기
- 작업한 내용 가볍게 정리
