import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import "../assets/font/Font.css";
import star from "../assets/img/twinkle1.png";
import star2 from "../assets/img/starcow.png";
import star6 from "../assets/img/starcow2.png";
import star3 from "../assets/img/twinkle3.png";
import planet from "../assets/img/planet1.png";
import planet2 from "../assets/img/planet2.png";
import swing from "../assets/img/suswing.png";
import cloud from "../assets/img/cloud1.png";
import cloud2 from "../assets/img/cloud2.png";
import About from "./About";
import Skill from "./Skill";
import Work from "./Work";
import Design from "./Design";

const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  min-width: 1280px;
  height: 7730px;
  position: relative;
  background-color: #110f0f;
`;

const TitleBox = styled(motion.div)`
  width: 100%;
  color: #fff;
  display: flex;
  gap: 500px;
`;

const Title = styled.h1`
  font-family: "lucky";
  font-size: 100px;
  letter-spacing: 5px;
  line-height: 110px;
  padding: 270px 230px;
  span {
    color: #001aff;
    letter-spacing: 3px;
  }
`;

const MidTitle = styled.p`
  font-family: "nexon";
  font-weight: 400;
  font-size: 24px;
  line-height: 1rem;
  letter-spacing: 0;
  padding-top: 20px;
  b {
    color: #fccc44;
  }
`;

const Star = styled(motion.img)`
  width: 18px;
  position: absolute;
  top: 230px;
  left: 440px;
`;

const Star2 = styled(motion.img)`
  width: 264px;
  position: absolute;
  top: 60px;
  left: 40%;
`;

const Star3 = styled(motion.img)`
  width: 57px;
  position: absolute;
  top: 260px;
  right: 220px;
`;

const Star4 = styled(motion.img)`
  width: 35px;
  position: absolute;
  top: 180px;
  left: 150px;
`;

const Star5 = styled(motion.img)`
  width: 18px;
  position: absolute;
  top: 400px;
  left: 50%;
`;

const Star6 = styled(motion.img)`
  width: 150px;
  position: absolute;
  top: 660px;
  right: 40%;
`;
const ClickBox = styled(motion.div)`
  position: relative;
  top: 160px;
  right: 70px;
`;
const ClickTitle = styled(motion.p)`
  width: 145px;
  font-family: "nexon";
  font-weight: 400;
  font-size: 14px;
  color: #fff;
  position: absolute;
  top: 100px;
  right: 180px;
  cursor: pointer;
  span {
    font-family: "lucky";
    font-size: 30px;
    color: #fccc44;
  }
`;

const Swing = styled(motion.img)`
  width: 450px;
  position: absolute;
  top: 120px;
  right: 10px;
  z-index: 2;
  cursor: pointer;
`;

const Planet = styled(motion.img)`
  width: 65px;
  position: absolute;
  top: 140px;
  right: 380px;
`;

const Planet2 = styled(motion.img)`
  width: 72px;
  position: absolute;
  top: 315px;
  left: 80px;
`;

const Cloud = styled(motion.img)`
  width: 617px;
  position: absolute;
  top: 490px;
  right: -150px;
  z-index: 1;
`;
const Cloud2 = styled(motion.img)`
  width: 617px;
  position: absolute;
  top: 450px;
  left: -150px;
  z-index: 1;
`;

const Home = () => {
  return (
    <Container>
      <TitleBox
        initial={{ opacity: 0, x: -100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.5 },
        }}
      >
        <Title>
          WELCOME
          <br />
          TO <span>SU</span>Pace
          <br />
          <MidTitle>
            끝없는 도전의 공간 <b>수페이스</b>에 오신 것을 환영합니다.
          </MidTitle>
        </Title>
        <ClickBox>
          <ClickTitle>
            포트폴리오 영상보러가기
            <br />
            <span>Click Me!</span>
          </ClickTitle>
          <Swing
            initial={{ opacity: 0, x: -120 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.3 },
            }}
            src={swing}
            alt="Swing"
          />
        </ClickBox>
      </TitleBox>

      <Star
        initial={{ opacity: 0, y: 0 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.2 },
        }}
        src={star}
        alt="Star"
      />
      <Star5
        initial={{ opacity: 0, y: 0 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.2 },
        }}
        src={star}
        alt="Star"
      />
      <Star4
        initial={{ opacity: 0, x: -20 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.3 },
        }}
        src={star}
        alt="Star"
      />
      <Star2
        initial={{ opacity: 0, x: 0 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.1 },
        }}
        src={star2}
        alt="Star2"
      />
      <Star6
        initial={{ opacity: 0, x: 0 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.1 },
        }}
        src={star6}
        alt="Star6"
      />
      <Star3 src={star3} alt="Star3" />

      <Planet
        initial={{ opacity: 0, x: 100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.5 },
        }}
        src={planet}
        alt="Planet"
      />
      <Planet2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.5 },
        }}
        src={planet2}
        alt="Planet2"
      />
      <Cloud
        initial={{ opacity: 0, x: 100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.5 },
        }}
        src={cloud}
        alt="Cloud"
      />
      <Cloud2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.5 },
        }}
        src={cloud2}
        alt="Cloud2"
      />
      <About />
      <Skill />
      <Work />
      <Design />
    </Container>
  );
};

export default Home;
