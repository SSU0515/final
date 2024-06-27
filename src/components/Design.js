import React, { useState, useEffect } from "react";
import { design } from "./data/designdata";
import styled from "styled-components";
import { motion } from "framer-motion";
import "../assets/font/Font.css";
import twinkle from "../assets/img/startbg.png";
import thum1 from "./data/thumnail/designthum/websonithum.png";
import thum2 from "./data/thumnail/designthum/pooingthum.png";
import thum3 from "./data/thumnail/designthum/grapicthum.png";
import thum4 from "./data/thumnail/designthum/packtum1.png";
import thum5 from "./data/thumnail/designthum/packthum2.png";
import thum6 from "./data/thumnail/designthum/indesignthum.png";

const Container = styled(motion.div)`
  width: 100%;
  position: relative;
  padding-bottom: 250px;
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

const ImgBox = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
  margin: 0 auto;
`;

const ThumbnailContainer = styled.div`
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
  cursor: pointer;
  &:hover .info {
    opacity: 1;
  }
`;

const Thumimg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: left;
  padding: 25px;

  h2 {
    font-family: "nexonB";
    font-size: 28px;
    margin-bottom: 10px;
    color: #fccc44;
    letter-spacing: 0.9;
  }

  p {
    font-family: "nexon";
    font-weight: 300;
    font-size: 18px;
    margin-bottom: 5px;
  }

  span {
    font-family: "nexon";
    font-weight: 300;
    font-size: 14px;
    width: 90%;
    text-align: left;
    line-height: 1.6rem;
    position: absolute;
    bottom: 25px;
  }
`;

const Star = styled.img`
  width: 70%;
  position: absolute;
  top: 0;
  left: 2%;
`;

const Design = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(design);
  }, []);

  return (
    <Container
      id="design"
      initial={{ opacity: 0, y: -100 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.3 },
      }}
    >
      <Star src={twinkle} alt="star" />
      <TitleBox>
        <TitleLine>
          <Title>Design</Title>
        </TitleLine>
        <Ex>디자인 작업물입니다. 마우스를 올려 자세한 정보를 확인해주세요.</Ex>
      </TitleBox>
      <ImgBox>
        {data.map((item, index) => (
          <ThumbnailContainer key={item.id}>
            <Thumimg
              src={[thum1, thum2, thum3, thum4, thum5, thum6][index]}
              alt={`thum${index + 1}`}
            />
            <InfoBox className="info">
              <h2>{item.title}</h2>
              <p>Tool: {item.tool}</p>
              <p>Time: {item.time}</p>
              <span>{item.ex}</span>
            </InfoBox>
          </ThumbnailContainer>
        ))}
      </ImgBox>
    </Container>
  );
};

export default Design;
