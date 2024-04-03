import React from 'react'
import { GoogleButton } from 'react-google-button'
import { UserAuth } from '../../context/AuthContextProvider'

const SignIn = () => {

    const { googleSignIn } = UserAuth();

    const handleGoogleSignIn = async() => {
        try {
            await googleSignIn();
        } catch (err) {
            console.error(err)
        }
    }

  return (
    <div>
        <GoogleButton onClick={() => handleGoogleSignIn()} />
    </div>
  )
}

export default SignIn