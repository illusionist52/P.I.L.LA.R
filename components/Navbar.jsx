import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

const Navbar = () => {
  return (
    <nav className="flex justify-between py-5 px-4 md:px-10 shadow-xl">
      <div>
        <h2 className="font-black text-2xl">P.I.L.L.A.R</h2>
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
