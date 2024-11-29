import React from 'react'

export default function Title() {
    return (
        <div>
            <div className="relative inset-0 left-0 right-0 w-full h-[600px] mx-full">
                <div className="relative flex flex-col items-center justify-center gap-[100px] h-full text-center bg-gradient-to-b from-gray-100">
                    <img
                        src="/projects/Rectangle28.png"
                        alt="Rectangle"
                        className="object-cover absolute top-0 left-0 w-full h-full z-[-1] "
                    />

                    <div>
                        <h1 className="text-[40px] text-[#424242]">Explore our</h1>
                        <h1 className="text-[40px] font-bold mb-8 text-[#009AFF] ">Project Solution</h1>
                        <p className="text-[#757575] text-[20px] mb-8">พบกับนวัตกรรมและความคิดสร้างสรรค์ในทุกงานของเรา!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
