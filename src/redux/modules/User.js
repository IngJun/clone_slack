import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { setCookie, deleteCookie } from "../../shared/Cookie";
// import { auth } from '../../shared/firebase';
//
import { Navigate } from "react-router-dom";
import { apis } from "../../shared/api";
import jwtDecode from "jwt-decode";

// actions
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const GET_ALL_USER = "GET_ALL_USER";

// action creators
const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const getAllUser = createAction(GET_ALL_USER, (user_list) => ({ user_list }));

// initialState
const initialState = {
  username: "",
  nickname: "",
  user_profile: "",
  is_loaded: false,
  is_login: false,
};

// middleware actions

const loginFB = (id, pwd) => {
  return function (dispatch) {
    console.log("LogInDB :", id, "/", pwd);

    apis
      .login(id, pwd)
      .then((response) => {
        console.log("LogInDB : response", response);

        const token = response.data.accessToken;
        const decode = jwtDecode(token);

        sessionStorage.setItem("token", token);

        const user_data = {
          username: decode.USER_NAME,
          nickname: decode.NICKNAME,
          id: decode.USER_ID,
        };
        dispatch(setUser(user_data));
        // <Navigate to="/channel" />;
      })
      .catch((error) => {
        alert("아이디와 비밀번호를 다시 확인해주세요.");
      });
  };
};

const signupFB = (id, usernickname, pwd, pwcheck) => {
  return function (dispatch) {
    console.log(
      "username : " + id,
      "password : " + pwd,
      "전송, sessionID 요청"
    );

    apis
      .signup(id, usernickname, pwd, pwcheck)
      .then((response) => {
        <Navigate to="/" />;
        window.alert("환영합니다!\n회원가입이 완료되셨습니다");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

const loginCheckFB = () => {
  return function (dispatch) {
    apis
      .islogin()
      .then((response) => {
        console.log("loginCheckDB", response);
        if (response.data) {
          dispatch(setUser());
        } else {
          console.log("유저데이터 없음");
          dispatch.logOut();
        }
      })
      .catch((error) => {
        console.log("토큰 전달 오류", error);
      });
  };
};

const logoutFB = () => {
  return function (dispatch, getState, { history }) {
    dispatch(logOut());
    history.replace("/");
  };
};

const getAllUserDB = () => {
  return function (dispatch, getState, { history }) {
    apis
      .getAllUser()
      .then((response) => {
        // console.log("getAllUserDB : response", response.data)
        dispatch(getAllUser(response.data));
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

// reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        console.log("SET_USER : user", action.payload.user);
        draft.user = action.payload.user;
        draft.is_login = true;
        draft.is_loaded = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        sessionStorage.removeItem("token");
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
        draft.is_loaded = true;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
    [GET_ALL_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user_list = action.payload.user_list;
      }),
  },
  initialState
);

// action creator export
const actionCreators = {
  setUser,
  logOut,
  getUser,
  loginFB,
  signupFB,
  loginCheckFB,
  logoutFB,
  getAllUserDB,
};

export { actionCreators };
