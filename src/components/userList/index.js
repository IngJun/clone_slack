import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useParams } from "react-router";

import Modal from "../common/modal";
import UserCreator from "../userCreator";
import { ChatAPI } from "../../shared/api";
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
  const params = useParams().channel_id;
  const closeModal = () => {
    setModlaToggle(false);
  };

  // [GET] /api/users/{channel_id}
  useEffect(() => {
    // params 있을때만 유저데이터 가져오기
    if (params) {
      // console.log("유저 정보 불러오기", params);
      ChatAPI.getUserList(params)
        .then((res) => {
          console.log(res);
          // userData를 state로
        })
        .catch((error) => {
          console.log("유저리스트 조회 실패", error);
        });
    }
  }, [params]);

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
        <UserCreator
          visible={modalToggel}
          closeModal={closeModal}
        ></UserCreator>
      </Modal>
    </UserListWrapper>
  );
};

export default UserList;
