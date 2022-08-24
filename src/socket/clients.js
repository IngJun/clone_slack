import SockJS from "sockjs-client";
import StompJs from "@stomp/stompjs";

export const client = new StompJs.Client({
  //   webSocketFactory: () => new SockJS("주소"), // proxy를 통한 접속
  brokerURL: "주소", // 웹소켓 서버로 직접 접속
  connectHeaders: {
    "auth-token": "spring-chat-auth-token",
  },
  debug: function (str) {
    console.log(str);
  },
  reconnectDelay: 5000,
  heartbeatIncoming: 4000,
  heartbeatOutgoing: 4000,
  onConnect: () => {
    subscribe();
  },
  onStompError: (frame) => {
    console.error(frame);
  },
});

// client.activate();

// client.deactivate();

// 메세지 보내기
client.publish({ destination: "해당주소", body: "보낼 내용" });

// 메세지 수신
const subscription = client.subscribe("/queue/test", callback);

// export const connect = () => {
//   const client = new StompJs.Client({
//     // brokerURL: "ws://localhost:8080/ws-stomp/websocket", // 웹소켓 서버로 직접 접속
//     webSocketFactory: () => new SockJS("/ws-stomp"), // proxy를 통한 접속
//     connectHeaders: {
//       "auth-token": "spring-chat-auth-token",
//     },
//     debug: function (str) {
//       console.log(str);
//     },
//     reconnectDelay: 5000,
//     heartbeatIncoming: 4000,
//     heartbeatOutgoing: 4000,
//     onConnect: () => {
//       subscribe();
//     },
//     onStompError: (frame) => {
//       console.error(frame);
//     },
//   });

//   client.activate();
// };

// export const disconnect = () => {
//   client.current.deactivate();
// };

// export const subscribe = () => {
//   client.current.subscribe(`URL`, ({ body }) => {
//     setChatMessages((_chatMessages) => [..._chatMessages, JSON.parse(body)]);
//   });
// };
