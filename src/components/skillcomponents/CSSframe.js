import React from "react";
import { motion } from "framer-motion";
import "../../assets/font/Font.css";
import styled from "styled-components";
import styledCom from "../../assets/img/styled.png";
import jquery from "../../assets/img/jquery.png";

const Container = styled(motion.div)`
  width: 360px;
  display: flex;
  flex-direction: column;
  text-align: right;
  position: absolute;
  top: 320px;
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

function CSSframe() {
  return (
    <Container
      initial={{ opacity: 0, x: -100 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { delay: 0.5 },
      }}
    >
      <Title>CSS framework/library</Title>
      <Explan>
        Styled-components, Jquery 등의 <br />
        CSS 프레임워크 / 라이브러리를 활용할 수 <br />
        있습니다.
      </Explan>
      <SkillBox>
        <img src={styledCom} alt="styled" />
        <img src={jquery} alt="jquery" />
      </SkillBox>
    </Container>
  );
}

export default CSSframe;
