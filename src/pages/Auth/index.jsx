import React, {useState} from 'react'
import SignIn from "./SignIn/index";
import SignUp from './SignUp/index';

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);



  return (
    <>
    {isSignIn ? (
      <SignIn seto={setIsSignIn}/>
    ) : (
      <SignUp seto={setIsSignIn}/>
    )}
    </>
  )
}

export default AuthPage;