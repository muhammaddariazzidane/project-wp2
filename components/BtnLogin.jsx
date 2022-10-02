import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { FcGoogle } from "react-icons/fc";
import { FaGithubAlt } from "react-icons/fa";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./../src/firebase";
import { signInWithRedirect } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const BtnLogin = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className=" justify-center">
        <button onClick={openModal} className=" text-sm font-semibold lg:mx-6 lg:block hidden ring-1 ring-secondary text-secondary hover:bg-secondary hover:text-primary p-2 px-4 hover:scale-90 transition-all duration-300">
          <ArrowRightOnRectangleIcon className="inline-flex h-5 w-5 mr-2" />
          Login Member
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.</p>
                  </div>

                  <div className="mt-4">
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default BtnLogin;
