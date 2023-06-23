import React from "react";
import styled from "styled-components";
import {AiOutlineMenu} from "react-icons/ai"
import {BiVideoPlus} from "react-icons/bi"
import {IoMdNotificationsOutline} from "react-icons/io"
import {FaMicrophone} from "react-icons/fa"
import {GoSearch} from "react-icons/go"
import img from "../../assets/Group 51.png"

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <LogoHolder>
            <MenuHolder>
            <Icon />
            </MenuHolder>
            <Logo src={img}/>
          </LogoHolder>
          <SearchHolder>
           <Wrap>
           <Input placeholder="Search"/>
            <Icon1 />
           </Wrap>
            <Icon2 />
          </SearchHolder>
          <IconsHolder>
            <Icon3 />
            <Icon4 />
            <Name>A</Name>
          </IconsHolder>
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const Name = styled.div`
width: 35px;
height: 35px;
border-radius: 50%;
background-color: #465a65;
display: flex;
color: white;
justify-content: center;
align-items: center;
`;
const Icon4 = styled(IoMdNotificationsOutline)`
font-size: 20px;
`;
const Icon3 = styled(BiVideoPlus)`
font-size: 20px;

`;
const IconsHolder = styled.div`
display: flex;
width: 130px;
justify-content: space-between;
align-items: center;
/* background-color: blue; */
`;
const Icon2 = styled(FaMicrophone)`
font-size: 20px;

`;
const Icon1 = styled(GoSearch)`
font-size: 20px;
padding: 0 10px;
`;
const Input = styled.input`
width: 90%;
height: 95%;
border-radius: 30px 0px 0px 30px;
/* outline: 1px  solid lightgray; */
border: 1px solid lightgray;

padding-left: 10px;


::placeholder{
  font-size: 15px;
  padding-left: 0px;
}

:focus{
  outline: 1px solid #37b1dc;
}
`;
const Wrap = styled.div`
width: 650px;
height: 45px;
border-radius:30px;
display: flex;
align-items: center;
/* border: 1px solid lightgray; */
background-color: #e2e0e0;


`;
const SearchHolder = styled.div`
width: 700px;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`;
const Logo = styled.img`
width: 150px;
/* height: 100px; */
`;
const MenuHolder = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
/* background-color: gray; */
display: flex;
justify-content: center;
align-items: center;
margin-right: 20px;

`;
const Icon = styled(AiOutlineMenu)`
font-size: 30px;


`;
const LogoHolder = styled.div`
display: flex;
`;
const Main = styled.div`
width: 95%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
/* background-color: blanchedalmond; */
`;
const Container = styled.div`
width: 100%;
height: 70px;
display: flex;
align-items: center;
justify-content: center;
background-color: wheat;
`;

