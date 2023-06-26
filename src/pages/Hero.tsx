import React, { useState } from "react";
import styled from "styled-components";
import Youtube from "./YoutubeCard";

const Hero = () => {

const[show, setShow]= useState([
  {text: "All"},
  {text: "Music"},
  {text: "Chelsea F.C"},
  {text: "Brazil national football team"},
  {text: "Highlight films"},
  {text: "Afrobeat"},
  {text: "African Music"},
  {text: "Burna Boy"},
  {text: "Trailers"},
  {text: "Jenifa"},
])

  return (
       <Wrap>
    <Container>
<SubHead>
{
  show.map((props)=>(
    <Category>
{props.text}
       </Category>
  ))
}
</SubHead>
      <Main> 
        <Youtube/>
        <Youtube/>
        <Youtube/>
        <Youtube/>
        <Youtube/>
        <Youtube/>
      </Main>
    </Container>
       </Wrap>
  );
};

export default Hero;


const Category= styled.div`
padding: 10px 15px;
border-radius: 5px;
background-color: #f2f2f2;

`
const Wrap= styled.div`
display: flex;
justify-content: flex-end;
`
const SubHead= styled.div`
width: 100%;
height: 60px;
/* background-color: red; */
display: flex;
justify-content: space-between;
align-items: center;
`
const Main= styled.div`
width: 100%;
height: 100%;
flex-wrap: wrap;
/* background-color: red; */
display: flex;
/* flex-direction: column; */
justify-content: center;
/* align-items: center; */
`
const Container= styled.div`
height: 90vh;
width: calc(100% - 200px);
background-color: white;
position: fixed;
`