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
import { Timestamp, addDoc, collection, doc, getDoc, getDocs, serverTimestamp, setDoc } from 'firebase/firestore';

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


  //     // 09.04.24 ^^^^ сделал теперь когда заходить кто-то то создаётся новый юзер в users 
  //     // TODO: сделать чтоб теперь разная инфа отображалась в зависимости от юзера, надеюсь это видео поможет => https://www.youtube.com/watch?v=D9W7AFeJ3kk
  //     // ^^^^ вроде бы нет, теперь пытаюсь сделать чтоб при создании нового юзера у него создавалась коллекция expenses


  const tagsData = {
    FoodTag: { title: "Food", emoji: "🍕"},
    HealthTag: { title: "Health", emoji: "💊"},
    HolidayTag: { title: "Holiday", emoji: "⛱"},
    RentTag: { title: "Rent", emoji: "🏡"},
    GiftTag: { title: "Gift", emoji: "🎁"},
    EducationTag: { title: "Education", emoji: "📖"},
    ClothesTag: { title: "Clothes", emoji: "👕"},
    GroceriesTag: { title: "Food", emoji: "🥩"}
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);  
      if(currentUser){
        const userDocRef = doc(db, "users", auth.currentUser.uid)
        const userDocSnap = await getDoc(userDocRef)
        if(!userDocSnap.exists()) {
          await setDoc(doc(db, "users", currentUser.uid), {
            userId: currentUser.uid,
            email: currentUser.email,
            username: currentUser.displayName,
            date: serverTimestamp(),
          });
        }
  
        // create a tags for newly created users
        const tagsCollectionRef = collection(userDocRef, "tags");

        for (const [tagKey, tagValue] of Object.entries(tagsData)) {
          const tagDocRef = doc(tagsCollectionRef, tagKey);
          await setDoc(tagDocRef, tagValue);
        }
      }
    });
    
    return () => {
        unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user, setUser, onAuthStateChanged }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};