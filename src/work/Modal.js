import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import gitbtn from "../assets/img/gitbtn.png";
import star from "../assets/img/twinkle2.png";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: ${({ "data-modalopen": modalOpen }) =>
    modalOpen ? "block" : "none"};
  z-index: 15;
`;

const Container = styled(motion.div)`
  width: 80%;
  min-width: 980px;
  background: #222;
  border-radius: 20px;
  padding: 40px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 16;
  display: ${({ "data-modalopen": modalOpen }) =>
    modalOpen ? "block" : "none"};
  color: #fff;
`;

const TopBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h2`
  width: 70%;
  font-family: "nexonB";
  font-size: 35px;
  margin-bottom: 20px;
  color: #fccc44;
`;

const BtnBox = styled.div`
  width: 30%;
  display: flex;
  gap: 15px;
  justify-content: flex-end;
  align-items: center;
`;

const GitBtn = styled.a`
  img {
    width: 40px;
  }
`;
const LinkBtn = styled.a`
  font-family: "nexonB";
  font-size: 16px;
  padding: 7px 12px;
  border-radius: 10px;
  color: #000;
  background-color: #eee;
  &:hover {
    color: #fff;
    background-color: #001aff;
  }
`;
const BottomBox = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  margin-top: 20px;
  justify-content: space-between;
`;

const RightBox = styled.div`
  width: 55%;
`;

const LeftBox = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  /* justify-content: end; */
  gap: 20px;
  font-family: "nexon";
  font-size: 18px;
  padding-top: 20px;
  h3 {
    font-family: "nexonB";
    font-size: 24px;
    color: #fccc44;
  }
  p {
    font-family: "nexon";
    font-size: 18px;
  }
`;

const ImageWrapper = styled.div`
  background: ${({ img }) => `url(${img}) no-repeat center top`};
  background-size: cover;
  width: 100%;
  height: 350px;
  border-radius: 15px;
`;

const HashContainer = styled.div`
  display: flex;
  gap: 7px;
  margin-top: 20px;
`;

const Hash = styled.span`
  background: #d9d9d9;
  color: #000;
  border-radius: 15px;
  padding: 5px 10px;
  font-family: "nexon";
  font-size: 16px;
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  color: #fccc44;
  font-family: "nexonB";
  font-size: 35px;
  cursor: pointer;
`;
const Goal = styled.div`
  display: flex;
  gap: 10px;
  p {
    display: flex;
    margin-bottom: 10px;
    margin-left: 20px;
  }
`;

const Period = styled.div`
  display: flex;
  align-items: center;
  h3 {
    margin-left: 10px;
  }
  p {
    margin-left: 30px;
  }
`;

const Lang = styled.div`
  display: flex;
  align-items: center;
  h3 {
    margin-right: 20px;
  }
  img {
    height: 35px;
    display: flex;
    margin-right: 10px;
  }
`;

const Star = styled.img`
  height: 35px;
`;

function Modal({ modalOpen, modalClose, item, img }) {
  return (
    <Overlay data-modalopen={modalOpen} onClick={modalClose}>
      <Container
        data-modalopen={modalOpen}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <TopBox>
          <Title>{item.title}</Title>
          <BtnBox>
            <LinkBtn href={item.link} target="_blank" rel="noopener noreferrer">
              {item.title} 보러가기
            </LinkBtn>
            <GitBtn
              href={item.gitlink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gitbtn} alt="gitbtn"></img>
            </GitBtn>
            <CloseBtn onClick={modalClose}>×</CloseBtn>
          </BtnBox>
        </TopBox>
        <BottomBox>
          <RightBox>
            <ImageWrapper img={img} />
          </RightBox>
          <LeftBox>
            <Goal>
              <Star src={star} alt="star" />
              <h3>제작목표</h3>
              <span>
                {item.goal.map((goal, index) => (
                  <p key={index}>{goal}</p>
                ))}
              </span>
            </Goal>
            <Period>
              <Star src={star} alt="star" />
              <h3>제작기간</h3>
              <p>{item.period}</p>
            </Period>

            <Lang>
              <Star src={star} alt="star" />

              <h3>제작언어</h3>
              {item.langimg.map((lang, index) => (
                <img key={index} src={lang} alt={lang} />
              ))}
            </Lang>

            <HashContainer>
              {item.hash.map((hash, index) => (
                <Hash key={index}># {hash}</Hash>
              ))}
            </HashContainer>
          </LeftBox>
        </BottomBox>
      </Container>
    </Overlay>
  );
}

export default Modal;
