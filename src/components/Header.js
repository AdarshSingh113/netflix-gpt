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
    <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
      <img
        className="w-24 cursor-pointer"
       src={LOGO}
        alt="Netflix Logo"
      />
      {user && (
        <div className="flex items-center mx-4 px-4">
          <img
          className="w-10 h -10 mr-2"
          src={Profile}
          alt="Profile"
          />
        <button
          className="text-white hover:text-gray-400"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
      )}
    </div>
  );
};

export default Header;
