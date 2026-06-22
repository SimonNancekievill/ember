import styled from "styled-components";
import { motion } from "motion/react";

export default function LoadingAnimation() {
  return (
    <div>
      <Circle
        animate={{ transform: "rotate(360deg)" }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}

const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 4px solid var(--secondary-grey);
  border-top-color: var(--movement-yellow);
`;
