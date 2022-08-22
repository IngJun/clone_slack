import { useEffect } from "react";
import useInput from "../../shared/hooks/useInput";
import { ChatAPI } from "../../shared/api";

import {
  UserCreatorWrapper,
  ButtonBox,
  ChannelInput,
  ChannelInputBox,
  SubmitButton,
  Text,
  TextBox,
} from "./style";

const UserCreator = ({ visible, closeModal }) => {
  const [username, usernameHandler, setUsername] = useInput();

  const submitForm = {
    channel_id: 1, // Router연결 후 Params로 수정
    username: username,
  };
  const onSubmit = async () => {
    if (username === "") {
      alert("빈칸없이 작성해주세요");
      return;
    } else {
      console.log(submitForm);
      setUsername("");
      closeModal();
      // [POST] api/channel/invite
      ChatAPI.inviteUser(submitForm)
        .then((res) => {
          console.log("유저 추가", res);
          // props로 state 관리
        })
        .catch((error) => {
          console.log("유저추가 실패", error);
        });
    }
  };
  useEffect(() => {
    // 모달 닫으면 값 초기화
    setUsername("");
  }, [visible]);

  return (
    <UserCreatorWrapper>
      <TextBox>
        <Text fontSize={"24px"} fontWeight={"700"}>
          새로운 인원을 추가하세요
        </Text>
      </TextBox>
      <ChannelInputBox>
        <Text>추가할 이메일</Text>
        <ChannelInput
          type="text"
          value={username}
          onChange={usernameHandler}
          placeholder={"초대할 유저 이메일"}
        />
      </ChannelInputBox>
      <ButtonBox>
        <SubmitButton onClick={onSubmit}>추가</SubmitButton>
      </ButtonBox>
    </UserCreatorWrapper>
  );
};

export default UserCreator;
