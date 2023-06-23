import React from "react";
import styled from "styled-components";

const Sider = () => {
  return (
    <div>
      <Container>
        <Main>Sider</Main>
      </Container>
    </div>
  );
};

export default Sider;

const Main = styled.div``;
const Container = styled.div`
position: fixed;
height: 100vh;
background-color: silver;
width: 200px;
`;
