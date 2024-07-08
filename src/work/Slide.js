import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import BoxContent from "./BoxContent";

const BoxBase = styled(motion.div)`
  position: absolute;
  top: 0;
  background: #262626;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  width: ${(props) => (props.size === "large" ? "500px" : "400px")};
  height: ${(props) => (props.size === "large" ? "600px" : "500px")};
  top: ${(props) => (props.size !== "large" ? "10%" : "0")};

  ${(props) =>
    props.size !== "large" &&
    `top: 10%;
   h2{
   font-size:25px;
   }
   p{
   font-size:16px;
   }
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(15, 15, 15, 0.8);
        border-radius: 40px;
        z-index: 1;
      }
    `}
`;

const Slide = ({ item, variants, custom, position, size, imgsize }) => {
  return (
    <BoxBase
      key={item.id}
      variants={variants}
      custom={custom}
      initial="initial"
      animate="visible"
      exit="exit"
      style={{ left: position }}
      size={size}
    >
      <BoxContent item={item} img={item.imglink} imgsize={imgsize} />
    </BoxBase>
  );
};

export default Slide;
