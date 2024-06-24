import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import ship from "../assets/img/spaceship.png";
import "../assets/font/Font.css";
import HTML from "./skillcomponents/HTML";
import CSSframe from "./skillcomponents/CSSframe";
import Reactskill from "./skillcomponents/Reactskill";
import Programming from "./skillcomponents/Programming";
import DesignTool from "./skillcomponents/DesignTool";
import Studying from "./skillcomponents/Studying";
import lion from "../assets/img/lionstar.png";
import star from "../assets/img/startbg.png";
import planet from "../assets/img/planet1.png";

const Container = styled(motion.div)`
  width: 100%;
  height: 1500px;
  position: relative;
  margin-bottom: 400px;
`;

const TitleBox = styled.div`
  padding: 90px;
`;

const TitleLine = styled.div`
  position: relative;
  width: 250px;
  height: 8px;
  border-radius: 8px;
  background-color: #fccc44;
`;

const Title = styled.div`
  font-family: "lucky";
  font-size: 60px;
  letter-spacing: 3px;
  color: #fff;
  position: absolute;
  bottom: -15px;
  left: 5px;
`;

const ScrollBox = styled.div`
  margin: 0 auto;
  width: 1000px;
  height: 1480px;
  display: flex;
  justify-content: center;
  position: relative;
`;

const Bar = styled.div`
  width: 4px;
  height: 1480px;
  border-radius: 4px;
  background-color: #fccc44;
`;

const SpaceShipBox = styled(motion.div)`
  position: relative;
  top: 0;
  right: 102px;
  width: 204px;
  height: 1480px;
`;

const SpaceShip = styled(motion.img)`
  position: -webkit-sticky;
  position: sticky;
  top: 50px;
  width: 204px;
`;

const LionStar = styled(motion.img)`
  width: 200px;
  z-index: 5;
  position: absolute;
  top: 750px;
  left: 250px;
`;

const Star1 = styled(motion.img)`
  width: 70%;
  margin: 0 auto;
  position: absolute;
  top: 210px;
  left: 20%;
  z-index: 5;
`;

const Star = styled(motion.img)`
  width: 80%;
  margin: 0 auto;
  position: absolute;
  top: 1100px;
  left: 120px;
  z-index: 5;
`;

const Planet = styled(motion.img)`
  width: 100px;
  z-index: 5;
  position: absolute;
  top: 280px;
  left: 180px;
`;

const Skill = () => {
  return (
    <Container
      initial={{ opacity: 0, y: -100 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.3 },
      }}
    >
      <LionStar src={lion} alt="lion" />
      <Star1 src={star} alt="star" />
      <Star src={star} alt="star" />
      <Planet src={planet} alt="planet" />
      <TitleBox>
        <TitleLine>
          <Title>Skill</Title>
        </TitleLine>
      </TitleBox>
      <ScrollBox>
        <HTML />
        <CSSframe />
        <Reactskill />
        <Programming />
        <DesignTool />
        <Studying />
        <Bar>
          <SpaceShipBox>
            <SpaceShip src={ship} />
          </SpaceShipBox>
        </Bar>
      </ScrollBox>
    </Container>
  );
};

export default Skill;
