import Link from 'next/link';


const Navbar = () => {
  return (
    <nav className="navbar bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">My Portfolio </div>
        <div className="flex space-x-4">
          <Link href="/" className="nav-link text-white">Home</Link>
          <Link href="/About" className="nav-link text-white">About me</Link>
          <Link href="/Skills" className="nav-link text-white">Skills </Link>
          <Link href="/Projects" className="nav-link text-white">Projects </Link>
          <Link href="/Contact" className="nav-link text-white">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

