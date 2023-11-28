import React from 'react'
import Image from "next/image";


const Future = () => {
  return (
    <section className="md:py-20 my-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div
        className=" mx-auto max-w-7xl px-4  sm:px-6  lg:px-12  flex md:gap-40 lg:flex-justify lg:flex flex-col lg:flex-row">
        <div className="lg:inset-y-0 lg:right-0 my-10 md:w-1/2">
        <Image
                        src="/F.png"
                        width={750}
                        height={936}
                        alt="Logo"
                            />
        </div>

        <div className="sm:text-center lg:text-left md:w-1/2 ">
            <h1 className="text-5xl font-bold text-custom-grey  md:text-6xl">
            Your
                <span className="text-custom-green gap-10"> pathway  </span><br/>
                to Future Investment
            </h1>
            <p
                className="mt-10 text-sm text-custom-grey sm:mt-5 md:pr-36 sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur
            </p>
         
            <div className="group relative cursor-pointer py-2">

<div className="flex items-center  justify-between space-x-5 bg-slate-100 rounded my-5 px-4">
    <a className="menu-hover my-2 py-2 text-xs md:text-base font-medium text-custom-grey lg:mx-4">
    What is FarmVest?
    </a>
    <span>
    <Image
      src="/arrow-down.svg"
      width={25}
      height={25}
      alt="P"
    />
    </span>
</div>
<div className="flex items-center justify-between space-x-5 bg-slate-100 rounded my-5 px-4">
    <a className="menu-hover my-2 py-2 text-xs md:text-base font-medium text-custom-grey lg:mx-4">
    How safe is FarmVest
    </a>
    <span>
    <Image
      src="/arrow-down.svg"
      width={25}
      height={25}
      alt="P"
    />
    </span>
</div>
<div className="flex items-center justify-between space-x-5 bg-slate-100 rounded my-5 px-4">
    <a className="menu-hover my-2 py-2 text-xs md:text-base font-medium text-custom-grey lg:mx-4">
    What do I gain from using FarmVest?
    </a>
    <span>
    <Image
      src="/arrow-down.svg"
      width={25}
      height={25}
      alt="P"
    />
    </span>
</div>

</div>   
         
        </div>
      
    </div>

</section>  
  )
}

export default Future