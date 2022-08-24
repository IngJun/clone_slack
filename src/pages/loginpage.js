import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Button from "@material-ui/core/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import { idCheck } from "../shared/common";
import { HiOutlineSparkles } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/User";
import { useNavigate } from "react-router";

const LoginPage = (props) => {
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [warning, setWarning] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = async () => {
    if (!idCheck(id)) {
      setWarning(true);
      console.log(warning);
      window.alert("아이디 형식이 맞지 않습니다!");
      return;
    }
    if (id === "" || pwd === "") {
      window.alert("아이디와 비밀번호를 모두 입력해주세요!");
      return;
    }
    await dispatch(userActions.loginFB(id, pwd));
    navigate("/channel");
  };

  return (
    <Page>
      <Header />
      <Main>
        <Signin>
          <div>
            {warning ? (
              <TextField
                style={warninginput}
                onChange={(e) => {
                  setId(e.target.value);
                  console.log(e.target.value);
                }}
              ></TextField>
            ) : (
              <TextField
                label="Email"
                style={inputstyles}
                onChange={(e) => {
                  setId(e.target.value);
                }}
              ></TextField>
            )}
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
                죄송합니다. 이메일이 유효하지 않습니다.
              </Alert>
            ) : (
              ""
            )}
            <TextField
              label="Password"
              style={inputstyles}
              onChange={(e) => {
                setPwd(e.target.value);
              }}
              type="password"
            ></TextField>
          </div>
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
            onClick={login}
          >
            로그인
          </Button>
        </Signin>
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
  minWidth: "96px",
  margin: "15px 0px 15px 0px",
};
const warninginput = {
  width: "100%",
  padding: "",
  minWidth: "96px",
  margin: "0px 0px 0px 0px",
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
const Signin = styled.div`
  width: 400px;
  background-color: white;
`;

// const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
//     color: theme.palette.getContrastText(""),
//     backgroundColor: "",
//     '&:hover': {
//       backgroundColor: "",
//     },
//   }));

export default LoginPage;
