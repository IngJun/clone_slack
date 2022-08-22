import {
  ChannelCreatorWrapper,
  ButtonBox,
  ChannelInput,
  ChannelInputBox,
  SubmitButton,
  Text,
  TextBox,
} from "./style";

const ChannelCreator = () => {
  return (
    <ChannelCreatorWrapper>
      <TextBox>
        <Text fontSize={"24px"} fontWeight={"700"}>
          새 채널을 생성하세요
        </Text>
      </TextBox>
      <ChannelInputBox>
        <Text>채널 이름</Text>
        <ChannelInput />
      </ChannelInputBox>
      <ButtonBox>
        <SubmitButton
          onClick={() => {
            // [POST] api/channel
          }}
        >
          생성
        </SubmitButton>
      </ButtonBox>
    </ChannelCreatorWrapper>
  );
};

export default ChannelCreator;
