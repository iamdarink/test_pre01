import React, { useState, useEffect } from "react";

export default function Solution7() {
    const footerData = [
        {
            id: 1,
            name: "Menu",
            description: ["Home", "About", "Services", "Project Solutions"],
        },
        {
            id: 2,
            name: "Services",
            description: ["Mobile Application Development", "Software Consulting", "Web Application Development"],
        },
        {
            id: 3,
            name: "Contact",
            Image: ["../phone.png", "../email.png", "../smartphone.png", "../line.png"],
            alt: ["phone1", "email", "smartphone", "Vector"],
            description: [
                "(66) 2513 6785 - 6",
                "support@iottechgroup.com",
                "(66) 2513 6788",
                "Coding hub",
                "444 Olympia Thai Plaza 5th Floor, Ratchadapisek Road, Samsaennok, Huaykwang, Bangkok 10310",
                <button className="flex items-center gap-3 px-3 py-1 bg-white text-[#424242] rounded-full">
                    <img src="/Location.svg" alt="Location icon" className="w-4 h-4" />
                    Map
                </button>
            ],
        },
    ];

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const updateScreenSize = () => {
            setIsMobile(window.innerWidth <= 820);
        };
        updateScreenSize();
        window.addEventListener("resize", updateScreenSize);
        return () => window.removeEventListener("resize", updateScreenSize);
    }, []);

    const filteredData = isMobile ? footerData.filter((item) => item.id === 3) : footerData;

    return (
        <div className="bg-[#424242] text-white">
            <div
                className={`flex flex-col ${isMobile ? "items-center text-center" : "lg:flex-row justify-between items-start"
                    } w-full max-w-[1440px] mx-auto px-4 py-8 lg:px-[80px] lg:py-[50px] gap-8`}
            >
                <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-6 lg:mr-[30px]">
                    <img src="/logo.png" alt="icon" className="w-36 h-10" />
                    <p className="text-[#EEEEEE] text-sm lg:text-base max-w-[280px] text-center lg:text-left">
                        Software Solution for Digital Transformation
                    </p>
                </div>

                <div
                    className={`flex flex-col ${isMobile ? "items-center" : "lg:flex-row justify-center lg:justify-start"
                        } w-full lg:w-auto gap-8 lg:gap-[99px]`}
                >
                    {filteredData.map((item) => (
                        <div
                            key={item.id}
                            className={`flex flex-col w-full sm:w-auto max-w-[305px] ${isMobile ? "items-center text-center" : "lg:items-start"
                                }`}
                        >
                            <h3 className="font-bold text-lg mb-4 text-[16px]">{item.name}</h3>
                            <ul className="space-y-2 text-[#EEEEEE] text-[14px]">
                                {item.description.map((subItem, index) => (
                                    <li
                                        key={index}
                                        className={`flex items-center gap-3 text-sm sm:justify-center lg:justify-start "
                                            }`}
                                    >
                                        {item.Image && item.Image[index] && (
                                            <img
                                                src={item.Image[index]}
                                                alt={item.alt ? item.alt[index] : ""}
                                                className="w-4 h-4"
                                            />
                                        )}
                                        {subItem}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
