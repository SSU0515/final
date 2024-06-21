import React from "react";
import { motion } from "framer-motion";
import "../../assets/font/Font.css";
import styled from "styled-components";
import nodeimg from "../../assets/img/node.png";
import aws from "../../assets/img/aws.png";
import firebase from "../../assets/img/firebase.png";
import git from "../../assets/img/git.png";
import slack from "../../assets/img/slack.png";

const Container = styled(motion.div)`
  width: 360px;
  display: flex;
  flex-direction: column;
  text-align: right;
  position: absolute;
  top: 1200px;
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
  flex-direction: column;
  margin-left: auto;
  gap: 5px;
  height: 45px;
`;
const ImgBox = styled.div`
  display: flex;
  margin-left: auto;
  gap: 5px;
  height: 45px;
`;

function Studying() {
  return (
    <Container
      initial={{ opacity: 0, x: -100 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { delay: 0.5 },
      }}
    >
      <Title>Studying/ETC</Title>
      <Explan>
        Node.js 로 RESTful API 구축 경험이 있습니다.
        <br />
        계속해서 공부중입니다.
        <br />
        git를 사용하여 협업한 경험이 있습니다.
        <br />
        Firebase, aws등을 사용하여 배포가 가능합니다.
      </Explan>
      <SkillBox>
        <ImgBox>
          <img src={nodeimg} alt="nodeimg" />
          <img src={aws} alt="aws" />
          <img src={firebase} alt="firebase" />
        </ImgBox>
        <ImgBox>
          <img src={git} alt="git" />
          <img src={slack} alt="slack" />
        </ImgBox>
      </SkillBox>
    </Container>
  );
}

export default Studying;
