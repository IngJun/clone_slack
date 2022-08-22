import useInput from "../../shared/hooks/useInput";
import {
  ChannelCreatorWrapper,
  ButtonBox,
  ChannelInput,
  ChannelInputBox,
  SubmitButton,
  Text,
  TextBox,
} from "./style";

const ChannelCreator = ({ closeModal }) => {
  const [channelName, channelNameHandler, setChannelName] = useInput();
  const [description, descriptionHandler, setDescription] = useInput();

  const submitForm = {
    channelName: channelName,
    description: description,
  };
  const onSubmit = async () => {
    if (channelName === "" || description === "") {
      alert("빈칸없이 작성해주세요");
      return;
    } else {
      console.log(submitForm);
      setChannelName("");
      setDescription("");
      closeModal();
      // API [POST] api/channel
    }
  };

  return (
    <ChannelCreatorWrapper>
      <TextBox>
        <Text fontSize={"24px"} fontWeight={"700"}>
          새 채널을 생성하세요
        </Text>
      </TextBox>
      <ChannelInputBox>
        <Text>채널 이름</Text>
        <ChannelInput
          type="text"
          value={channelName}
          onChange={channelNameHandler}
          placeholder={"채널이름"}
        />
        <Text>채널 설명</Text>
        <ChannelInput
          type="text"
          value={description}
          onChange={descriptionHandler}
          placeholder={"간단한 채널 소개"}
        />
      </ChannelInputBox>
      <ButtonBox>
        <SubmitButton onClick={onSubmit}>생성</SubmitButton>
      </ButtonBox>
    </ChannelCreatorWrapper>
  );
};

export default ChannelCreator;
