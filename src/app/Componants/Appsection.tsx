import React from "react";
import Image from "next/image";

const Appsection = () => {
  return (
    <div className=" mx-auto lg:mx-72 lg:my-20 justify-center items-center rounded-md sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-40 bg-slate-100">
      <div
        style={{
          backgroundImage: `url(/bgg.png)`,
        }}
        className="bg-cover bg-center"
      >
      <h2 className="lg:text-4xl pt-8 text-custom-grey text-center font-bold font-spartan">
        Download <span className="text-custom-green">FarmVest app</span> <br /> and
        invest in your future
      </h2>
      <div className="flex w-full py-8 style-flex-col md:flex-row gap-y-4 gap-x-8 sm:items-center justify-center md:justify-center">
      <Image
      src="/appstore.png"
      width={100}
      height={100}
      alt="Logo"
    />
      <Image
      src="/playstore.png"
      width={100}
      height={100}
      alt="Logo"
    />
      </div>
      </div>
    </div>
  );
};

export default Appsection;
