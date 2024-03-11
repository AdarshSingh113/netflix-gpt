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
    <div className="bg-gradient-to-b from-black to-gray-900 text-white py-4 px-6 flex justify-between items-center ">
    <img src={LOGO} alt="logo" className="h-10" />
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
