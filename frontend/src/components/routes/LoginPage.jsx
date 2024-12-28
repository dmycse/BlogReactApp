import { SignIn } from '@clerk/clerk-react';

export const LoginPage = () => {
  return (
    <div className='h-[calc(100vh-4rem)] flex items-center justify-center'>
      <SignIn signUpUrl='/register' />
    </div>
  )
}
