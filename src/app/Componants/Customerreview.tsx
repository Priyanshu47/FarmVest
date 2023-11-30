import React from 'react'
import Image from 'next/image'


const Customerreview = () => {
  const data = [
    {
      image: "/Pic.png",
      descript:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus earum labore eos? Possimus, iure illo!",
      name:"Tonia Smart"
    },
    {
      image: "/Picture.png",
      descript:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus earum labore eos? Possimus, iure illo!",
      name:"Grace Obi"
    },
  ]

  return (
    <>
    <div className="text-custom-grey text-center lg:text-6xl text-5xl font-bold">
        What <span className="text-custom-green"> Customers  </span> have to say
    <p className="md:text-sm text-sm md:pt-10 py-10 px-16 font-normal">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/> Quo veniam asperiores, atque unde adipisci consectetur!</p>
    </div>




    <div className="px-4 md:flex md:flex-row mx-auto gap-10 justify-center sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-12">
      {data.map((val,i)=>{
        return(
          <figure className="md:flex  lg:w-2/5 lg:h-72  bg-slate-100 rounded-xl mb-10 p-8 md:p-0 dark:bg-slate-800" key={i}>
    <Image className="w-24 h-24 md:w-48 md:h-auto md:rounded-md rounded-full mx-auto object-cover" src={val.image} alt="" width="312" height="377"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4 text-slate-800">{val.descript} 
      <figcaption className="font-medium pt-28">
        <div className="text-slate-800">
        {val.name}
        </div>
      </figcaption>
    </div>
  </figure>
        )
      })}
  
</div>

    <div className="text-center m-10">
    <button className="bg-custom-green w-36 h-10 text-sm text-white rounded-md px-2 md:px-4 md:ml-2 items-center "
          > View all
          </button>
    </div>
    

</>
  )
}

export default Customerreview