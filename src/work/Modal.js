import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ modalOpen }) => (modalOpen ? "block" : "none")};
  z-index: 10;
`;

const Container = styled(motion.div)`
  width: 80%;
  background: #262626;
  border-radius: 20px;
  padding: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  display: ${({ modalOpen }) => (modalOpen ? "block" : "none")};
  color: #fff;
`;

// const ImageWrapper = styled.div`
//   background: ${({ img }) => `url(${img}) no-repeat center center`};
//   background-size: cover;
//   width: 50%;
//   height: 275px;
//   border-radius: 20px;
//   margin-bottom: 20px;
// `;

const Title = styled.h2`
  font-family: "nexonB";
  font-size: 35px;
  margin-bottom: 20px;
  color: #fccc44;
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

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #fccc44;
  font-family: "nexon";
  font-size: 35px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

function Modal({ modalOpen, modalClose, item, img }) {
  return (
    <Overlay modalOpen={modalOpen} onClick={modalClose}>
      <Container
        modalOpen={modalOpen}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton onClick={modalClose}>×</CloseButton>
        {/* <ImageWrapper img={img} /> */}
        <Title>{item.title}</Title>
        <p>제작언어 : {item.lang}</p>
        <p>제작기간 : {item.period}</p>
        <HashContainer>
          {item.hash.map((tag, index) => (
            <Hash key={index}># {tag}</Hash>
          ))}
        </HashContainer>
      </Container>
    </Overlay>
  );
}

export default Modal;
