//rafce
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Logo } from "../utils/constants";
import { addMovieDetails, addMoviePage, setToggleGptSearch } from "../utils/configSlice";

const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector((store)=>store.user);
  const gptSearch = useSelector((store) => store.config.gptSearch);
  const moviePage = useSelector((store) => store.config.moviePage);

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(removeUser())
      //navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  const handleGptSearch=()=>{
    dispatch(setToggleGptSearch());
    dispatch(addMoviePage(false));
  }

  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in,
        const { uid, email, displayName,photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName ,photoURL:photoURL}));
        if(!moviePage)
        {navigate("/browse")}
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component unmounts to prevent memory leaks
    return ()=>unsubscribe();
  }, []);

  useEffect(() => {
    if (!moviePage) {
      navigate("/browse");
    }
  }, [moviePage]);
  
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between" >
      <img className="w-44"
        src={Logo}
        alt="Logo"
      />
      {user && <div className="flex m-2">
        <button onClick={handleGptSearch} className="text-white rounded-lg text-lg bg-purple-800 px-4 my-2 mx-4">{gptSearch || moviePage?"Home Page":"GPT Search"}</button>
        {moviePage && <button onClick={()=>{
          dispatch(addMovieDetails());
        }} className="text-white rounded-md text-lg bg-purple-500 px-4 my-2 mx-4">Movie Details</button>}
        <img className="w-14 h-14" src={user.photoURL} alt="User icon"/>
        <button className="text-lg font-bold text-white" onClick={handleSignOut}>Sign Out</button>
      </div>}
    </div>
  );
};

export default Header;
