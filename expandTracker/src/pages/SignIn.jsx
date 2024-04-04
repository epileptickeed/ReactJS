import React, { useEffect } from 'react'
import { GoogleButton } from 'react-google-button'
import { UserAuth } from '../../context/AuthContextProvider'
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate()

    const handleGoogleSignIn = async() => {
        try {
            await googleSignIn();   
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        if (user != null) {
            navigate('/home')
        }
    }, [user])

  return (
    <div>
        <GoogleButton onClick={() => handleGoogleSignIn()} />
    </div>
  )
}

export default SignIn