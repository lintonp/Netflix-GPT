import React, { useState } from "react";
import Header from "./Header";

const LoginPage = () => {
  const [signUp, setSignUp] = useState(false);
  return (
    <div>
      <Header />
      <img
        className="absolute"
        alt="Background"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
      />
      <form
        className="absolute bg-black text-white p-12 mx-auto left-0 right-0 my-32 w-3/12 bg-opacity-80 rounded-md  flex flex-col items-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-semibold text-2xl m-5">
          {signUp ? "Sign Up" : "Sign In"}
        </h1>
        {signUp && (
          <input
            className="p-3 m-2 w-full bg-slate-600 rounded-md opacity-100 font-medium"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="p-3 m-2 w-full bg-slate-600 rounded-md opacity-100 font-medium"
          type="text"
          placeholder="Email or phone number"
        />
        <input
          className="p-3 m-2 w-full bg-slate-600 rounded-md opacity-100 font-medium"
          type="password"
          placeholder="Password"
        />
        <button className="bg-red-600 my-6 w-full p-2 rounded-md font-semibold  opacity-100">
          {signUp ? "Sign Up" : "Sign In"}
        </button>
        <div className="mt-4 opacity-100">
          <p className="text-slate-500">
            {signUp ? "Have an account?  " : "New to Netflix?  "}
            <span
              className="text-white cursor-pointer hover:underline font-semibold"
              onClick={() => setSignUp(!signUp)}
            >
              {signUp ? "Sign In" : "Sign Up Now"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
