import React from "react";
import { motion } from "framer-motion";
import "../../assets/font/Font.css";
import styled from "styled-components";
import js from "../../assets/img/js.png";
import ts from "../../assets/img/ts.png";

const Container = styled(motion.div)`
  width: 360px;
  display: flex;
  flex-direction: column;
  text-align: right;
  position: absolute;
  top: 820px;
  left: 0;
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
  margin-left: auto;
  gap: 5px;
  height: 45px;
`;

function Programming() {
  return (
    <Container
      initial={{ opacity: 0, x: -100 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { delay: 0.5 },
      }}
    >
      <Title>Programming</Title>
      <Explan>
        ES6 문법에 익숙합니다. <br />
        Typescript의 사용 이유를 알고, 사용할 수 <br />
        있습니다.
      </Explan>
      <SkillBox>
        <img src={js} alt="jsimg" />
        <img src={ts} alt="tsimg" />
      </SkillBox>
    </Container>
  );
}

export default Programming;
