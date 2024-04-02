import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 flex justify-between py-5 px-4 md:px-10 text-white">
      <div className="flex justify-center items-center">
        <img src="/PILLAR.png" alt="PILLAR_LOGO" className="w-12 h-12 md:w-20 md:h-20" />
        <h1 className="block text-2xl font-bold md:hidden">P.I.L.L.A.R</h1>
      </div>

      <ul className="hidden md:flex md:flex-row gap-8 text-lg justify-center items-center">
        <li>
          <Link href="#">Contracts</Link>
        </li>
        <Link href={"/aboutus"}>About</Link>
        <Link href={"/glossary"}>Glossary</Link>
        <li>
          <LoginLink>Sign in</LoginLink>
          <RegisterLink>Sign up</RegisterLink>
        </li>
      </ul>

      <p className="block md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </p>
    </nav>
  );
};

export default Navbar;
