# Slack Clone Coding Project

조원 최영준(FE), 이석준(FE), 김건(BE), 김동윤(BE), 최인영(BE)

Slack 웹서비스 클론코딩

## coding convention

변수 선언: camel case
ex) `let isDone;` `const checkAuth;`

함수 선언: arrow function
ex) `const foo = () => {};`

컴포넌트 선언: arrow function component

```jsx
const Component = (props) => {
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

## 구현 기능 목록


1. ### 로그인, 회원가입
<p>
  <img src='https://user-images.githubusercontent.com/79635274/186629019-ceebaaa5-af6b-4e75-93c0-1233597d2607.png'>
</p>
2. ### 채팅 채널 생성
<p>
  <img src='https://user-images.githubusercontent.com/79635274/186629035-3d47a68b-557c-4b84-b44c-3eb25e49a879.png'>
</p>
3. ### 유저 초대
<p>
  <img src='https://user-images.githubusercontent.com/79635274/186629041-9e890ecc-ec74-4a15-8b36-de69538670d1.png'>
</p>
4. ### 채팅 메세지 보내기
<p>
  <img src='https://user-images.githubusercontent.com/79635274/186629045-0e645c42-a928-4718-8fc4-82835e3c1600.png'>
</p>

----


## 트러블 슈팅

1. ### 로그인 요청 후 발급받을 토큰을 저장한 다음에 페이지 이동 후 채널 목록을 요청해야하는데 토큰이 저장 되기전에 요청이 일어남


  > useEffect를 이용하여 로그인 여부를 판단 후 페이지 이동
  ```javascript
  useEffect(() => {
    if (isLogin === true) {
      navigate("/channel");
    }
  }, [isLogin]);
  ```

2. ### 채팅 메세지 전송 후 방금 보낸 채팅 메세지가 이전 메세지들과 함께 바로 화면에 렌더링 되어야하는데 혼자 랜더링 됨


  > 메세지 전송 후 강제로 페이지를 새로고침 시킴 (useState를 통해 리렌더링을 일으키려 했으나 실패)
  ```javascript
  const sendMessage = () => {
    client.send(
      `/pub/message/${params}`,
      headers,
      JSON.stringify({
        message: message,
      })
    );
    setMessage("");
    window.location.reload();
  };
  ```

3. ### 채널 이동 시 이전 채팅목록이 그대로 남아있음


  > 위와 같이 채널 이동시 강제 새로고침 시킴
  ```javascript
  useEffect(() => {
    if (params !== undefined) {
      connect();
      return () => {
        client.disconnect();
        window.location.reload();
      };
    }
    return client.disconnect();
  }, [params]);
  // params는 채널 아이디
  ```
  
  
  ## 총평
  
  
  socket을 이용한 통신을 해볼 수 있는 좋은 경험이었으나 트러블 슈팅에서 새로고침으로 state문제를 해결했던 것이 아쉬움. state의 변화를 통한 리렌더링으로 해결을 하는 시도를 했으나 실패..
