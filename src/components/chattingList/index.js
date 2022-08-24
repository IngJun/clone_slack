import useInput from "../../shared/hooks/useInput";
import { FiSend } from "react-icons/fi";
import { MessageWrapper } from "../message/style";
import {
  ChattingInputWrapper,
  ChattingListWrapper,
  InputBox,
  MessageListWrapper,
  SubmitButton,
} from "./style";
import { useEffect, useState } from "react";
// import { connect } from "../../socket/clients";
import { useParams } from "react-router";
import StompJS from "stompjs";
import SockJS from "sockjs-client";

const ChattingList = () => {
  // console.log("랜더링 됨");
  const [message, messageHandler, setMessage] = useInput();
  const [messageList, setMessageList] = useState([]);
  const params = useParams().channel_id;
  const headers = {
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  };
  // console.log("headers", sessionStorage.getItem("token"));
  // 엔드포인트
  let sock = new SockJS(`http://15.165.158.16/socket`);
  let client = StompJS.over(sock);

  useEffect(() => {
    // console.log("params 바뀜", messageList);
    if (params !== undefined) {
      connect();
      return () => {
        client.disconnect();
      };
    }
    return client.disconnect();
  }, [params]);

  const connect = () => {
    client.connect(headers, onConnected, onError);
    console.log("채팅방 연결");
  };

  // console.log("채팅 데이터 리스트", messageList);

  const onConnected = () => {
    console.log("연결됨");
    client.subscribe(
      `/sub/message/${params}`,
      (message) => {
        // console.log("연결 성공?!", message);
        if (message.body) {
          const new_Data = JSON.parse(message.body);
          console.log("new_Data", new_Data.message);
          // messageList.push(new_Data);
          setMessageList([...messageList, new_Data]);
        } else {
          alert("메세지가 없습니다.");
        }
      }
      // headers
    );
  };

  const onError = (err) => {
    console.log(err);
  };

  const sendMessage = () => {
    client.send(
      `/pub/message/${params}`,
      headers,
      JSON.stringify({
        // channel_Id: parseInt(params),
        message: message,
      })
    );
    setMessage("");
  };
  return (
    <ChattingListWrapper>
      <MessageListWrapper>
        {messageList.map((message) => (
          <MessageWrapper>{message.message}</MessageWrapper>
        ))}
      </MessageListWrapper>

      <ChattingInputWrapper>
        <InputBox
          placeholder="메세지를 입력하세요"
          type={"text"}
          value={message}
          onChange={messageHandler}
        />
        <SubmitButton onClick={sendMessage}>
          <FiSend size="20" />
        </SubmitButton>
      </ChattingInputWrapper>
    </ChattingListWrapper>
  );
};

export default ChattingList;
