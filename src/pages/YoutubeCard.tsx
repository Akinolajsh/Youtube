import { BsThreeDotsVertical } from "react-icons/bs";
import styled from "styled-components";
import { getAllEntries } from "../utils/APIs";
import { useEffect, useState } from "react";

const Youtube = () => {
  const [viewData, setViewData] = useState<{}[]>([]);

  useEffect(()=>{
    getAllEntries().then((res:any)=>{
        setViewData(res)
    })
  }, [])

  return (
    <div>
      {/* <Container>
        <Main> */}
          <Card>
            <Top>
              <Video
                src="https://player.vimeo.com/external/334344435.sd.mp4?s=d367341a941ffa97781ade70e4f4a28f4a1a5fc8&profile_id=164&oauth2_token_id=57447761"
                loop
                muted
                autoPlay
              />
              <Image src="https://media.istockphoto.com/id/1075599562/photo/programmer-working-with-program-code.jpg?b=1&s=612x612&w=0&k=20&c=-wTGItN4uscm4sy8X07O4YXhyl2xOBnc9DfzMyUKxJ0=" />
            </Top>

            <Bottom>
              <Avatar src="https://yt3.ggpht.com/P6SjTt-BXjTWeUcpBX-dDUcLhpCboucwr6PN0cpvR3Z7BNq7V0-CmUbVPjGbWyB33ZaO9APa=s88-c-k-c0x00ffffff-no-rj" />
              <Div>
                <Title>WEDDING DATE - TAAOOMA & TWYSE</Title>
                <Name>TAAOOMA TV</Name>
                <Views>
                  <View>274K views</View>
                  <Dot />
                  <View>1 month ago</View>
                </Views>
              </Div>
              <Icon />
            </Bottom>
          </Card>
        {/* </Main>
      </Container> */}
    </div>
  );
};

export default Youtube;

const Icon = styled(BsThreeDotsVertical)`
  font-size: 20px;
`;

const Dot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: currentColor;
  margin: 0 5px;
  font-size: 10px;
`;
const View = styled.div``;

const Views = styled.div`
  text-transform: capitalize;
  color: lightgray;
  display: flex;
  align-items: center;
`;

const Name = styled.div`
  text-transform: capitalize;
  color: gray;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 18px;
  text-transform: capitalize;
`;

const Div = styled.div`
  flex: 1;
  margin: 0 5px;
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Video = styled.video`
  width: 100%;
  height: 350px;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: 10;
  opacity: 0;
  transition: all 350ms;
`;

const Image = styled.img`
  width: 100%;
  height: 350px;
  border-radius: 10px;

  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  transition: all 350ms;
  :hover {
    opacity: 0;
  }
`;

const Top = styled.div`
  width: 100%;
  height: 195px;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
`;

const Card = styled.div`
  width: 350px;
  height: 150px;
  transition: all 350ms;
  border-radius: 10px;
  margin: 10px;
  /* background-color: red; */
  :hover ${Video} {
    opacity: 1;
    width: 100%;
    height: 350px;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: 10;
  }

  :hover {
    cursor: pointer;
  }
`;

// const Main = styled.div`
//   display: flex;
//   width: 100%;
//   justify-content: center;
//   flex-wrap: wrap;
// `;

// const Container = styled.div`
//   display: flex;
//   width: 100%;
//   justify-content: center;
//   padding-bottom: 30px;
//   color: black;
// `;
