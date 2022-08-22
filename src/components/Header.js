import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

const Header = (props) => {
  const navigate=useNavigate();
  const is_register=props.is_register;
  // console.log(props.navigate);
  return (
    <React.Fragment>
        <Header1>
          <div style={{flex:1, height:"50px", alignItems:'center', backgroundColor:'white'}}></div>
          <div style={{flex:2, display:"flex" ,alignItems:'center',justifyContent: "center", backgroundColor:'whtie'}}>
          <img style ={{alignItems:"center"}} src="https://a.slack-edge.com/bv1-9/slack_logo-ebd02d1.svg" height="34"/>
          </div>
          
          <div style={{flex:1, display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
          {is_register?(""):(<div style={{textAlign:'right', fontSize:'16px',    color: (97,96,97), paddingRight:"40px"}}>
              아직 계정이 없으시다면
              <br/>
              <CreateId style={{ color:"purple", fontWeight:"bold"}} onClick={()=>{
                console.log('navigate push to signuppage');
                navigate('/SignupPage');
              }}>계정 생성</CreateId>
            </div>)}
            
          </div>
        </Header1>
    </React.Fragment>
  );
};

Header.defaultProps = {};

const Header1=styled.div`
    padding: 48px 0 40px;
    width: 100%;
    display: flex;
    flex:1
    align-items: center;
    // grid-template-columns: repeat(3,1fr);
    // grid-template-rows(minmax(127px,127px));
    background-color:white;
`;
const CreateId=styled.a`
&:hover {
  cursor:pointer;
`;

export default Header;