import Image from "next/image";
import Footer from "./Componants/Footer";
import Navbar from "./Componants/Navbar";
import Button from "./Componants/Button";
import Logosection from "./Componants/Logosection";
import Appsection from "./Componants/Appsection";
import Customerreview from "./Componants/Customerreview";
import Work from "./Componants/Work";
import Future from "./Componants/Future";
import Why from "./Componants/Why";

export default function Home() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(/bg.png)`,
        }}
        className="h-screen bg-cover bg-center text-white"
      >
        <Navbar />
        <Button />
        <Logosection />
         
        <Work />
        <Future />
        <Why />
        <Customerreview />
        <Appsection /> 
        <Footer />
      </div>
    </>
  );
}
