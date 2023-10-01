import React, { useState } from "react";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import App, { app } from "../firebase.config";
import { motion } from "framer-motion";
import { useStateValue } from "../Context/StateProvider";
import { actionType } from "../Context/reducer";
const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user }, dispatch] = useStateValue();
  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    }
  };
  const logout = () => {};

  return (
    <div className="fixed z-50 w-screen  p-2 px-16 ">
      {/* {desktop and tablet} */}
      <div className="hidden md:flex w-full h-full p-4">
        <div className="flex item-center gap-2">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src="https://www.netsolutions.com/insights/wp-content/uploads/2021/11/essential-feature-of-building-an-on-demand-food-ordering-app.jpg"
            className="w-8 object-cover rounded-xl"
            alt=""
          />
          <p className="text-headingColor text-xl font-bold ">City</p>
        </div>
        <ul className="flex items-center gap-8 ml-auto  ">
          <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Home
          </li>
          <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Menu
          </li>
          <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            About Us
          </li>
          <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Service
          </li>
          <div className="relative text-[1.3rem] ">
            <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
            <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs p-[2px] text-red-600 font-semibold">2</p>
            </div>
          </div>
          <div className="relative">
            <motion.img
              wwhileTap={{ scale: 0.6 }}
              className="w-12 rounded-3xl  "
              src={
                user
                  ? user.photoURL
                  : "https://tse1.mm.bing.net/th?id=OIP.HovO5ggppGE4c0vQq5NrsAHaE8&pid=Api&rs=1&c=1&qlt=95&w=140&h=93"
              }
              onClick={login}
            />
            <div className="w-40 bg-gray-100 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 ">
              <p className="px-4 py-2 flex items-center gap-3 cursor pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">
                New Item <MdAdd />
              </p>
              <p className="px-4 py-2 flex items-center gap-3 cursor pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">
                LOgout <MdLogout />
              </p>
            </div>
          </div>
        </ul>
      </div>

      {/* mobile only*/}
      <div className="flex md:hidden w-full h-full bg-blue-600 p-4"></div>
    </div>
  );
};

export default Header;
