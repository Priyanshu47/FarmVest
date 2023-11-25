import React from "react";

const Navbar = () => {
  return (
    <nav class="relative flex items-center justify-between sm:h-5 md:justify-center p-8 lg:mx-28 lg:p-16">
      <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
        <div class="flex items-center text-center justify-between w-full md:w-auto lg:text-2xl font-semibold text-custom-grey">
  
            FarmVest
         
        </div>
      </div>
      <div class="hidden md:flex md:space-x-10 font-sans text-sm">
        <a
          href=""
          class="font-normal text-custom-grey transition duration-150 ease-in-out"
        >
          Home
        </a>
        <a
          href=""
          class="font-normal text-custom-grey transition duration-150 ease-in-out"
        >
          About
        </a>
        <a
          href=""
          class="font-normal text-custom-grey transition duration-150 ease-in-out"
        >
          Features
        </a>
        <a
          href=""
          target="_blank"
          class="font-normal text-custom-grey transition duration-150 ease-in-out"
        >
          How it works
        </a>
      </div>
      <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
        <span class="inline-flex rounded-md shadow ml-2">
          <a
            href=""
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-6 rounded-md text-custom-grey bg-white "
          >
            Sign In
          </a>
        </span>

        <span class="inline-flex rounded-md shadow ml-2">
          <a
            href=""
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-6  rounded-md text-white bg-custom-green "
          >
            Get started
          </a>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
