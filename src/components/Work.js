import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { work } from "./data/workdata";
import cloud from "../assets/img/cloud1.png";
import twinkle1 from "../assets/img/twinkle3.png";
import twinkle2 from "../assets/img/startbg.png";
import planet from "../assets/img/planet2.png";
import space from "../assets/img/spaceship2.png";

const Container = styled.div`
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
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 250px;
  left: 5%;
`;

const PrevBox = styled(motion.div)`
  position: absolute;
  top: 150px;
  left: 20px;
  height: 500px;
  width: 400px;
  background: #262626;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  &::after {
    content: "";
    position: absolute;
    background: #000;
    height: 500px;
    width: 400px;
    background: rgba(15, 15, 15, 0.7);
    border-radius: 40px;
  }
`;

const NextBox = styled(motion.div)`
  position: absolute;
  top: 150px;
  right: 20px;
  height: 500px;
  width: 400px;
  background: #262626;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  &::after {
    content: "";
    position: absolute;
    background: #000;
    height: 500px;
    width: 400px;
    background: rgba(15, 15, 15, 0.7);
    border-radius: 40px;
  }
`;

const Box = styled(motion.div)`
  position: absolute;
  top: 100px;
  height: 600px;
  width: 500px;
  background: #262626;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
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
  left: 15%;
  width: 70%;
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
    x: back ? 500 : -500,
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
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.5,
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
    setVisible(0); // 카테고리 변경 시 첫 번째 항목으로 초기화
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
  console.log(filteredData);
  return (
    <Container
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
        <button
          className={selectedCategory === "all" ? "active" : ""}
          onClick={() => handleCategoryChange("all")}
        >
          All
        </button>
        <button
          className={selectedCategory === "clone" ? "active" : ""}
          onClick={() => handleCategoryChange("clone")}
        >
          Clone
        </button>
        <button
          className={selectedCategory === "example" ? "active" : ""}
          onClick={() => handleCategoryChange("example")}
        >
          Example
        </button>
        <button
          className={selectedCategory === "project" ? "active" : ""}
          onClick={() => handleCategoryChange("project")}
        >
          Project
        </button>
        <button
          className={selectedCategory === "etc" ? "active" : ""}
          onClick={() => handleCategoryChange("etc")}
        >
          Etc
        </button>
      </FilterButtons>
      <BoxContainer>
        <AnimatePresence custom={back} mode="sync">
          {filteredData.length > 0 && (
            <PrevBox
              key={`prev-${filteredData[prevIndex].id}`}
              variants={boxVariants}
              custom={back}
              initial="initial"
              animate="visible"
              exit="exit"
            >
              <div>
                <h2>{filteredData[prevIndex].title}</h2>
                <div
                  style={{
                    background: `url(${filteredData[prevIndex].img})`,
                    width: "300px",
                    height: "50px",
                  }}
                ></div>
                <p>{filteredData[prevIndex].category}</p>
                <a
                  href={filteredData[prevIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {filteredData[prevIndex].link}
                </a>
              </div>
            </PrevBox>
          )}
          {filteredData.length > 0 && (
            <Box
              key={filteredData[visible].id}
              variants={boxVariants}
              custom={back}
              initial="initial"
              animate="visible"
              exit="exit"
            >
              <div>
                <h2>{filteredData[visible].title}</h2>
                <div
                  style={{
                    background: `url(${filteredData[visible].img})`,
                    width: "300px",
                    height: "50px",
                  }}
                />

                <p>{filteredData[visible].category}</p>
                <a
                  href={filteredData[visible].link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {filteredData[visible].link}
                </a>
              </div>
            </Box>
          )}
          {filteredData.length > 0 && (
            <NextBox
              key={`next-${filteredData[nextIndex].id}`}
              variants={boxVariants}
              custom={back}
              initial="initial"
              animate="visible"
              exit="exit"
            >
              <div>
                <h2>{filteredData[nextIndex].title}</h2>
                <div
                  style={{
                    background: `url(${filteredData[nextIndex].img})`,
                    width: "300px",
                    height: "50px",
                  }}
                />
                <p>{filteredData[nextIndex].category}</p>
                <a
                  href={filteredData[nextIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {filteredData[nextIndex].link}
                </a>
              </div>
            </NextBox>
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
