import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //Valdiate the form Data
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    //Sign Up SIgn IN Logic

    if (!isSignInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // console.log(user);
          // navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //Sign IN Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: "Jane Q. User",
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              //navigate("/browse");
              // Profile updated!
            })
            .catch((error) => {
              // An error occurred
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
       
          src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-semibold text-3xl py-4">
          {isSignInForm ? "SignIn" : "SignUp"}
        </h1>
        {/* {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="py-2 px-2 bg-gray-600 m-2 w-full"
          />
        )} */}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="py-2 px-2 bg-gray-600 m-2 w-full"
        />
        <input
          ref={password}
          type="text"
          placeholder="Password"
          className="py-2 px-2 bg-gray-600  m-2 w-full"
        />
        <p className="py-2 px-2">{errorMessage}</p>
        <button
          className="py-4 my-10 mx-2 w-full bg-red-700"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign IN" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm} className="py-4 my-4 mx-4 cursor-pointer">
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already registered? Login IN."}
        </p>
      </form>
    </div>
  );
};
export default Login;
