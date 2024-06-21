import React from "react";
import { motion } from "framer-motion";
import "../../assets/font/Font.css";
import styled from "styled-components";
import figma from "../../assets/img/figma.png";
import xd from "../../assets/img/xd.png";
import illust from "../../assets/img/illust.png";
import photoshop from "../../assets/img/photoshop.png";
import indesign from "../../assets/img/indesign.png";

const Container = styled(motion.div)`
  width: 360px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 940px;
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

function DesignTool() {
  return (
    <Container
      initial={{ opacity: 0, x: 100 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { delay: 0.5 },
      }}
    >
      <Title>DesignTool</Title>
      <Explan>
        UI/UX, 그래픽, 패키지, 인쇄물등 여러가지 <br />
        디자인 시안을 제작할 수 있습니다.
      </Explan>
      <SkillBox>
        <ImgBox>
          <img src={figma} alt="figma" />
          <img src={xd} alt="xd" />
          <img src={photoshop} alt="photoshop" />
        </ImgBox>
        <ImgBox>
          <img src={indesign} alt="indesign" />
          <img src={illust} alt="illust" />
        </ImgBox>
      </SkillBox>
    </Container>
  );
}

export default DesignTool;
