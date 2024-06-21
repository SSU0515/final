import React from "react";
import { motion } from "framer-motion";
import "../../assets/font/Font.css";
import styled from "styled-components";
import html from "../../assets/img/html.png";
import css from "../../assets/img/css.png";
import scss from "../../assets/img/scss.png";

const Container = styled(motion.div)`
  width: 360px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
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
  gap: 5px;
  height: 45px;
`;

function HTML() {
  return (
    <Container
      initial={{ opacity: 0, x: 100 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { delay: 0.5 },
      }}
    >
      <Title>HTML / CSS</Title>
      <Explan>
        웹 표준을 지키려 노력합니다.
        <br />
        시멘틱 태그를 활용하여 가독성을 높입니다.
        <br />
        SCSS를 사용할 수 있습니다.
        <br />
        반응형을 구현할 수 있습니다.
        <br />
        keyframes 를 활용한 애니메이션 기법을
        <br />
        활용할 수 있습니다.
        <br />
      </Explan>
      <SkillBox>
        <img src={html} alt="htmlimg" />
        <img src={css} alt="cssimg" />
        <img src={scss} alt="scss" />
      </SkillBox>
    </Container>
  );
}

export default HTML;
