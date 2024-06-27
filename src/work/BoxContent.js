import React, { useState } from "react";
import styled from "styled-components";
import gitbtn from "../assets/img/gitbtn.png";
import modalbtn from "../assets/img/modalbtn.png";
import Modal from "./Modal";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
`;
const ContentBox = styled.div`
  width: 90%;
  display: flex;
  margin: 0 auto;
`;
const ExBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  p {
    font-family: "nexon";
    font-weight: 300;
    font-size: 18px;
    margin-bottom: 10px;
  }
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: end;
  align-items: flex-end;
  flex-direction: column;
  gap: 10px;
  width: 20%;
  padding-top: 20px;
  a {
    text-align: end;
  }
`;

const GitBtn = styled.img`
  width: 90%;
`;

const ModalBtn = styled.img`
  width: 90%;
`;

const Title = styled.h2`
  font-family: "nexonB";
  font-size: 35px;
  margin-bottom: 20px;
  color: #fccc44;
`;

const HashContainer = styled.div`
  display: flex;
  gap: 7px;
  margin-top: 55px;
`;

const Hash = styled.span`
  background: #d9d9d9;
  color: #000;
  border-radius: 15px;
  padding: 5px 10px;
  font-family: "nexon";
  font-size: 16px;
`;

const ImageWrapper = styled.div`
  background: ${({ img }) => `url(${img}) no-repeat center center`};
  background-size: cover;
  width: 90%;
  height: ${({ imgsize }) => (imgsize === "large" ? "275px" : "185px")};
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 30px;
  border-radius: 20px;
`;

const BoxContent = ({ item, img, imgsize }) => {
  const [modal, setModal] = useState(false);

  const modalOpen = () => setModal(true);
  const modalClose = () => setModal(false);

  return (
    <Container>
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        <ImageWrapper img={img} imgsize={imgsize} />
      </a>
      <ContentBox>
        <ExBox>
          <Title>{item.title}</Title>
          <p>제작언어 : {item.lang}</p>
          <p>제작기간 : {item.period}</p>
          <HashContainer>
            {item.hash.map((tag, index) => (
              <Hash key={index}># {tag}</Hash>
            ))}
          </HashContainer>
        </ExBox>
        <ButtonBox>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <GitBtn src={gitbtn} alt="gitbtn" />
          </a>
          <ModalBtn onClick={modalOpen} src={modalbtn} alt="modalbtn" />
          <Modal
            modalOpen={modal}
            modalClose={modalClose}
            item={item}
            img={img}
          />
        </ButtonBox>
      </ContentBox>
    </Container>
  );
};

export default BoxContent;
