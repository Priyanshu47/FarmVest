import React from "react";
import Image from 'next/image'


const Logosection = () => {
  return (
    <div class="mx-28 my-28">
      <div class="flex flex-col justify-center">
        <div class="flex flex-wrap items-center justify-center gap-10 mt-2 md:justify-around">
        <Image
      src="/MarketWatch Logo.png"
      width={125}
      height={125}
      alt="Logo"
    />
    <Image
      src="/Forbes.com Logo.png"
      width={125}
      height={125}
      alt="Logo"
    />
    <Image
      src="/Business Insider Logo.png"
      width={125}
      height={125}
      alt="Logo"
    />
    <Image
      src="/Fidelity Management and Research Company Logo.png"
      width={125}
      height={125}
      alt="Logo"
    />
    <Image
      src="/WIRED UK Logo undefined.png"
      width={125}
      height={125}
      alt="Logo"
    />
        </div>
      </div>
    </div>
  );
};

export default Logosection;
