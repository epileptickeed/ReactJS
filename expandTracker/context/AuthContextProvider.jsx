import { useContext, createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  getAuth,
  createUserWithEmailAndPassword,
  getRedirectResult,
} from 'firebase/auth';
import { auth, db } from '../config/firebase';
import { Timestamp, doc, serverTimestamp, setDoc } from 'firebase/firestore';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  

  const googleSignIn = async() => {
    const provider = new GoogleAuthProvider()

    signInWithRedirect(auth, provider)
  };

  const logOut = () => {
    signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if(currentUser){
        setDoc(doc(db, "users", currentUser.uid), {
          userId: currentUser.uid,
          email: currentUser.email,
          username: currentUser.displayName,
          date: serverTimestamp(),
        });  
      }

      // 09.04.24 ^^^^ сделал теперь когда заходить кто-то то создаётся новый юзер в users 
      // TODO: сделать чтоб теперь разная инфа отображалась в зависимости от юзера, надеюсь это видео поможет => https://www.youtube.com/watch?v=D9W7AFeJ3kk
      console.log(currentUser)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};