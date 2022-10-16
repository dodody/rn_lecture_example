# react native의 애니메이션 개요

### 1. react native 애니메이션 개요 (5)

오늘은 알앤의 animation에 대해 알아보겠습니다.

애니메이션의 역할은 흥미유발보다는 사용자 경험을 개선하는데 하나의 도구로써 사용되고 있는데요

앱을 사용하면 클릭이나 제스쳐를 하게되고, 앱은 / 그런 유저의 행동에 대한 / 피드백을 주어야합니다.

이때 애니메이션을 사용하면 / 시각적으로 강한 힌트를 주게 되어 / 유저에게 올바른 앱 사용을 유도할 수 있습니다.

그런데 react native 개발을 하면서 / 애니메이션을 본격적으로 접해보지 않는 분들도 많은데

이유는 기본 컴포넌트들에 애니메이션이 녹아져있기 때문입니다.

<!--  -->
<!--  -->
<!--  -->

스크롤액션에 반응하는 scrollview, flatlist, sectionList, VirtualizedList

터치액션에 반응하는 TouchableHighlight, touchable opacity, button

그 외 activity indicator, KeyboardAvoidingView, modal, Switch, alert 등..

<!--  -->
<!--  -->

ScrollView / FlatList / SectionList …
Button / TouchableOpacity / TouchableHighlight …
Modal / Switch / Alert / KeyboardAvoidingView / ActivityIndicator …

리액트 네이티브 기본 컴포넌트에서도 충분한 애니메이션을 제공하기 때문이죠!

저흰 앞으로 다양한 예시를 실습해보며 기본 컴포넌트의 애니메이션 이상의 커스텀 인터렉션을 구현해볼건데요.

<!-- ! 여기서 좀더 세세하게 뭘 보여줄건지를 말해줘야 겠구나, 뒤쪽에서 예시를 만들면서 여기서 더 추가해줘야 할 내용이 있지는 않는지 살펴보자.  -->

앞으로 알아볼 내용은
Animated를 통해 바리이이션 많은 애니메이션을 작업해볼거구,
LayoutAnimation으로는 쓰이는 비용에 비해 효과적인, 즉 가성비 좋은 애니메이션을 접해볼겁니다.

0-----------------

Animated API 개요 및 기초
