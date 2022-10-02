import React from "react";
import { FaGithubAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../src/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Login = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  return (
    <>
      <section className="bg-dark mt-8">
        <div className="w-full lg:w-4/12 px-4 mx-auto pt-6">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h6 className="text-dark text-sm font-bold">Sign in with</h6>
              </div>
              <div className="btn-wrapper text-center">
                <button
                  onClick={googleSignIn}
                  className="bg-white  text-dark  px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                  type="button"
                >
                  <FcGoogle className="w-5 h-5 inline-flex mr-1" />
                  Google
                </button>
                <button
                  className="bg-white  text-dark  px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                  type="button"
                >
                  <FaGithubAlt className="w-5 h-5 inline-block mr-1" />
                  Github
                </button>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <div className="text-dark text-center mb-3 font-bold">
                <small>Or sign in with credentials</small>
              </div>
              <form>
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-dark text-xs font-bold mb-2" for="grid-password">
                    Email
                  </label>
                  <input type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-dark bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email" />
                </div>
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-dark text-xs font-bold mb-2" for="grid-password">
                    Password
                  </label>
                  <input
                    type="password"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-dark bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Password"
                  />
                </div>

                <div className="text-center mt-6">
                  <button className="bg-white text-dark text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg e mr-1 mb-1 w-full ease-linear transition-all duration-150" type="button">
                    {" "}
                    Sign In{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
