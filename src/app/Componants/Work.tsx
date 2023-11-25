import React from 'react'
import Image from "next/image";

const Work = () => {
  return (
    <>
    <section class="md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

    <div
        class=" mx-auto max-w-7xl px-4  sm:px-6  lg:px-12  flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
        <div class="sm:text-center lg:text-left w-1/2 ">
            <h1 class="text-4xl font-bold text-custom-grey sm:text-5xl md:text-6xl">
              How
                <span className="text-custom-green gap-10"> FarmVest </span><br/>
                Works
            </h1>
            <p
                class="mt-3 text-sm leading-relaxed tracking-wide text-custom-grey sm:mt-5 pr-36 sm:max-w-xl sm:mx-auto md:my-5 lg:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur
            </p>
          <div className="flex flex-col">
          <div className="flex flex-row my-5">
                                <Image
                      src="/1.png"
                      width={80}
                      height={80}
                      alt="Logo"
                      />
                     <div  className="ml-10 lg:mr-48">
                     <h1 className="mb-2 text-sm font-bold text-custom-grey">Download FarmVest</h1>
                      <p  className="text-sm font-light text-custom-grey">Start by downloading FarmVest app on your Android or IOS</p>
                     </div>
            </div>   

          </div>
         <div className="flex flex-row my-6">
         <Image
                      src="/2.png"
                      width={80}
                      height={80}
                      alt="Logo"
                      />
                     <div  className="ml-10 lg:mr-48">
                     <h1 className="mb-2 text-sm font-bold text-custom-grey">Create account</h1>
                      <p  className="text-sm font-light text-custom-grey">Start by downloading FarmVest app on your Android or IOS</p>
                     </div>s

         </div>
         <div className="flex flex-row my-6">
         <Image
                      src="/3.png"
                      width={80}
                      height={80}
                      alt="Logo"
                      />
                     <div  className="ml-10 lg:mr-48">
                     <h1 className="mb-2 text-sm font-bold text-custom-grey">Link your bank account</h1>
                      <p  className="text-sm font-light text-custom-grey">Start by downloading FarmVest app on your Android or IOS</p>
                     </div>s

         </div>
         <div className="flex flex-row my-6">
         <Image
                      src="/4.png"
                      width={80}
                      height={80}
                      alt="Logo"
                      />
                     <div  className="ml-10 lg:mr-48">
                     <h1 className="mb-2 text-sm font-bold text-custom-grey">Create account</h1>
                      <p  className="text-sm font-light text-custom-grey">Start by downloading FarmVest app on your Android or IOS</p>
                     </div>s

         </div>
                 </div>

        
        <div class="lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image 
                      src="/work.png"
                      width={750}
                      height={936}
                      alt="Logo"
                      />
        </div>
      
    </div>

</section>  
</>
  )
}

export default Work

