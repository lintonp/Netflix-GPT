import React, { useRef, useState } from "react";
import Header from "./Header";
import {
  validateSignInForm,
  validateSignUpForm,
} from "../Utils/FormValidations";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { Netflix_BG_Image_URL } from "../Utils/Constants";

const LoginPage = () => {
  const [signUp, setSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef();
  const password = useRef();
  const name = useRef();

  const handleOnClick = () => {
    const errMsg = signUp
      ? validateSignUpForm(
          name.current.value,
          email.current.value,
          password.current.value
        )
      : validateSignInForm(email.current.value, password.current.value);

    setErrorMessage(errMsg);

    if (errMsg === null) {
      //Sign In/Up User
      if (signUp) {
        //Sign Up
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            // const user = userCredential.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " - " + errorMessage);
            // ..
          });
      } else {
        //Sign In
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            // console.log("sing in then block");
            // const user = userCredential.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " - " + errorMessage);
          });
      }
    }

    //Set name and password to "";
  };

  return (
    <div>
      <Header />
      <img
        className="absolute h-screen object-cover md:w-screen"
        alt="Background"
        src={Netflix_BG_Image_URL}
      />
      <form
        className="absolute bg-black text-white p-12 mx-auto left-0 right-0 my-32 w-10/12 md:w-3/12 bg-opacity-80 rounded-md  flex flex-col items-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-semibold text-2xl m-5">
          {signUp ? "Sign Up" : "Sign In"}
        </h1>
        {signUp && (
          <input
            ref={name}
            className="p-3 m-2 w-full bg-slate-600 rounded-md opacity-100 font-medium"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="p-3 m-2 w-full bg-slate-600 rounded-md opacity-100 font-medium"
          type="text"
          placeholder="Email or phone number"
        />
        <input
          ref={password}
          className="p-3 m-2 w-full bg-slate-600 rounded-md opacity-100 font-medium"
          type="password"
          placeholder="Password"
        />
        {errorMessage && (
          <p className="p-1 m-1 text-red-600 font-medium">{errorMessage}</p>
        )}
        <button
          className="bg-red-600 my-6 w-full p-2 rounded-md font-semibold  opacity-100"
          onClick={handleOnClick}
        >
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
