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
  // [GFT] api/channel/list
  return (
    <ChannelListWrapper>
      {channels.map((channel) => (
        <ChannelIcon key={channel.channel_id}>
          {channel.channelName[0]}
        </ChannelIcon>
      ))}
      <PlusIcon
        onClick={() => {
          // [POST] api/channel
        }}
      >
        +
      </PlusIcon>
    </ChannelListWrapper>
  );
};

export default ChannelList;
