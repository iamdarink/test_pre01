import router from "next/router";
import React from "react";

export default function Solution3() {
    const imageData = [
        { id: 1, src: "/image15.svg", alt: "image15" },
        { id: 2, src: "/image16.svg", alt: "image16" },
        { id: 3, src: "/image20.svg", alt: "image17" },
        { id: 4, src: "/image17.svg", alt: "image18" },
        { id: 5, src: "/image18.svg", alt: "image19" },
        { id: 6, src: "/image19.svg", alt: "image20" },
    ];

    return (
        <div className="bg-white">
                <div className="text-center md:text-center lg:text-start px-10 py-16 bg-white mx-auto">
                    <h2 className="text-[32px] font-bold text-[#424242]">
                        Trusted by Our <span className="text-[#009AFF]">Partners</span>
                    </h2>
                    <p className="text-[20px] text-[#616161] mt-2">
                        พาร์ทเนอร์ที่ไว้วางใจให้เราสร้างนวัตกรรม
                    </p>
                </div>
                <div
                    className="relative flex flex-wrap justify-center lg:justify-between items-center 
                               gap-4 md:gap-8 lg:gap-[30px] px-4 md:px-8 "
                >
                    {imageData.map((image) => (
                        <img
                            key={image.id}
                            src={image.src}
                            alt={image.alt}
                            className="w-[60px] h-auto sm:w-[80px] md:w-[100px]"
                        />
                    ))}
                </div>
            </div>
    );
}
