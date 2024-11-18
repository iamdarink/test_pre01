'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// เมื่อกดปุ่ม อ่านอาร์เรย์ที่ละตัว
// รูปภาพและปุ่ม ข้ามไปก้อได้

export default function Home() {
  const router = useRouter();
  const [count, setCount] = useState(0);


  //  useEffect(() => {
  //    console.log("data", data);
  //  }, [count]);

  const title = [
    {
      id: 1,
      images: "../umbrella.svg",
      title: "The best luxury hotels",
      name: "From the latest trendy boutique hotel to the iconic palace with XXL pool, go for a mini-vacation just a few subway stops away from your home."
    },
    {
      id: 2,
      images: "../helm.svg",
      title: "New experiences",
      name: "Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… your Sundays will not be alike."
    },
    {
      id: 3,
      images: "../wallet.svg",
      title: "Exclusive rates",
      name: "By registering, you will access specially negotiated rates that you will not find anywhere else."
    }
  ]

  const data = [
    {
      id: 1,
      images: "../hammer.svg",
      name: "Appointment every Wednesday 9am."
    },
    {
      id: 2,
      images: "../price.svg",
      name: "First come, first served. Our offers are in limited quantities, so be quick."
    },
    {
      id: 3,
      images: "../notifications.svg",
      name: "New offers every week. New experiences, new surprises. Your Sundays will no longer be alike."
    }
  ]

  const index = [
    { id: 1, src: "../image1.png", title: "SNORKELING" },
    { id: 2, src: "../image2.png", title: "MASSAGE" },
    { id: 3, src: "../image3.png", title: "HIKING" },
    { id: 4, src: "../image4.png", title: "TOUR" },
    { id: 5, src: "../image5.png", title: "GASTRONOMY" },
    { id: 6, src: "../image6.png", title: "SHOPPING" },
  ]


  const handleClick = () => {
    console.log("data", data);
  };

  return (
    <div className="justify-between h-screen">
      <nav className="fixed top-0 left-0 right-0 h-[70px] bg-zinc-800 text-white p-4 z-10">
        <div className="flex-1 flex justify-center text-2xl font-bold">
          ONEPIRATE
        </div>
        <div className="flex justify-end absolute top-1/2 -translate-y-1/2 right-4">
          <button
            className="px-4 font-bold"
            onClick={() => router.push('/signin')}
          >
            SIGN IN
          </button>
          <button
            className="px-4 text-rose-500 font-bold"
            onClick={() => router.push('/signup')}
          >
            SIGN UP
          </button>
        </div>
      </nav>
      <div className="relative group min-h-[400px] sm:min-h-[600px] overflow-hidden">
        <img 
          src="../image.png" 
          alt="logo" 
          width={100} 
          height={100} 
          className="w-full h-full object-cover absolute top-0 left-0" 
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-2xl sm:text-4xl font-bold mb-8">UPGRADE YOUR SUNDAYS</h1>
          <p className=" sm:text-xl max-w-2xl">Enjoy secret offers up to -70% off the best luxury hotels every Sunday.</p>
          <div className="my-8">
            <button
              className="flex justify-center bg-rose-500 text-white font-bold text-center p-[20px]"
              onClick={() => router.push('/signup')}>
              REGISTER
            </button>
          </div>
          <p className="text-sm sm:text-l">Discover the experience</p>
        </div>
      </div>
      <div className="flex flex-col p-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 space-x-9">
          {title.map((item) => (
            <div key={item.id}>
              <div className="flex flex-col items-center gap-[20px] p-[30px]">
                <Image src={item.images} alt="icon" width={50} height={50} />
                <div className="text-center text-xl font-bold p-5">{item.title}</div>
                <div className="text-lg">{item.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center text-4xl font-bold">
        How it works
      </div>
      <div className="flex flex-col p-10 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 p-15 ">
          {data.map((item) => (
            <div key={item.id}>
              <div className="flex flex-col items-center gap-[40px] p-[30px]">
                <div className="text-rose-500 text-2xl font-bold text-center">{item.id}</div>
                <Image src={item.images} alt="icon" width={50} height={50} />
                <div className="text-lg text-center">{item.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <button onClick={handleClick}
          className="flex justify-center bg-rose-500 text-white font-bold text-center p-[20px]">
          GET STARTED
        </button>
      </div>
      <div className="flex justify-center text-4xl font-bold p-10">
        For all tastes and all desires
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 ">
        {index.map((item) => (
          <div
            key={item.id}
            className="relative group h-56 sm:h-80 overflow-hidden "
          >
            <img
              src={item.src}
              className="w-full h-full object-cover  "
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-0 flex items-center justify-center">
              <h2 className="text-white text-xl font-bold  group-hover:scale-105">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
}