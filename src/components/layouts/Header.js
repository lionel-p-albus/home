import Link from "next/link";

function Header() {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/blog/post1?foo=xx&pid=xx">
        <a target="_blank">Blog</a>
      </Link>
    </nav>
  );
}

export default Header;