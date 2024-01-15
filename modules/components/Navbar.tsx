import Image from "next/image";
import React from "react";
import Link from "next/link";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        <Image src="/logo.png" width={45} height={45} alt="logo" />
        <p>Text-Flow</p>
      </Link>
      <div className="links">
        <p>Profile</p>
      </div>
    </nav>
  );
};

export default Navbar;
