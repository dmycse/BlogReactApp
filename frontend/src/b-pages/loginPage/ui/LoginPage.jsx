import { useState } from 'react';
import { useLocation } from "react-router-dom";
import { SignIn } from '@clerk/clerk-react';

export const LoginPage = () => {
  const location = useLocation();
  const [locationPath, setLocationPath] = useState(location.state?.from || "/");

  return (
    <div className='h-[calc(100vh-4rem)] flex items-center justify-center'>
      <SignIn 
        signUpUrl='/register' 
        forceRedirectUrl={locationPath} 
        // appearance={{
        //   elements: {
        //     footerAction: { display: "none"  },
        //   },
        // }} 
      />
    </div>
  )
}
