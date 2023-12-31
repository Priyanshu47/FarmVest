import React from 'react'
import Image from "next/image";

const Why = () => {
  const data = [
    {
      image: "/1.png",
      descript:"Real-time Checkup",
    },
    {
      image: "/1.png",
      descript:"Flexibility in Investment",
    },
    {
      image: "/1.png",
      descript:"Encrypted and Secured",
    },
    {
      image: "/1.png",
      descript:"Withdraw Anytime",
    },
    
  ]

  return (
    <section className="md:py-20 my-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div
        className=" mx-auto max-w-7xl px-4  sm:px-6  lg:px-12  flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
        <div className="sm:text-center md:text-left md:w-1/2 my-10">
         <h1 className="text-5xl font-bold text-custom-grey  md:text-6xl">
            Why choose 
            <span className="text-custom-green">   FarmVest</span>
         </h1>
            <p
                className="my-10 text-sm text-custom-grey  sm:mt-5 md:pr-36 sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac
            </p>
            <div className="flex flex-col">
              {data.map((val,i)=>{
                return(
                  <div className="flex flex-row my-5 items-center gap-10" key={i}>
                  <Image
                           src={val.image}
                           width={60}
                          height={60}
                           alt="Logo"
                             />
        <p  className="text-sm  text-custom-grey font-medium">{val.descript}</p>
              </div>  
                );
              })}
          


          </div>
 
            <button type="button"  className="bg-custom-green w-36 h-10 text-sm text-white rounded-md px-2 md:px-4 md:ml-2 md:my-5 mt-10 items-center "
          > Learn More
          </button>
         
        </div>

        
        <div className="lg:inset-y-0 lg:right-0 lg:w-1/2">
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