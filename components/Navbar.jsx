import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex">
      <ul className="flex flex-row gap-8 justify-center items-center ">
        <h2>Logo</h2>
        <li>
          <Link href="#">Contract analysis</Link>
        </li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Navbar;
