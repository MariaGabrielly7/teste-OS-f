import Link from 'next/link';

const Header = () => (
  <header className="w-full p-4 bg-gray-800 text-white flex justify-between items-center">
    <nav>
      <ul className="flex space-x-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/board">Board</Link></li>
        <li><Link href="/service">Service</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/join">Join</Link></li>
      </ul>
    </nav>
    <div className="space-x-4">
      <Link href="/signin">Sign In</Link>
      <Link href="/signup">Sign Up</Link>
    </div>
  </header>
);

export default Header;
