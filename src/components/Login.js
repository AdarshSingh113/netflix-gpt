import { useState } from "react";
import Header from "./Header";

const Login=()=>{
    const[isSignInForm , setIsSignForm] = useState(true);

     const toggleSignInForm = () =>{
      setIsSignForm(!isSignInForm);
     }
    return(
        <div>
            <Header/>
            <div className="absolute">
              <img 
              src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg"
             alt="background"  /> 
             </div>
             <form className="w-2/6 absolute p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 text-white">
                <h1 className="font-semibold text-3xl py-4">
                {isSignInForm ? "SignIn" : "SignUp"} 
                </h1>
                {!isSignInForm && <input type="text" placeholder="Email Address" 
                className="py-2 px-2 bg-gray-600 m-2 w-full"
                />}
                <input type="text" placeholder="Email Address" 
                className="py-2 px-2 bg-gray-600 m-2 w-full"
                />
                <input type="text" placeholder="Password"
                className="py-2 px-2 bg-gray-600  m-2 w-full"
                />
                <button className="py-4 my-10 mx-2 w-full bg-red-700">Sign In</button>
                <p onClick={toggleSignInForm} className="py-4 my-4 mx-4 cursor-pointer">
                {isSignInForm ? "New to Netflix? Sign up now." : "Already registered? Login IN."} 
                    </p>
                </form>        
        </div>
    )
}
export default Login;