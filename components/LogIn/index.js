import { useSession, signIn, signOut } from "next-auth/react";
import Button from "@/components/Button";

export default function LogIn() {
  const { data: session } = useSession();

  if (session) {
    return (
      <Button $variant="signIn" onClick={() => signOut()}>
        Sign out
      </Button>
    );
  }
  return (
    <>
      Please sign in <br />
      <Button $variant="signIn" onClick={() => signIn()}>
        Sign in
      </Button>
    </>
  );
}
