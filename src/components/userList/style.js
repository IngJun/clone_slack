import styled from "styled-components";

export const UserListWrapper = styled.section`
  width: 100%;
  height: 100%;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const ChannelInfo = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 0.1px solid grey;
  color: white;
  font-size: 24px;
  font-weight: 600;
`;
export const UserContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 10px;
  /* background-color: red; */
  display: flex;
  align-items: center;
  font-size: 20px;
  color: white;
`;

export const UserProfileImageBox = styled.div`
  width: 40px;
  height: 40px;
  object-fit: scale-down;
  border-radius: 10px;
  margin-right: 20px;
  background-color: white;
  cursor: pointer;
`;
export const UserProfileImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: scale-down;
`;
