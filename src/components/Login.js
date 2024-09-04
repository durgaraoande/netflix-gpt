import React, { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Avatar_Url } from "../utils/constants";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [msg, setMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);

  const handleSubmit = () => {
    const message = validate(
      email.current?.value,
      password.current?.value,
      userName.current?.value
    );
    console.log(message);
    setMsg(message);

    if (message) return;

    if (!isLogin) {
      //sign up
      createUserWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            email: email.current?.value,
            password: password.current?.value,
            displayName: userName.current?.value,
            photoURL:
              Avatar_Url,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              //navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMsg(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in
      signInWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          //navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMsg(errorCode + "-" + errorMessage);
        });
    }
  };

  const handleLogin = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg"
          alt="Background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black w-3/12 my-36 mx-auto left-0 right-0 bg-opacity-60 rounded-lg"
      >
        <h1 className="text-2xl text-white font-bold py-4">
          {isLogin ? "Sign In" : "Sign Up"}
        </h1>
        {!isLogin && (
          <input
            ref={userName}
            type="text"
            placeholder="Username"
            className="w-full p-2 my-2 bg-gray-600 text-white rounded-sm"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="w-full p-2 my-2 bg-gray-600 text-white rounded-sm"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full p-2 my-2 bg-gray-600 text-white rounded-sm"
        />
        <p className="text-red-500 text-lg">{msg}</p>
        <button
          className="bg-red-700 w-full p-2 my-2 text-white rounded-lg"
          onClick={handleSubmit}
        >
          {isLogin ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-white p-2 m-2 cursor-pointer" onClick={handleLogin}>
          {isLogin
            ? "New to Netflix? Sign Up now.."
            : "Already have account? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
