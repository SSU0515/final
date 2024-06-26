import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { work } from "./data/workdata";
import Slide from "../work/Slide";
import cloud from "../assets/img/cloud1.png";
import twinkle1 from "../assets/img/twinkle3.png";
import twinkle2 from "../assets/img/startbg.png";
import planet from "../assets/img/planet2.png";
import space from "../assets/img/spaceship2.png";

import thum1 from "./data/thumnail/workthum/matinkimthum.png";
import thum2 from "./data/thumnail/workthum/etudethum.png";
import thum3 from "./data/thumnail/workthum/hereokthum.png";
import thum4 from "./data/thumnail/workthum/catmbtithum.png";
import thum5 from "./data/thumnail/workthum/imgdropthum.png";
import thum6 from "./data/thumnail/workthum/playlistthum.png";
import thum7 from "./data/thumnail/workthum/blogthum.png";
import thum8 from "./data/thumnail/workthum/canvanthum.png";
import thum9 from "./data/thumnail/workthum/catmbtithum.png";
import thum10 from "./data/thumnail/workthum/apithum.png";
import thum11 from "./data/thumnail/workthum/playlistthum.png";
import thum12 from "./data/thumnail/workthum/apithum.png";
import thum13 from "./data/thumnail/workthum/canvanthum.png";
import thum14 from "./data/thumnail/workthum/blogthum.png";

const images = [
  thum1,
  thum2,
  thum3,
  thum4,
  thum5,
  thum6,
  thum7,
  thum8,
  thum9,
  thum10,
  thum11,
  thum12,
  thum13,
  thum14,
];

const Container = styled(motion.div)`
  width: 100%;
  height: 1390px;
  position: relative;
`;

const TitleBox = styled.div`
  padding: 90px;
`;

const TitleLine = styled.div`
  position: relative;
  width: 250px;
  height: 8px;
  border-radius: 8px;
  margin-bottom: 20px;
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

const Ex = styled.span`
  font-family: "nexon";
  font-weight: 300;
  font-size: 24px;
  color: #fff;
`;

const BoxContainer = styled.div`
  width: 96%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 350px;
  left: 2%;
`;

const FilterButtons = styled.div`
  margin-bottom: 20px;
  z-index: 1;
  position: absolute;
  top: 200px;
  left: 90px;
  button {
    margin-right: 10px;
    padding: 10px;
    border: none;
    font-family: "lucky";
    font-size: 26px;
    background-color: #001aff;
    color: #fff;
    border-radius: 14px;
    cursor: pointer;
    &:hover {
      background-color: #fff;
      color: #001aff;
    }
    &.active {
      background-color: #fff;
      color: #001aff;
    }
  }
`;

const Buttons = styled.div`
  position: absolute;
  top: 580px;
  left: 13%;
  width: 74%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 60px;
  z-index: 1;
`;

const Button = styled.button`
  border: none;
  background: none;
  color: #fccc44;
  font-size: 40px;
  cursor: pointer;
`;

const Cloud = styled(motion.img)`
  width: 700px;
  position: absolute;
  top: -200px;
  right: -200px;
  rotate: 15deg;
`;

const Cloud1 = styled(motion.img)`
  width: 700px;
  position: absolute;
  bottom: 200px;
  left: -280px;
  rotate: 100deg;
`;

const Star = styled(motion.img)`
  width: 60px;
  position: absolute;
  top: 50px;
  right: 50%;
`;

const Star2 = styled.img`
  width: 70%;
  position: absolute;
  top: 590px;
  right: 15%;
`;

const Planet = styled.img`
  width: 50px;
  position: absolute;
  bottom: 300px;
  right: 10%;
`;

const SpaceShip = styled.img`
  width: 360px;
  position: absolute;
  bottom: 100px;
  right: 30%;
`;

const boxVariants = {
  initial: (back) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0.8,
  }),
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: (back) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.3,
    },
  }),
};

const Work = () => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visible, setVisible] = useState(0);
  const [back, setBack] = useState(false);

  useEffect(() => {
    setData(work);
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setVisible(0);
  };

  const filteredData =
    selectedCategory === "all"
      ? data
      : data.filter((item) => item.category === selectedCategory);

  const nextBtn = () => {
    setBack(false);
    setVisible((prev) => (prev === filteredData.length - 1 ? 0 : prev + 1));
  };

  const prevBtn = () => {
    setBack(true);
    setVisible((prev) => (prev === 0 ? filteredData.length - 1 : prev - 1));
  };

  const prevIndex = visible === 0 ? filteredData.length - 1 : visible - 1;
  const nextIndex = visible === filteredData.length - 1 ? 0 : visible + 1;

  return (
    <Container
      id="work"
      initial={{ opacity: 0, y: -100 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.5 },
      }}
    >
      <Star src={twinkle1} alt="star" />
      <Cloud
        initial={{ opacity: 0, x: 120 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.3 },
        }}
        src={cloud}
        alt="cloud"
      />
      <Cloud1
        initial={{ opacity: 0, x: -120 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.3 },
        }}
        src={cloud}
        alt="cloud"
      />
      <Star2 src={twinkle2} alt="star2" />
      <Planet src={planet} alt="planet" />
      <SpaceShip
        initial={{ opacity: 0, y: -120 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.3 },
        }}
        src={space}
        alt="space"
      />
      <TitleBox>
        <TitleLine>
          <Title>Work</Title>
        </TitleLine>
        <Ex>각 카드 속 버튼을 클릭하여 더 자세한 정보를 확인해주세요.</Ex>
      </TitleBox>
      <FilterButtons>
        {["all", "clone", "example", "project", "etc"].map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => handleCategoryChange(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </FilterButtons>
      <BoxContainer>
        <AnimatePresence custom={back} mode="sync">
          {filteredData.length > 0 && (
            <Slide
              key={`prev-${filteredData[prevIndex].id}`}
              item={filteredData[prevIndex]}
              img={images[prevIndex]}
              variants={boxVariants}
              custom={back}
              position="20px"
              size="small"
              imgsize="small"
            />
          )}
          {filteredData.length > 0 && (
            <Slide
              key={filteredData[visible].id}
              item={filteredData[visible]}
              img={images[visible]}
              variants={boxVariants}
              custom={back}
              position="calc(50% - 250px)"
              size="large"
              imgsize="large"
            />
          )}
          {filteredData.length > 0 && (
            <Slide
              key={`next-${filteredData[nextIndex].id}`}
              item={filteredData[nextIndex]}
              img={images[nextIndex]}
              variants={boxVariants}
              custom={back}
              position="calc(100% - 420px)"
              size="small"
              imgsize="small"
            />
          )}
        </AnimatePresence>
      </BoxContainer>
      <Buttons>
        <Button onClick={prevBtn}>◀</Button>
        <Button onClick={nextBtn}>▶</Button>
      </Buttons>
    </Container>
  );
};

export default Work;
