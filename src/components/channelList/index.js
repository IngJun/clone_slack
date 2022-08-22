import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";

import ChannelCreator from "../ChannelCreator";
import Modal from "../common/modal";
import { ChannelIcon, ChannelListWrapper, PlusIcon } from "./style";
import { ChatAPI } from "../../shared/api";
import { useNavigate, useParams } from "react-router";

const channels = [
  {
    channel_id: 1,
    channelName: "항해",
    owner: true,
    description: "ff",
  },
  {
    channel_id: 2,
    channelName: "내 채널",
    owner: false,
    description: "ff",
  },
  {
    channel_id: 3,
    channelName: "My Channel",
    owner: false,
    description: "ff",
  },
];

const ChannelList = () => {
  const [modalToggel, setModlaToggle] = useState(false);
  const params = useParams().channel_id;

  // const [channels, setChannels] = useState([]);

  const closeModal = () => {
    setModlaToggle(false);
  };

  const navigate = useNavigate();

  // [GFT] api/channel/list 채널목록 조회
  useEffect(() => {
    // console.log("채널 정보 불러오기", params);
    ChatAPI.getChatRoom()
      .then((res) => {
        console.log(res);
        // channels를 state로
      })
      .catch((error) => {
        console.log("채널리스트 조회 실패", error);
      });
  }, []);
  return (
    <ChannelListWrapper>
      {channels.map((channel) => (
        <div
          key={channel.channel_id}
          onClick={() => {
            navigate(`/channel/${channel.channel_id}`);
          }}
        >
          <ChannelIcon>{channel.channelName[0]}</ChannelIcon>
        </div>
      ))}
      <PlusIcon
        onClick={() => {
          setModlaToggle(true);
        }}
      >
        <FiPlus></FiPlus>
      </PlusIcon>

      <Modal visible={modalToggel} closeModal={closeModal}>
        <ChannelCreator
          visible={modalToggel}
          closeModal={closeModal}
        ></ChannelCreator>
      </Modal>
    </ChannelListWrapper>
  );
};

export default ChannelList;
