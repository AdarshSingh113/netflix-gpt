import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, Profile } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        //navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch,navigate]);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
    <img src={LOGO} alt="logo" className="w-36 mx-auto md:mx-0" />
    {user && (
      <div className="flex items-center">
        <img
          className="w-10 h-10 mr-2 "
          src={Profile}
          alt="Profile"
        />
        <button
          onClick={handleSignOut}
          className="bg-transparent hover:bg-gray-600 text-gray-300 hover:text-white py-2 px-4 border border-gray-600 hover:border-transparent rounded"
        >
          Sign Out
        </button>
      </div>
    )}
  </div>
  );
};

export default Header;
