import styled from "styled-components";
import ChannelList from "../components/channelList";
import ChattingList from "../components/chattingList";
import UserList from "../components/userList";

const Channelhome = () => {
  return (
    <MainPageWrapper>
      <Header></Header>
      <BodyWrapper>
        <MenuWrapper>
          <ChannelList />
          <UserList />
        </MenuWrapper>
        <ChattingWrapper>
          <ChattingList></ChattingList>
        </ChattingWrapper>
      </BodyWrapper>
    </MainPageWrapper>
  );
};

export default Channelhome;

// 필요 레이아웃
// Header
// MenuWrapper
// UserList
// ChattingWrapper
// InputBox

const MainPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  width: 100%;
  height: 50px;
  border-bottom: 0.1px solid grey;

  background-color: ${(props) => props.theme.palette.deep_purple};
`;
const BodyWrapper = styled.div`
  height: 100%;
  display: flex;
`;
const MenuWrapper = styled.div`
  width: 20%;
  height: 100%;
  border-right: 0.1px solid grey;
  display: flex;
  background-color: ${(props) => props.theme.palette.purple};
`;
const ChattingWrapper = styled.div`
  width: 80%;
  height: 100%;
  background-color: white;
`;
