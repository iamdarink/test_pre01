import React from 'react';

export default function Solution4() {
    const imageData = [
        {
            id: 1,
            src: "/Rectangle1.svg",
            alt: "Rectangle1",
            title: "Face Recognition Solution",
            description: "Face Recognition System includes the capability to accurately count the number of people attending events.",
            buttons: ["Web Application", "Dashboard"],
        },
        {
            id: 2,
            src: "/Rectangle2.svg",
            alt: "Rectangle2",
            title: "Visitor Management System",
            description: "Manage vehicle entries and exits effortlessly with our visitor management system.",
            buttons: ["Mobile Application", "Report"],
        },
        {
            id: 3,
            src: "/Rectangle3.svg",
            alt: "Rectangle3",
            title: "Online Queue Management System",
            description: "Maximize productivity and minimize wait times with our reliable online queue management.",
            buttons: ["Android", "Kiosk"],
        },
    ];

    return (
        <div className="p-8 text-center bg-white">
            <div className="text-center px-6 py-16 mx-auto">
                <h2 className="text-[32px] font-bold text-[#424242]">
                    Explore Our <span className="text-[#009AFF]">Solutions</span>
                </h2>
                <p className="text-[20px] text-[#616161] mt-2">
                    พบกับนวัตกรรมและความคิดสร้างสรรค์ในทุกงานของเรา!
                </p>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-center items-center gap-4 md:gap-6 lg:gap-8 w-full">
                {imageData.map((item, index) => (
                    <div
                        key={item.id}
                        className="relative w-auto h-auto rounded-lg overflow-hidden shadow-lg"
                    >
                        <div
                            className={`absolute inset-0 bg-gradient-to-b ${index === 0
                                    ? "from-[#673AB7] "
                                    : index === 1
                                        ? "from-[#009688] "
                                        : "from-[#F44336] "
                                }`}
                        />
                        <img
                            src={item.src}
                            alt={item.alt}
                            className="w-full h-full object-cover "
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 py-10 text-center">
                            <div>
                                <h3 className="text-[20px] font-bold">{item.title}</h3>
                                <p className="text-[16px] mt-2">{item.description}</p>
                            </div>
                            <div className="flex gap-[15px] mt-auto">
                                {item.buttons.map((button, buttonIndex) => (
                                    <span
                                        key={buttonIndex}
                                        className="text-[12px] text-[#424242] px-4 py-2 bg-white rounded-full"
                                    >
                                        {button}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="mt-10 text-[#616161] text-[14px] inline-block">
                View All Projects
            </button>
        </div>
    );
}
