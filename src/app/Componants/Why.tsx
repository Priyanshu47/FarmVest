import React from 'react'
import Image from "next/image";

const Why = () => {
  return (
    <section class="md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div
        class=" mx-auto max-w-7xl px-4  sm:px-6  lg:px-12  flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
        <div class="sm:text-center lg:text-left w-1/2 ">
         <h1 className="text-4xl font-bold text-custom-grey sm:text-5xl md:text-6xl">
            Why choose 
            <span className="text-custom-green">   FarmVest</span>
         </h1>
            <p
                class="my-3 text-sm text-custom-grey sm:mt-5 pr-36 sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac
            </p>
            <div className="flex flex-col">
          <div className="flex flex-row my-5 items-center gap-10">
                                <Image
                      src="/1.png"
                      width={60}
                      height={60}
                      alt="Logo"
                      />
                   
                      <p  className="text-sm  text-custom-grey font-medium">Real-time Checkup</p>
            </div>   
            <div className="flex flex-row my-5 items-center gap-10">
                                <Image
                      src="/1.png"
                      width={60}
                      height={60}
                      alt="Logo"
                      />
                   
                      <p  className="text-sm  text-custom-grey font-medium">Flexibility in Investment</p>
            </div>  
            <div className="flex flex-row my-5 items-center gap-10">
                                <Image
                      src="/1.png"
                      width={60}
                      height={60}
                      alt="Logo"
                      />
                   
                      <p  className="text-sm  text-custom-grey font-medium">Encrypted and Secured</p>
            </div>  
            <div className="flex flex-row my-5 items-center gap-10">
                                <Image
                      src="/1.png"
                      width={60}
                      height={60}
                      alt="Logo"
                      />
                   
                      <p  className="text-sm  text-custom-grey font-medium">Withdraw Anytime</p>
            </div>  

          </div>
 
            <button type="button"  className="bg-custom-green w-36 h-10 text-sm text-white rounded-md px-2 md:px-4 md:ml-2 md:my-5 items-center "
          > Learn More
          </button>
         
        </div>

        
        <div class="lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
src="/Why.png"
width={750}
height={936}
alt="Logo"
/>
        </div>
      
    </div>

</section>  
  )
}

export default Why