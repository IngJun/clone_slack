import { MessageWrapper } from "./style";

const Message = (props) => {
  return (
    <MessageWrapper>
      dd
      <span>{props.children}</span>
    </MessageWrapper>
  );
};

export default Message;
