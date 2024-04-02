// import Link from "next/link";
// import {
//   RegisterLink,
//   LoginLink,
// } from "@kinde-oss/kinde-auth-nextjs/components";

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-900 flex justify-between py-5 px-4 md:px-10 text-white">
//       <div className="flex justify-center items-center">
//         <img src="/PILLAR.png" alt="PILLAR_LOGO" className="w-12 h-12 md:w-20 md:h-20" />
//         <h1 className="block text-2xl font-bold md:hidden">P.I.L.L.A.R</h1>
//       </div>

//       <ul className="hidden md:flex md:flex-row gap-8 text-lg justify-center items-center">
//         <li>
//           <Link href="#">Contracts</Link>
//         </li>
//         <Link href={"/aboutus"}>About</Link>
//         <Link href={"/glossary"}>Glossary</Link>
//         <li>
//           <LoginLink>Sign in</LoginLink>
//           <RegisterLink>Sign up</RegisterLink>
//         </li>
//       </ul>

//       <p className="block md:hidden">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={2.5}
//           stroke="currentColor"
//           className="w-8 h-8"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//           />
//         </svg>
//       </p>
//     </nav>
//   );
// };

// export default Navbar;
"use client";

import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

// KINDE AUTH -
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav((prev) => !prev);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "About", to: "/about" },
    { id: 2, text: "Insights", to: "/insights" },
    { id: 2, text: "Glossary", to: "/glossary" },
  ];

  return (
    <div className="z-100 bg-gray-900 flex justify-between items-center h-24 mx-auto px-4 md:px-24 text-white">
      {/* Logo */}
      <Link href={"/"} className="flex justify-center items-center">
        <img
          src="/PILLAR.png"
          alt="PILLAR_LOGO"
          className="w-12 h-12 md:w-20 md:h-20"
        />
        <h1 className="block text-2xl font-bold md:hidden">P.I.L.L.A.R</h1>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex md:items-center md:justify-center">
        {navItems.map((item) => (
          <Link
            href={item.to}
            key={item.id}
            className="p-4 rounded-xl m-2 cursor-pointer duration-300"
          >
            {item.text}
          </Link>
        ))}
        <li className="p-4 rounded-xl m-2 cursor-pointer duration-300">
          <LoginLink>Sign in</LoginLink>
        </li>
        <li className="px-4 py-2 rounded-xl m-2 cursor-pointer duration-300 bg-slate-600">
          <RegisterLink>Sign up</RegisterLink>
        </li>
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-20 pt-10 text-center"
            : "ease-in-out w-[60%] duration-600 fixed top-0 bottom-0 left-[-100%] z-20 pt-10"
        }
      >
        {/* Mobile Logo */}
        <Link href={"/"} className="flex justify-center items-center">
          <img
            src="/PILLAR.png"
            alt="PILLAR_LOGO"
            className="w-12 h-12 md:w-20 md:h-20"
          />
          <h1 className="block text-2xl font-bold md:hidden">P.I.L.L.A.R</h1>
        </Link>

        <hr className="mt-4" />

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <Link
            href={item.to}
            key={item.id}
            className="pt-10 px-4 flex text-center flex-col text-2xl rounded-xl duration-300 cursor-pointer border-gray-600"
          >
            {item.text}
          </Link>
        ))}
        <li className="py-8 rounded-xl m-2 cursor-pointer duration-300 text-2xl">
          <LoginLink>Sign in</LoginLink>
        </li>
        <li className="p-4 rounded-xl m-2 cursor-pointer duration-300 bg-slate-600 text-2xl">
          <RegisterLink>Sign up</RegisterLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
