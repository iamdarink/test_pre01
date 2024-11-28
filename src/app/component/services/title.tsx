import React from 'react'

export default function Solution1() {
    return (
        <div>
            <div className="relative inset-20 left-0 right-0 w-full h-[600px] mx-full">
                <div className="relative flex flex-col items-center justify-center gap-[100px] h-full text-center bg-black bg-opacity-50">
                    <img
                        src="/services/Rectangle24.png"
                        alt="Rectangle"
                        className="object-cover absolute top-0 left-0 w-full h-full z-[-1] "
                    />

                    <div>
                        <h1 className="text-[40px] mb-8 text-[#FFFFFF]">How we provide your</h1>
                        <h1 className="text-[40px] font-bold mb-8 text-[#FFFFFF] ">solution?</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
