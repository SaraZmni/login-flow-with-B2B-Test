import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-300">
      <div className="container flex justify-between py-4">
        <span>Logo</span>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/register">Register</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
