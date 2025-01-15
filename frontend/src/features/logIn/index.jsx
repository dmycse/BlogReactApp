import { Link } from "react-router-dom";
import { SignedOut } from "@clerk/clerk-react";
import { LogIn as LogInIcon } from "lucide-react";

export const LogIn = () => {
  return (
    <SignedOut>
      <Link 
        to='/login'
        className="py-2 px-4 flex items-center gap-2 text-white rounded-lg bg-purple-400 hover:bg-purple-600"
      >
        <LogInIcon /> Login
      </Link>
    </SignedOut>
  )
};