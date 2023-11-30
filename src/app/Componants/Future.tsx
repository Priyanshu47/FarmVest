import React from 'react'
import Image from "next/image";


const Future = () => {
  const data = [
    {
      title:"What is FarmVest ?",
      descript:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe eveniet cumque illo, suscipit blanditiis recusandae obcaecati. Neque mollitia eaque non.",
    },
    
    {
      title:"How safe is FarmVest",
      descript:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe eveniet cumque illo, suscipit blanditiis recusandae obcaecati. Neque mollitia eaque non.",
    },
    {
      title:"What do I gain from using FarmVest ?",
      descript:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe eveniet cumque illo, suscipit blanditiis recusandae obcaecati. Neque mollitia eaque non.",
    },
  ]
  return (
    <section className="md:py-20 my-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div
        className=" mx-auto max-w-7xl px-4  sm:px-6  lg:px-12  flex md:gap-40 lg:flex-justify lg:flex flex-col lg:flex-row">
        <div className="lg:inset-y-0 lg:right-0 md:w-1/2">
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
                className="mt-10 text-sm text-custom-grey sm:mt-5 md:pr-20 sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur
            </p>
         
            <div>
    {data.map((val,i)=>{
      return(
        <div className="dropdown inline-block relative w-full" key={i}>
        <button className="w-full text-custom-grey font-semibold px-5 inline-flex items-center  justify-between bg-slate-100 rounded mt-5 mb-2">
          <h1 className="mr-1 my-2 py-2 text-xs md:text-base font-light text-custom-grey ">{val.title}</h1>
          <Image
            src="/arrow-down.svg"
            width={20}
            height={20}
            alt="P"
          />
        </button>
        <ul className="dropdown-menu absolute hidden text-custom-grey z-50">
          <li className=""><p className="rounded-t bg-gray-100 text-xs md:text-base font-light py-2 px-4 block whitespace-no-wrap" href="#">{val.descript}</p></li>
          
        </ul>
      </div>
      
      );
    })}

</div>
         
        </div>
      
    </div>

</section>  
  )
}

export default Future