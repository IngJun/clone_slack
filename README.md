# Slack Clone Coding Project

조원 최영준, 이석준, 김건, 김동윤, 최인영

Slack 웹서비스 클론코딩

## coding convention

변수 선언: camel case
ex) `let isDone;` `const checkAuth;`

함수 선언: arrow function
ex) `const foo = () => {};`

컴포넌트 선언: arrow function component

```jsx
const Component = props => {
  return <div></div>;
};
```

패키지 임포트: package import와 component import 구분
ex)

```jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
////////////////
import MyComponent from "../components/MyComponent";
import MyComponent2 from "../components/MyComponent2";
```

CSS(UI/UX):
`styled-components` 임포트
