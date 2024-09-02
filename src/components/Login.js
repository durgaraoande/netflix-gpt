import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
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
      <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto left-0 right-0 bg-opacity-60 rounded-lg">
        <h1 className="text-2xl text-white font-bold py-4">
          {isLogin ? "Sign In" : "Sign Up"}
        </h1>
        {
          !isLogin && <input
          type="text"
          placeholder="Username"
          className="w-full p-2 my-2 bg-gray-600 text-white rounded-sm"
        />
        }
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 my-2 bg-gray-600 text-white rounded-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 my-2 bg-gray-600 text-white rounded-sm"
        />
        <button className="bg-red-700 w-full p-2 my-2 text-white rounded-lg">
          Sign In
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
