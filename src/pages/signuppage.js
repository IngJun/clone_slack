import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Button from "@material-ui/core/Button";
import { apis } from "../shared/api";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import { idCheck } from "../shared/common";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/User";
import { useNavigate } from "react-router";

// import { ButtonProps } from '@mui/material/Button';
const SignupPage = (props) => {
  const dispatch = useDispatch();
  const [id, setId] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwdcheck, setPwdcheck] = React.useState("");
  const [idcheck, setIdcheck] = React.useState("true");
  const [nicknamecheck, setNicknamecheck] = React.useState("true");
  const [warning, setWarning] = React.useState(false);
  const [oknickname, setokNickname] = React.useState(false);
  const [okid, setOkid] = React.useState(false);
  const navigate = useNavigate();

  console.log(okid, oknickname);

  const signup = () => {
    if ((id === "") | (nickname === "") | (pwd === "") | (pwdcheck === "")) {
      window.alert("아이디, 비밀번호, 닉네임을 모두 입력해주세요!");
      return;
    }

    if (!idCheck(id)) {
      console.log(warning);
      window.alert("아이디 형식이 맞지 않습니다!");
      return;
    }

    dispatch(userActions.signupFB(id, nickname, pwd, pwdcheck));
    navigate("/");
  };
  const EmailCheck = () => {
    console.log("email check");
    apis
      .idcheck(id)
      .then((res) => {
        if (res.data) {
          window.alert("사용가능한 아이디 입니다.");
          setOkid(true);
        } else {
          window.alert("중복된 아이디입니다.");
          setOkid(false);
        }
      })
      .catch((error) => {
        console.log("중복된 아이디입니다.");
        console.log(error);
      });
  };
  const NicknameCheck = () => {
    console.log("nickname check");
    apis
      .nicknamecheck(nickname)
      .then((res) => {
        if (res.data) {
          window.alert("사용가능한 닉네임 입니다.");
          setokNickname(true);
        } else {
          window.alert("중복된 닉네임입니다.");
          setokNickname(false);
        }
      })
      .catch((error) => {
        window.alert("중복된 닉네임입니다.");
      });
  };

  return (
    <Page>
      <Header is_register />
      <Main>
        <h1 style={{ fontSize: "48px", margin: "15px 0px 0px 0px" }}>
          회원가입{" "}
        </h1>
        <Subheader>
          {/* <strong>직장에서 사용</strong>로 로그인하는 걸 추천드려요. */}
        </Subheader>
        <Registerbox>
          <Checkbox>
            <TextField
              label="Email"
              style={inputstyles}
              // ForwardRef={id}
              onChange={(e) => {
                setId(e.target.value);
              }}
            ></TextField>
            <Button
              size="small"
              variant="contained"
              style={{
                maxwidth: "100px",
                flex: 1,
                justifyContent: "center",
                margin: "20px 10px 10px 10px",
                fontSize: "8px",
              }}
              onClick={EmailCheck}
            >
              중복 확인
            </Button>
          </Checkbox>

          <Checkbox>
            <TextField
              label="Nickname"
              style={inputstyles}
              onChange={(e) => {
                setNickname(e.target.value);
              }}
            ></TextField>
            <Button
              size="small"
              variant="contained"
              style={{
                maxwidth: "100px",
                flex: 1,
                justifyContent: "center",
                margin: "20px 10px 10px 10px",
                fontSize: "8px",
              }}
              onClick={NicknameCheck}
            >
              중복 확인
            </Button>
          </Checkbox>
          <div>
            <TextField
              label="Password"
              style={inputstyles}
              onChange={(e) => {
                setPwd(e.target.value);
              }}
              type="password"
            ></TextField>

            <TextField
              label="Password Check"
              style={inputstyles}
              onChange={(e) => {
                setPwdcheck(e.target.value);
                if (pwd === e.target.value) {
                  setWarning(false);
                } else {
                  setWarning(true);
                }
              }}
              type="password"
            ></TextField>
            {warning ? (
              <Alert
                style={{
                  border: "1px solid rgba(224,30,94,.4)",
                  backgroundColor: "rgba(224,30,90,.1)",
                  fontWeight: "bold",
                  margin: "0px 0px 24px 0px",
                }}
                severity="warning"
              >
                비밀번호가 일치하지 않습니다.
              </Alert>
            ) : (
              ""
            )}
          </div>
          {okid === true && oknickname === true ? (
            <Button
              variant="contained"
              style={{
                height: "44px",
                fontWeight: "bold",
                width: "100%",
                margin: "24px 0px 0px 0px",
                fontSize: "18px",
                color: "white",
                backgroundColor: "#4a154b",
              }}
              onClick={() => {
                {
                  signup();
                  console.log("회원가입");
                }
              }}
            >
              회원가입
            </Button>
          ) : (
            <Button
              disabled
              variant="contained"
              style={{
                height: "44px",
                fontWeight: "bold",
                width: "100%",
                margin: "24px 0px 0px 0px",
                fontSize: "18px",
                color: "grey",
                backgroundColor: "rgb(74, 21, 75,.5)",
              }}
            >
              회원가입
            </Button>
          )}

          {/* <Button
            variant="contained"
            style={{
              height: "44px",
              fontWeight: "bold",
              width: "100%",
              margin: "24px 0px 0px 0px",
              fontSize: "18px",
              color: "white",
              backgroundColor: "#4a154b",
            }}
            onClick={() => {
              {
                signup();
                console.log("회원가입");
              }
            }}
          >
            회원가입
          </Button> */}
        </Registerbox>
      </Main>
    </Page>
  );
};

const styles = {
  width: "100%",
  padding: "10px",
  fontSize: "18px",
  fontweight: "900",
  height: "44px",
  minWidth: "96px",
  border: "2px solid",
  margin: "15px 0px 0px 0px",
};
const inputstyles = {
  width: "100%",
  padding: "",
  // height:"44px",
  minWidth: "96px",
  margin: "15px 0px 0px 0px",
};
const warninginput = {
  width: "100%",
  padding: "",
  // height:"44px",
  minWidth: "96px",
  margin: "15px 0px 0px 0px",
  border: "1px solid rgba(224,30,94,.4)",
  borderRadius: "4px",
};

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  min-height: 100%;
  color: green;
`;
const Main = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
  align-items: center;
  max-width: 800px;
`;

const Subheader = styled.div`
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 32px;
  color: #454245;
  max-width: 700px;
  text-align: center;
`;
const Registerbox = styled.div`
  width: 400px;
  background-color: white;
`;

const Checkbox = styled.div`
  display: flex;
`;

export default SignupPage;
