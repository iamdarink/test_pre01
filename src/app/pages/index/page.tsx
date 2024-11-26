import router from 'next/router'
import React from 'react'
import { useState } from 'react'

const buttonLabels: string[] = ["Home", "About", "Services", "Project Solutions", "Contact"];

export default function Index() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleNavigation = (label: string) => {
        const route = label.toLowerCase().replace(' ', '-');
        router.push(`/${route}`);
    };

    return (
        <div>
            <nav className="fixed top-0 left-0 right-0 flex justify-between px-20 py-5 bg-white">
                <div className="w-[142.86px] h-[40px]">
                    <img src="/logo.png" alt="icon" />
                </div>

                {/*  menuBar 
                <button
                    className="block md:hidden text-gray-800"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className="w-[24px] h-[24px]">
                        <img src="/hamburger.svg" alt="icon" />

                    </div>
                </button> */}

                <div className="w-[688px] flex items-center gap-[50px] h-[35px]">
                    {buttonLabels.map((label, index) => (
                        <button
                            key={index}
                            onClick={() => handleNavigation(label)}
                            className={`px-4 py-2 rounded transition duration-300 text-[15px] flex items-center justify-center ${label === "Home"
                                ? "text-[#009AFF]"
                                : label === "Project Solutions"
                                    ? " w-[190px] h-[35px] hover:text-sky-400"
                                    : label === "Contact"
                                        ? "bg-[#009AFF] px-4 py-2 rounded-[8px] w-[113px] h-[35px] text-white hover:bg-sky-400 gap-[8px] "
                                        : "text-gray-800 hover:text-sky-400"
                                }`}
                        >
                            {label === "Contact" && (
                                <img src="/phone.svg" alt="Contact" className="w-[19px] h-[19px] mr-[2px]" />
                            )}
                            <span>{label}</span>
                        </button>
                    ))}
                </div>
            </nav>
            <div className="w-[1440px] h-[1024px] flex flex-col gap-[100px]">
      <div className="flex items-center justify-center bg-blue-500 w-full h-20">
        <p className="text-black text-2xl font-bold">Coding Hub</p>
      </div>
      <div className="flex flex-row items-center justify-between  w-full h-full">
        <p className="text-black text-lg">Left Content</p>
        <p className="text-black text-lg">Right Content</p>
      </div>
    </div>
            <div className="w-[1440px] h-[1024px] flex flex-col gap-[100px] opacity-0 bg-gray-100">

            </div> 

            <div className=" h-auto p-8 gap-8 md:gap-[30px]  flex flex-col ">
                <div className="flex items-center justify-center w-[445px] h-[70px] gap-[10px]">
                    <div className="w-[410px] h-[36px] gap-[8px]">
                        <p className="text-[#424242] font-bold text-[32px]">EXPLORE OUR</p>
                        <p className="text-[#424242] font-bold text-[32px]">SOLUTIONS</p>
                    </div>
                    <p className="text-[#424242] font-bold text-[32px]">พบกับนวัตกรรมและความคิดสร้างสรรค์ในทุกงานของเรา!</p>
                </div>
                <div className="w-[360px] h-[380px] flex gap-[30px] mr-[100px]">
                    <img src="/group-1.png" alt="group-1" />
                    <img src="/group-2.png" alt="group-2" />
                    <img src="/group-3.png" alt="group-3" />
                </div> 
                <button>
                    View All Projects
                </button>
            </div>
            <button className="fixed bottom-4 right-4 bg-blue-500 text-white w-20 h-20 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-blue-600">
                <img src="/live-chat.svg" alt="chat" />
            </button>
            <img src="/contact-cta.png" alt="contact-cta"/>
            <footer>
                <img src="/footer.png" alt="footer" />
            </footer>
        </div>

    )
}