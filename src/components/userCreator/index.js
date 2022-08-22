import {
  UserCreatorWrapper,
  ButtonBox,
  ChannelInput,
  ChannelInputBox,
  SubmitButton,
  Text,
  TextBox,
} from "./style";

const UserCreator = () => {
  return (
    <UserCreatorWrapper>
      <TextBox>
        <Text fontSize={"24px"} fontWeight={"700"}>
          새로운 인원을 추가하세요
        </Text>
      </TextBox>
      <ChannelInputBox>
        <Text>추가할 이메일</Text>
        <ChannelInput />
      </ChannelInputBox>
      <ButtonBox>
        <SubmitButton
          onClick={() => {
            // [POST] api/channel/invite
          }}
        >
          추가
        </SubmitButton>
      </ButtonBox>
    </UserCreatorWrapper>
  );
};

export default UserCreator;
