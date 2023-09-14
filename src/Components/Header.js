import { useDispatch, useSelector } from "react-redux";
import netflixLogo from "../Utils/Images/Netflix_Logo_PMS.png";
import { addUser, removeUser } from "../Store/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "../Utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { toggleGPT } from "../Store/GPTSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gpt = useSelector((store) => store.gpt.showGPT);

  const isSignedIn = Object.keys(user).length !== 0;

  const handleGPT = () => {
    dispatch(toggleGPT());
    console.log("clicked");
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid, displayName, email }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div
      className={
        isSignedIn && gpt
          ? "absolute z-10 flex justify-between w-full bg-black"
          : "absolute z-10 flex justify-between w-full bg-gradient-to-b from-black"
      }
    >
      <div>
        <img className="h-14 mt-2" alt="Netflix Logo" src={netflixLogo} />
      </div>
      {Object.keys(user).length !== 0 && (
        <div>
          <button
            onClick={handleGPT}
            className="bg-purple-700 text-white mx-2 my-3 px-2 py-1 font-semibold rounded-lg text-lg"
          >
            {gpt ? "GPT" : "Browse Page"}
          </button>
          <button
            onClick={handleSignOut}
            className="font-bold text-lg text-white mx-4 my-2 p-1"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
