import {
  ChannelInfo,
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
  return (
    <UserListWrapper>
      <ChannelInfo>채널 이름</ChannelInfo>
      {userData.map((user) => (
        <UserContainer>
          <UserProfileImageBox>
            <UserProfileImage src="images/profile.png" />
          </UserProfileImageBox>
          {user.username}
        </UserContainer>
      ))}
    </UserListWrapper>
  );
};

export default UserList;
