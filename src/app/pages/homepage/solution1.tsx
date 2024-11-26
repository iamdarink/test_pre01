import React from 'react'

export default function solution1() {
    return (
        <div>

            <div className="relative inset-20 left-0 right-0 w-full h-[1024px] mx-full">
                <div className="relative flex flex-col items-center justify-center gap-[100px] h-full text-center bg-gradient-to-b from-gray-100">
                    <img
                        src="/Rectangle-18.png"
                        alt="Rectangle"
                        className="object-cover absolute top-0 left-0 w-full h-full z-[-1]"
                    />

                    <div>
                        <h1 className="text-[64px] font-bold mb-8 text-[#009AFF]">Coding Hub</h1>
                        <p className="text-[#616161] text-[24px] mb-8">We Build Software Solution for Digital Transformation</p>
                        <p className="text-[#424242] text-[16px] ">เปลี่ยนธุรกิจของคุณให้ก้าวทันโลกดิจิทัล</p>
                    </div>

                    <div>
                        <button className="px-8 py-3 bg-blue-500 text-white font-medium rounded-full shadow-md bg-gradient-to-b from-[#009AFF] to-[#0059B7] hover:opacity-50 hover:text-opacity-50 transition-all duration-300">
                            Talk with Us
                        </button>
                    </div>

                    <div className="text-blue-500 ">
                        <img src="/Shape.svg" alt="shape" />
                    </div>
                </div>
            </div>
        </div>
    )

}