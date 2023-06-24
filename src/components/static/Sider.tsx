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

const Sider = () => {
  return (
    <div>
      <Container>
        <Main>
          <Phase1>
            <NavHolder>
              <Icon />
              Home
            </NavHolder>
            <NavHolder>
              <Icon1 />
              Shorts
            </NavHolder>
            <NavHolder>
              <Icon2 />
              Subscriptions
            </NavHolder>
          </Phase1>
        </Main>
      </Container>
    </div>
  );
};

export default Sider;

const Icon2 = styled(MdOutlineSubscriptions)`
  margin-bottom: 10px;
  margin-right: 15px;
  font-size: 25px;
`;
const Icon1 = styled(RxVideo)`
  margin-right: 25px;
  margin-bottom: 10px;
  font-size: 25px;
`;
const Icon = styled(AiFillHome)`
  margin-right: 15px;
  margin-bottom: 10px;
  font-size: 25px;
`;
const NavHolder = styled.div`
  display: flex;
min-width: 150px;
background-color: blue;
/* justify-content: center; */
align-items: center;
  /* justify-content: space-between; */
`;

const Phase1 = styled.div`
  width: 80%;
  height: 150px;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
`;

const Main = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  height: 95%;
  /* justify-content: center; */
  background-color: red;
`;
const Container = styled.div`
  position: fixed;
  height: calc(100vh - 70px);
  background-color: silver;
  width: 200px;
  display: flex;
  justify-content: center;
`;
