import styled from "styled-components";
import { motion } from "motion/react";

export default function LoadingAnimation() {
  return (
    <CircleWrapper>
      <Circle
        animate={{ transform: "rotate(360deg)" }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </CircleWrapper>
  );
}

const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 4px solid var(--secondary-white);
  border-top-color: var(--movement-yellow);
`;
const CircleWrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
