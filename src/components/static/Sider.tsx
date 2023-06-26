import React from "react";
import styled from "styled-components";
import { GoHistory } from "react-icons/go";
import {
  MdOutlineSubscriptions,
  MdVideoLibrary,
  MdOutlineWatchLater,
} from "react-icons/md";
import { RxVideo } from "react-icons/rx";
import { AiOutlineLike, AiFillHome } from "react-icons/ai";
import img from "../../assets/doctorImg.88f336c533e0bee8503b.jpg";
import img2 from "../../assets/hackcare.fb79d84b8a7e97ab8c49.jpg";
import img3 from "../../assets/saveMoney.2aa8081772d395a73a38.jpg";

const Sider = () => {
  return (
    <div>
      <Container>
        <Main>
          <Phase1>
            <Div1>
              <Icon />
              Home
            </Div1>
            <Div1>
              <Icon1 />
              Shorts
            </Div1>
            <Div1>
              <Icon2 />
              Subscription
            </Div1>
          </Phase1>
          <Phase2>
            <Div1>
              <Icon3 />
              Libary
            </Div1>
            <Div1>
              <Icon4 />
              History
            </Div1>
            <Div1>
              <Icon5 />
              Your videos
            </Div1>
            <Div1>
              <Icon6 />
              Watch later
            </Div1>
            <Div1>
              <Icon7 />
              Liked videos
            </Div1>
            <Div1>
              <Icon8 />
              Royal gambler
            </Div1>
          </Phase2>
          <Phase3>
            <SubText>Subscription</SubText>
            <Div1>
              <Img src={img} />
              Venemas2
            </Div1>
            <Div1>
              <Img src={img2} />
              FGD Football
            </Div1>
            <Div1>
              <Img src={img3} />
              ibeanusi salem
            </Div1>
          </Phase3>
        </Main>
      </Container>
    </div>
  );
};

export default Sider;

const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0px 20px;
`;

const Icon8 = styled(MdOutlineSubscriptions)`
  margin: 3px 30px;
`;
const Icon7 = styled(AiOutlineLike)`
  margin: 3px 30px;
`;
const Icon6 = styled(MdOutlineWatchLater)`
  margin: 3px 30px;
`;
const Icon5 = styled(RxVideo)`
  margin: 3px 30px;
`;
const Icon4 = styled(GoHistory)`
  margin: 3px 30px;
`;
const Icon3 = styled(MdVideoLibrary)`
  margin: 3px 30px;
`;
const Icon2 = styled(MdOutlineSubscriptions)`
  margin: 3px 30px;
`;
const Icon1 = styled(RxVideo)`
  margin: 3px 30px;
`;
const Icon = styled(AiFillHome)`
  margin: 3px 30px;
`;

const SubText = styled.div`
  font-size: medium;
  font-weight: 500;
`;

const Phase3 = styled.div`
  display: flex;
  width: 100%;
  height: 250px;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
`;
const Phase1 = styled.div`
  display: flex;
  width: 100%;
  height: 140px;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-bottom: 1px solid #ebebeb;
`;
const Phase2 = styled.div`
  display: flex;
  width: 100%;
  height: 250px;
  margin-top: 10px;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-bottom: 1px solid #ebebeb;
`;

const Div1 = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  font-size: medium;
  font-weight: 500;
  border-radius: 5px;
  align-items: center;

  :hover {
    cursor: pointer;
    background-color: #b3aeae;
    color: black;
  }
`;

const Main = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 95%;
`;
const Container = styled.div`
  position: fixed;
  height: calc(100vh - 70px);
  /* background-color: #f6eeee; */
  width: 200px;
  display: flex;
  justify-content: center;
`;
