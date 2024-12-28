import { SignUp } from "@clerk/clerk-react";

export const RegisterPage = () => {
  return (
    <div className='h-[calc(100vh-4rem)] flex items-center justify-center'>
      <SignUp signInUrl='/login' />
    </div>
  )
}
