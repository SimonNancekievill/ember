import { useSession, signIn, signOut } from "next-auth/react";
import Button from "@/components/Button";
import styled from "styled-components";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

export default function LogIn() {
  const { data: session } = useSession();
  const [showForm, setShowForm] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
        <StyledSubtitle>to spend time for you</StyledSubtitle>
      </StyledTitelWrapper>
      <Button $variant="signIn" onClick={() => signIn("github")}>
        <FaGithub size={25} />
        log in with github
      </Button>
      <Button $variant="secondary" onClick={() => setShowForm(true)}>
        log in for testing
      </Button>
      {showForm && (
        <StyledForm
          onSubmit={(event) => {
            event.preventDefault();
            signIn("credentials", { username, password, callbackUrl: "/" });
          }}
        >
          <StyledActivityLabel htmlFor="username">
            <StyledTextInput
              id="username"
              name="username"
              placeholder="username"
              type="text"
              onChange={(event) => setUsername(event.target.value)}
              required
            />
          </StyledActivityLabel>
          <StyledActivityLabel htmlFor="password">
            <StyledTextInput
              id="password"
              name="password"
              placeholder="password"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </StyledActivityLabel>
          <Button
            $variant="logIn"
            type="submit"
            onClick={() =>
              signIn("credentials", { username, password, callbackUrl: "/" })
            }
          >
            submit
          </Button>
        </StyledForm>
      )}
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
  gap: 12px;
`;
const StyledTitle = styled.h1`
  font-weight: 600;
  font-size: 48px;
`;
const StyledSubtitle = styled.h2`
  color: var(--tertiary-grey);
  font-weight: 400;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: auto;
  width: 100%;
  gap: 6px;
  border-radius: 8px;
  border: none;
`;
const StyledTextInput = styled.input`
  border-radius: 8px;
  padding: 8px 16px;
  border: 1px solid var(--tertiary-grey);
  width: 100%;
  font-size: 16px;
`;
const StyledActivityLabel = styled.label`
  display: flex;
  gap: 8px;
  width: 100%;
  flex-direction: column;
`;
