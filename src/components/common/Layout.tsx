import React from "react";
import Header from "../static/Header";
import { Outlet } from "react-router-dom";
import Sider from "../static/Sider";
import styled from "styled-components";

const Layout = () => {
  return (
    <Container>
     
        <Header />
        <Main>
        <Sider />
      </Main>
      <Outlet />
    </Container>
  );
};

export default Layout;

const Main = styled.div``;
const Container = styled.div``;
