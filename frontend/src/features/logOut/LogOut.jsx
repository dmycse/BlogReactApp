import { SignedIn, UserButton } from "@clerk/clerk-react";

export const LogOut = () => {
  return (
    <SignedIn>
      <UserButton />
    </SignedIn>
  )
}
