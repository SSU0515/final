import React from "react";
import { motion } from "framer-motion";
import "../../assets/font/Font.css";
import styled from "styled-components";
import reactimg from "../../assets/img/react.png";
import thunk from "../../assets/img/thunk.png";
import reduximg from "../../assets/img/redux.png";
import recoilimg from "../../assets/img/recoil.png";
import routerimg from "../../assets/img/router.png";
import queryimg from "../../assets/img/requery.png";

const Container = styled(motion.div)`
  width: 360px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 500px;
  right: 0;
`;

const Title = styled.h1`
  width: 100%;
  font-family: "nexonB";
  font-size: 24px;
  line-height: 1rem;
  letter-spacing: 0;
  margin-bottom: 30px;
  color: #fccc44;
`;
const Explan = styled.span`
  width: 100%;
  font-family: "nexon";
  font-weight: 300;
  font-size: 18px;
  line-height: 1.6rem;
  letter-spacing: 0;
  color: #fff;
  margin-bottom: 30px;
`;
const SkillBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 45px;
`;
const ImgBox = styled.div`
  display: flex;
  gap: 5px;
  height: 45px;
`;

function Reactskill() {
  return (
    <Container
      initial={{ opacity: 0, x: 100 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { delay: 0.5 },
      }}
    >
      <Title>React</Title>
      <Explan>
        Redux / Redux-thunk / Recoil 등의 <br />
        상태관리 라이브러리 사용경험이 있습니다. <br />
        react-router-dom 등의 react 라이브러리를 <br />
        사용 가능합니다.
      </Explan>
      <SkillBox>
        <ImgBox>
          <img src={reactimg} alt="reactimg" />
          <img src={recoilimg} alt="recoilimg" />
          <img src={reduximg} alt="recoilimg" />
        </ImgBox>
        <ImgBox>
          <img src={thunk} alt="thunkimg" />
          <img src={routerimg} alt="routerimg" />
        </ImgBox>
        <ImgBox>
          <img src={queryimg} alt="queryimg" />
        </ImgBox>
      </SkillBox>
    </Container>
  );
}

export default Reactskill;
