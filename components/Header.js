import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="py-6 lg:absolute lg:w-full lg:left-0">
      <div className="container relative flex flex-col items-center justify-between h-full mx-auto gap-y-6 lg:flex-row">
        <a href="#">
          <Image src="/img/header/logo.svg" alt="logo" width={80} height={50} />
        </a>
        <nav className="flex text-xl gap-x-4 lg:gap-x-12">
          <a href="#">Service</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </nav>
        <button className="btn btn-primary lg:btn-outline">Sign up</button>
      </div>
    </header>
  );
};

export default Header;
