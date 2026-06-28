import ActivityListItem from "../ActivityListItem";
import styled from "styled-components";
import { motion } from "motion/react";

export default function ActivityList({ entries, mutateCounter, $compact }) {
  if (entries.length === 0) {
    return (
      <StyledPageWrapper $compact={$compact}>
        <StyledSubtitle>
          nothing logged yet — that is okay, today is a new day
        </StyledSubtitle>
      </StyledPageWrapper>
    );
  }
  return (
    <StyledList variants={container} initial="hidden" animate="show">
      {entries.map((entry) => {
        return (
          <motion.div key={entry._id} variants={item}>
            <ActivityListItem
              key={entry._id}
              name={entry.name}
              date={entry.createdAt}
              category={entry.category}
              id={entry._id}
              mutateCounter={mutateCounter}
            />
          </motion.div>
        );
      })}
    </StyledList>
  );
}

const StyledList = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  padding: 24px 48px;
  gap: 24px;
`;
const StyledPageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${(props) => (props.$compact ? "auto" : "100vh")};
  padding: 24px 48px;
`;
const StyledSubtitle = styled.h2`
  color: var(--tertiary-grey);
  font-weight: 400;
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
