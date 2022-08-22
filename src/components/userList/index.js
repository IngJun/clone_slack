import { useState } from "react";
import { FiPlus } from "react-icons/fi";

import Modal from "../common/modal";
import UserCreator from "../userCreator";
import {
  ChannelInfo,
  PlusIconBox,
  UserContainer,
  UserListWrapper,
  UserProfileImage,
  UserProfileImageBox,
} from "./style";

const userData = [
  {
    username: "유저이름1",
    nickname: "닉네임",
  },
  {
    username: "유저이름2",
    nickname: "닉네임",
  },
  {
    username: "유저이름3",
    nickname: "닉네임",
  },
];

const UserList = () => {
  const [modalToggel, setModlaToggle] = useState(false);

  const closeModal = () => {
    setModlaToggle(false);
  };

  // [GET] /api/users/{channel_id}

  return (
    <UserListWrapper>
      <ChannelInfo>채널이름 넣기</ChannelInfo>
      {userData.map((user) => (
        <UserContainer key={user.username}>
          <UserProfileImageBox>
            <UserProfileImage src="images/profile.png" />
          </UserProfileImageBox>
          {user.username}
        </UserContainer>
      ))}
      <UserContainer>
        <PlusIconBox
          onClick={() => {
            setModlaToggle(true);
          }}
        >
          <FiPlus />
        </PlusIconBox>
        인원 추가
      </UserContainer>
      <Modal visible={modalToggel} closeModal={closeModal}>
        <UserCreator closeModal={closeModal}></UserCreator>
      </Modal>
    </UserListWrapper>
  );
};

export default UserList;
