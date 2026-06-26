import { useSession, signIn, signOut } from "next-auth/react";
import Button from "@/components/Button";
import styled from "styled-components";
import Image from "next/image";

export default function LogIn() {
  const { data: session } = useSession();

  if (session) {
    return (
      <Button $variant="signOut" onClick={() => signOut()}>
        Sign out
      </Button>
    );
  }
  return (
    <StyledPageWrapper>
      <Image
        src="/images/Ember-E.svg"
        width={250}
        height={250}
        alt="Ember E as logo"
      />
      <StyledTitelWrapper>
        <StyledTitle>sign in.</StyledTitle>
        <StyledSubtitle>time spent for you</StyledSubtitle>
      </StyledTitelWrapper>
      <Button onClick={() => signIn("github")}>log in with github</Button>
    </StyledPageWrapper>
  );
}

const StyledTitelWrapper = styled.div`
  padding: 24px 0px;
`;
const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 24px 48px;
`;
const StyledTitle = styled.h1`
  font-weight: 600;
  font-size: 48px;
`;
const StyledSubtitle = styled.h2`
  color: var(--tertiary-grey);
  font-weight: 400;
`;
