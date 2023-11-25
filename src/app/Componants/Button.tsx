import React from "react";

const Button = () => {
  return (
    <div className="lg:mx-80 lg:mt-10 px-8 mt=5">
      <div className="text-3xl lg:text-6xl text-custom-grey text-center font-extrabold ">
        The easiest and fastest way to
        <span className="text-custom-green"> Invest </span> in  <br/>Agriculture
      </div>
      <p className=" justify-center text-center text-custom-grey text-xs lg:text-base mt-5 px-3 lg:mt-14 lg:px-24">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis
        aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem ipsum dolor
        sit amet.Lorem ipsum dolor sit amet, consectetur
      </p>
      <div className="bg-cutext-custom-grey text-custom-grey rounded-md shadow-lg z-10 mt-8 mx-8 lg:mt-10 lg:mx-44">
        <form className="flex items-center justify-center sm:text-sm p-1">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="w-full px-2 py-1 bg-cutext-custom-grey "
          />
          <button
            type="submit"
            className="bg-custom-green w-36 h-10 text-sm text-white rounded-md px-2 md:px-4 md:ml-2 "
          >
            Get started
          </button>
        </form>
      </div>
    </div>
  );
};

export default Button;
