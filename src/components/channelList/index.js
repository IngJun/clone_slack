import { useState } from "react";
import { FiPlus } from "react-icons/fi";

import ChannelCreator from "../ChannelCreator";
import Modal from "../common/modal";
import { ChannelIcon, ChannelListWrapper, PlusIcon } from "./style";

const channels = [
  {
    channel_id: 1,
    channelName: "항해",
    isPrivate: true,
    isOwner: "name",
    description: "ff",
  },
  {
    channel_id: 2,
    channelName: "내 채널",
    isPrivate: true,
    isOwner: "name",
    description: "ff",
  },
  {
    channel_id: 3,
    channelName: "My Channel",
    isPrivate: true,
    isOwner: "name",
    description: "ff",
  },
];

const ChannelList = () => {
  const [modalToggel, setModlaToggle] = useState(false);
  const closeModal = () => {
    setModlaToggle(false);
  };

  // [GFT] api/channel/list 채널목록 조회
  return (
    <ChannelListWrapper>
      {channels.map((channel) => (
        <ChannelIcon key={channel.channel_id}>
          {channel.channelName[0]}
        </ChannelIcon>
      ))}
      <PlusIcon
        onClick={() => {
          setModlaToggle(true);
        }}
      >
        <FiPlus></FiPlus>
      </PlusIcon>

      <Modal visible={modalToggel} closeModal={closeModal}>
        {/* 여기에 원하는 태그 넣어서 사용 */}
        <ChannelCreator closeModal={closeModal}></ChannelCreator>
      </Modal>
    </ChannelListWrapper>
  );
};

export default ChannelList;
