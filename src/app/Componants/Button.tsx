import React from "react";

const Button = () => {
  return (
    <div className="md:mx-10 md:mt-10 px-8">
      <div className="text-5xl md:text-5xl lg:text-6xl pt-8 text-custom-grey text-center font-extrabold ">
        The easiest and fastest way to
        <span className="text-custom-green"> Invest </span> in  <br/>Agriculture
      </div>
      <p className=" justify-center text-center text-custom-grey text-sm md:text-base my-14 px-3 md:mt-14 md:px-24">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis
        aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem ipsum dolor
        sit amet.Lorem ipsum dolor sit amet, consectetur
      </p>
      <div className="text-custom-grey rounded-md shadow-lg z-10 my-14 mx-8 md:mt-10 md:mx-44">
        <form className="flex items-center justify-center sm:text-xs p-1">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="w-full px-2 py-1 text-sm"
          />
          <button
            type="submit"
            className="bg-custom-green w-36 h-10 text-xs text-white rounded-md px-2 md:px-4 md:ml-2 "
          >
            Get started
          </button>
        </form>
      </div>
    </div>
  );
};

export default Button;
