'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// เมื่อกดปุ่ม อ่านอาร์เรย์ที่ละตัว
// รูปภาพและปุ่ม ข้ามไปก้อได้
// ทำรูป ข้อความเป็น responsive

export default function Home() {
  const router = useRouter();
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Data:", data[count].name);
  }, [count]);

  // useEffect(() => {
  //   console.log("data", data);
  // }, [count]);

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



  // const handleClick = () => {
  //   console.log("data", data);
  // };

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
          {/* <a href="/signin" className="px-4 font-bold">
            SIGN IN
          </a>
          <a href="/signup" className="px-4 text-rose-500 font-bold">
            SIGN UP
          </a> */}
        </div>
      </nav>
      <div className="relative">
        <img src="../image.png" alt="logo" width={100} height={100} className="w-full h-auto" />
        <div className="absolute top-[120px] left-1/2 transform -translate-x-1/2 text-white text-center">
          <h1 className="text-4xl font-bold m-14">UPGRADE YOUR SUNDAYS</h1>
          <p className="text-xl">Enjoy secret offers up to -70% off the best luxury hotels every Sunday.</p>
          <div className="flex justify-center m-14">
            <button
              className="flex justify-center bg-rose-500 text-white font-bold text-center p-[20px]"
              onClick={() => router.push('/signup')}>
              REGISTER
            </button>
          </div>
          <p className="text-l">Discover the experience</p>
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
        {/* <button onClick={handleClick}
          className="flex justify-center bg-rose-500 text-white font-bold text-center p-[20px]">
          GET STARTED
        </button> */}
      </div>
    </div >
  );
}