import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import "../assets/font/Font.css";
import photo from "../assets/img/suphoto.png";
import starbg from "../assets/img/startbg.png";
import gracloud from "../assets/img/gracloud.png";

const Container = styled(motion.div)`
  width: 100%;
  position: relative;
  display: flex;
  margin-top: 150px;
`;
const ContentBox = styled(motion.div)`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
  z-index: 3;
`;
const TitleBox = styled.div`
  width: 100%;
`;
const AboutTitle = styled.h1`
  color: #fff;
  font-size: 40px;
  font-family: "nexonB";
  letter-spacing: 1px;
  line-height: 3rem;
  padding-top: 15px;
  margin-bottom: 55px;
  span {
    color: #001aff;
  }
`;
const AboutSub = styled.p`
  font-size: 18px;
  color: #fff;
  font-family: "nexon";
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 1.5rem;
  padding-top: 15px;
`;

const Career = styled.h3`
  font-family: "lucky";
  font-size: 30px;
  color: #fccc44;
  p {
    font-size: 20px;
    color: #fff;
    font-family: "nexon";
    font-weight: 300;
    padding: 10px 0;
  }
`;
const Photo = styled.img`
  width: 300px;
  border-radius: 25px;
  margin-right: 55px;
`;

const Star = styled.img`
  width: 90%;
  position: absolute;
  top: 150px;
  left: 80px;
  z-index: 3;
`;

const GraCloud = styled(motion.img)`
  width: 120%;
  position: absolute;
  bottom: -220px;
  left: 50%;
  transform: translateX(-50%);
`;

const About = () => {
  return (
    <Container
      initial={{ opacity: 0, y: -30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.5 },
      }}
    >
      <Star src={starbg} alt="star" />
      <GraCloud src={gracloud} alt="gracloud" />
      <ContentBox>
        <Photo src={photo} alt="photo" />
        <TitleBox>
          <AboutTitle>
            끊임없이 성장하고 도전하는 <br />
            <span>프론트엔드 개발자</span>가 되겠습니다.
            <AboutSub>
              긍정적인 마인드와 유연한 사고를 통해 어려움에 부딪혔을 때에도
              좌절하지 않고
              <br /> 문제를 해결하고자 합니다. 새로운 기술과 도구에 대한 열정과
              호기심을 바탕으로 끊임없이 <br />
              성장하고 도전하는 프론트엔드 개발자가 되겠습니다.
            </AboutSub>
          </AboutTitle>
          <Career>
            career
            <p>시각미디어디자인학과 제 27회 졸업준비위원회</p>
            <p>남서울대학교 홍보처 디자인팀 근무</p>
          </Career>
        </TitleBox>
      </ContentBox>
    </Container>
  );
};

export default About;
