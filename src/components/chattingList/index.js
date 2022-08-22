import { MessageWrapper } from "../message/style";
import { ChattingListWrapper } from "./style";

const ChattingList = () => {
  // 채팅 내욜 보여주기
  return (
    <ChattingListWrapper>
      <MessageWrapper>하이1</MessageWrapper>
      <MessageWrapper>하이2</MessageWrapper>
    </ChattingListWrapper>
  );
};

export default ChattingList;
