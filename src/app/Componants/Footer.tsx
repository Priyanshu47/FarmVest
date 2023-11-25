import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div class="bg-slate-100">
    <div class="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-custom-grey">
      <div class="grid gap-20 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-3">
        <div >
          <Image className="mb-5 mt-2"
      src="/Logo.png"
      width={80}
      height={80}
      alt="Logo"
    />
            <p class="text-xs text-custom-grey w-52 ">
            High level experience in web design and development knowledge, producing quality work.
            </p>
        </div>
        <div >
        <p class="text-xs text-custom-grey mb-5">Subscribe to stay tuned for new web design and latest updates. Let do it! </p>
        <form className="flex items-center justify-center rounded-md bg-slate-200 sm:text-sm p-1">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="w-full px-2 py-1 bg-slate-200 text-custom-grey "
          />
          <button
            type="submit"
            className="bg-custom-green w-36 h-10 text-sm text-white rounded-md px-2 md:px-4 md:ml-2 "
          >
            Subscribe
          </button>
        </form>
        </div>
        <div class="w-full flex flex-row">
        <div class="w-1/2">
          <span class="text-xs font-bold tracking-wide text-custom-grey">
            Follow Us
          </span>
          <div class="flex items-center mt-3 space-x-3">
         
          <Image
      src="/insta.svg"
      width={30}
      height={30}
      alt="Logo"
    />
     <Image
      src="/fac.svg"
      width={30}
      height={30}S
      alt="Logo"
    />
     <Image
      src="/twi.svg"
      width={30}
      height={30}
      alt="Logo"
    />
           
          </div>
        </div>
        <div class="w-1/2">
        <span class="text-xs font-bold tracking-wide text-custom-grey">
            Call Us
          </span>
          <p class="text-xs text-custom-grey my-3">
          +2349123456789
          </p>
        </div>
        </div>
      </div>
      <div class="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p class="text-xs text-gray-600">
          © 2023  All rights reserved.
        </p>
        <ul class="text-xs flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
         
          <li>
            <a
              href="/"
              class="text-xs text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              class="text-xs text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Terms &amp; Conditions
            </a>
          </li>
          <li>
            <a
              href="/"
              class="text-xs text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Sales and Refunds    Legal  Site Map
            </a>
          </li>
          <li>
            <a
              href="/"
              class="text-xs text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
            Legal
            </a>
          </li>
          <li>
            <a
              href="/"
              class="text-xs text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
             Site Map
            </a>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Footer;
