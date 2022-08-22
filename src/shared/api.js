import axios from 'axios';
axios.defaults.withCredentials = true;

const token = sessionStorage.getItem('token');
const api = axios.create({
  baseURL: 'http://15.165.158.16/',
});

export const apis = {
  //user

  login: (id, pw) => api.post('/auth/login', { username: id, password: pw }),
  signup: (id, nickname, pw, pwcheck) => api.post('/auth/signup', {
    username: id,
    nickname: nickname,
    password: pw,
    passwordCheck: pwcheck
  }),

  idcheck: (email) => api.post('api/user/idCheck', { username: email }),

  nicknamecheck: (nickname) => api.post('api/user/nickNameCheck', { nickName: nickname }),

  islogin: () => api.get('/api/isLogin', {
    headers: {
      "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
    },
  }),

  getAllUser: () => api.get('/api/users', {
    headers: {
      "Authorization": `Bearer ${sessionStorage.getItem('token')}`
    }
  })
}

export const ChatAPI = {

  // 채널 목록 조회
  getChatRoom: () => api.get('/api/channel', {
    headers: {
      "Authorization": `Bearer ${sessionStorage.getItem('token')}`
    }
  }),

  // 채널 추가하기
  addChatRoom: (room) => api.post('/api/channel', room, {
    headers: {
      "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
  }
  }),

  // 채널 삭제하기
  deleteChatRoom: (channel_id) => api.delete(`/api/channel/${channel_id}`, {
    headers: {
      "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
  }
  }),  

  // 채널 접속하기
  enterRoom: (channel_id) => api.get(`/api/channel/${channel_id}`, {
    headers: {
      "Authorization": `Bearer ${sessionStorage.getItem('token')}`
    }
  }),

  // 유저 초대하기
  inviteUser: (channel_id, username) => api.post(`/api/channel/invite`, { username: username, channel_id: channel_id }, {
    headers: {
      "Authorization": `Bearer ${sessionStorage.getItem('token')}`
    }
  }),
  
  // 채팅 메세지 가져오기
  getMessage: (channel_id) => api.get(`/api/channel/${channel_id}/messages`, {
    headers: {
      "Authorization": `Bearer ${sessionStorage.getItem('token')}`
    }
  }),

}