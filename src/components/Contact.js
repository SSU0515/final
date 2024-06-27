import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import star from "../assets/img/startbg.png";
import cloud from "../assets/img/cloud1.png";
import spaceship from "../assets/img/spaceship.png";
import planet from "../assets/img/planet1.png";
import light from "../assets/img/light.png";

const Container = styled(motion.div)`
  width: 100%;
  height: 1500px;
  position: relative;
  padding-bottom: 150px;
`;

const Title = styled(motion.h1)`
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: "nexonB";
  font-size: 40px;
  margin-top: 120px;
  color: #fff;
  span {
    color: #fccc44;
  }
`;

const Cloud1 = styled(motion.img)`
  width: 620px;
  position: absolute;
  top: 0;
  right: -180px;
`;

const Cloud2 = styled(motion.img)`
  width: 620px;
  position: absolute;
  top: 470px;
  left: -250px;
  transform: scaleX(-1);
`;

const Star = styled.img`
  width: 80%;
  position: absolute;
  top: 0;
  left: 10%;
`;

const Planet = styled(motion.img)`
  width: 70px;
  position: absolute;
  top: 220px;
  left: 40%;
`;

const ContactBox = styled(motion.div)`
  width: 100%;
  margin-top: 450px;
  position: relative;
`;

const SpaceShip = styled.img`
  width: 280px;
  position: absolute;
  top: 0;
  left: calc(50% - 140px);
  z-index: 2;
`;

const Light = styled(motion.img)`
  width: 100%;
  height: 1000px;
  position: absolute;
  top: 50px;
`;

const Content = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 70px;
  font-family: "lucky";
  font-size: 40px;
  letter-spacing: 3px;
  color: #000;
  position: absolute;
  top: 250px;

  div {
    margin-top: 20px;
    margin-bottom: 250px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  h3 {
    color: #001aff;
  }
  span {
    font-family: "nexonB";
    font-size: 24px;
    letter-spacing: 0;
    margin-bottom: 40px;
  }
`;

const Copyright = styled.p`
  font-family: "nexonB";
  font-size: 20px;
  letter-spacing: 0;
  color: #fff;
`;

const GoToTop = styled(motion.button)`
  width: 70px;
  height: 70px;
  background: #fccc44;
  color: #000;
  font-size: 25px;
  border-radius: 100%;
  border: none;
  position: absolute;
  bottom: 5%;
  right: calc(50% - 35px);
`;

const Contact = () => {
  return (
    <Container
      id="contact"
      initial={{ opacity: 0, y: -100 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.3 },
      }}
    >
      <Title
        initial={{ opacity: 0, y: -100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.3 },
        }}
      >
        끊임없이 성장하고 도전하는&nbsp; <span> 프론트엔드 개발자</span>가
        되겠습니다.
      </Title>
      <Cloud1
        initial={{ opacity: 0, x: 70 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.3 },
        }}
        src={cloud}
        alt="cloud"
      />
      <Cloud2 src={cloud} alt="cloud" />
      <Star src={star} alt="star" />
      <Planet src={planet} alt="planet" />
      <ContactBox>
        <SpaceShip src={spaceship} alt="spaceship" />
        <Light
          initial={{ opacity: 0, y: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.7 },
          }}
          src={light}
          alt="light"
        />
        <Content
          initial={{ opacity: 0, y: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.7 },
          }}
        >
          <h2>CONTACT</h2>
          <div>
            <h3>
              <a
                href="https://github.com/SSU0515"
                target="_blank"
                rel="noreferrer"
              >
                GITHUB
              </a>
            </h3>
            <span>click me!</span>

            <h3>EMAIL</h3>
            <span>suhyeong34@gmail.com</span>
          </div>
          <Copyright>
            Copyright ⓒ 2024 KimSuhyeon. All right reserved.
          </Copyright>
        </Content>
      </ContactBox>
      <a href="#home">
        <GoToTop
          initial={{ opacity: 0, y: -100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3 },
          }}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </GoToTop>
      </a>
    </Container>
  );
};

export default Contact;
