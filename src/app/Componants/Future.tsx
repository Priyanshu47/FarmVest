import React from 'react'
import Image from "next/image";


const Future = () => {
  return (
    <section class="md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div
        class=" mx-auto max-w-7xl px-4  sm:px-6  lg:px-12  flex gap-40 lg:flex-justify lg:flex flex-col lg:flex-row">
        <div class="lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
                        src="/F.png"
                        width={750}
                        height={936}
                        alt="Logo"
                            />
        </div>

        <div class="sm:text-center lg:text-left w-1/2 ">
            <h1 class="text-4xl font-bold text-custom-grey sm:text-5xl md:text-6xl">
            Your
                <span className="text-custom-green gap-10"> pathway  </span><br/>
                to Future Investment
            </h1>
            <p
                class="mt-3 text-xs text-custom-grey sm:mt-5 pr-36 sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur
            </p>
         
            <div class="group relative cursor-pointer py-2">

<div class="flex items-center justify-between space-x-5 bg-custext-custom-grey rounded my-5 px-4">
    <a class="menu-hover my-2 py-2 text-base font-medium text-custom-grey lg:mx-4" onClick="">
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
<div class="flex items-center justify-between space-x-5 bg-custext-custom-grey rounded my-5 px-4">
    <a class="menu-hover my-2 py-2 text-base font-medium text-custom-grey lg:mx-4" onClick="">
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
<div class="flex items-center justify-between space-x-5 bg-custext-custom-grey rounded my-5 px-4">
    <a class="menu-hover my-2 py-2 text-base font-medium text-custom-grey lg:mx-4" onClick="">
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