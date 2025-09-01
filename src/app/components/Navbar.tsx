import Link from "next/link";
import React from "react";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { Home, ShoppingBag } from "lucide-react";
import { Bell } from "lucide-react";
import ShoppingCartIcon from "./ShoppingCartIcon";
function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200">
      {/* LEFT */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="ecologo"
          width={36}
          height={36}
          className="w-9 h-9 md:h-9"
        />
        <p className="text-lg font-medium tracking-wide">ECOTREND</p>
      </Link>
      {/* RIGHT */}
      <div className="flex items-center gap-6">
        <SearchBar />
        <Link href="/">
          <Home className="w-4 h-4 text-gray-600" />
        </Link>
        <Bell className="w-4 h-4 text-gray-600" />
        <ShoppingCartIcon />
        <Link href="/login">Sign in</Link>
      </div>
    </nav>
  );
}

export default Navbar;
