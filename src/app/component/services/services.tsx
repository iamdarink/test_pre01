import { title } from "process";
import React, { useState } from "react";

export default function Solution2() {
    const [activeTab, setActiveTab] = useState(1);
    const data = [
        {
            id: 1,
            images: "../detail/brain-circuit.png",
            title: "Infrastructure and Operations",
            description: "This category is foundational, ensuring businesses have scalable and secure technological infrastructures to support growth and innovation. It encompasses cloud computing for flexible resource management, DevOps for streamlined software deployment, cybersecurity measures to protect vital data, and IoT to enhance operational efficiencies through real-time insights. These components collectively ensure a robust platform for digital transformation.",
            items: [
                {
                    name: "Cloud Computing",
                    subName: "The backbone of digital infrastructure, offering scalable and flexible computing resources."
                },
                {
                    name: "DevOps Tools",
                    subName: "Facilitate continuous integration and delivery, improving software development and operational efficiency."
                },
                {
                    name: "Cybersecurity Solutions",
                    subName: "Essential for protecting digital assets and ensuring data integrity and business continuity."
                },
                {
                    name: "Internet of Things (IoT)",
                    subName: "Connects devices and sensors for real-time data collection and operations management."
                }
            ]

        },
        {
            id: 2,
            images: "../detail/display-chart.png",
            title: "Data Management and Analytics",
            description: "Data Management and Analytics is crucial for turning large volumes of data into actionable insights and strategic information. It combines the power of Big Data Analytics to process and understand complex datasets, AI and ML to predict trends and automate decisions, and Blockchain for secure and transparent transaction records. This synergy enables businesses to optimize operations, innovate, and tailor customer experiences.",
            items: [
                {
                    name: "Big Data Analytics",
                    subName: "Tools to process and analyze large datasets for insights that inform business decisions."
                },
                {
                    name: "AI and Machine Learning",
                    subName: "Powers predictive analytics, automation, and enhanced decision-making capabilities."
                },
                {
                    name: "Blockchain",
                    subName: "Provides a secure and transparent way to manage transactions and data integrity across networks."
                }
            ]
        },
        {
            id: 3,
            images: "../detail/user-group.png",
            title: "Customer and User Experience",
            description: "Data Management and Analytics is crucial for turning large volumes of data into actionable insights and strategic information. It combines the power of Big Data Analytics to process and understand complex datasets, AI and ML to predict trends and automate decisions, and Blockchain for secure and transparent transaction records. This synergy enables businesses to optimize operations, innovate, and tailor customer experiences.",
            items: [
                {
                    name: "Customer Relationship Management (CRM)",
                    subName: "Manages customer interactions and data throughout the customer lifecycle."
                },
                {
                    name: "Digital Experience Platforms (DXP)",
                    subName: "Offers personalized, content-rich digital experiences across multiple channels."
                },
                {
                    name: "Enterprise Resource Planning (ERP)",
                    subName: "Enhances customer service and user experience by streamlining operations and providing better data visibility."
                }
            ]
        }
    ];

    const serviceData = [
        {
            image: "../services/mobile-light.png",
            title: "Mobile Application Development",
            description: "Our expert team specializes in crafting bespoke mobile solutions that elevate your business to new heights. With proficiency in iOS, Android, and cross-platform development, we offer comprehensive services tailored to your unique needs."
        },
        {
            image: "../services/web.png",
            title: "Web Application Development",
            description: "Our adept team combines innovative technologies and strategic thinking to deliver tailored web solutions that resonate with your business goals. From dynamic e-commerce platforms to robust enterprise applications, we prioritize user-centric design, scalability, and flawless functionality."
        },
        {
            image: "../services/message-lines-light 1.png",
            title: "Software Consulting",
            description: "Unlock strategic technology insights with our Software Consulting services. Our expert consultants collaborate closely to tailor software strategies, from architecture design to scalability planning. Gain a trusted partner with industry knowledge for innovative and efficient solutions, propelling your business forward."
        }
    ]

    const images = [
        {
            src: "../services/image1.png",
            alt: "image1"
        },
        {
            src: "../services/image2.png",
            alt: "image2"
        },
        {
            src: "../services/image3.png",
            alt: "image3"
        },
    ]


    return (
        <div>
            <div className="relative bg-white w-[90%] mx-auto rounded-[20px] ">
                <div className="p-8 text-center ">
                    <div className="text-center px-6 py-16 bg-white max-w-2xl mx-auto">
                        <h2 className="text-[32px] font-bold text-[#009AFF]">
                            Services
                        </h2>
                        <p className="text-[20px] text-[#616161] mt-2">เราแก้ปัญหาให้คุณด้วยบริการต่อไปนี้</p>
                    </div>
                    <div className="hidden md:hidden lg:flex flex-col">
                        <div className="flex justify-center">
                            <div className="flex justify-between w-[90%] bg-gray-100 p-2 rounded-lg">
                                {data.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`px-6 py-2 text-sm rounded-lg ${activeTab === tab.id
                                            ? "bg-[#009AFF] text-white"
                                            : "bg-gray-100 text-[#9E9E9E]"
                                            }`}
                                    >
                                        {tab.title}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="mt-8 bg-white p-6">
                            {data
                                .filter((tab) => tab.id === activeTab)
                                .map((tab) => (
                                    <div key={tab.id}>
                                        <div className="flex justify-center items-center gap-4">
                                            <img
                                                src={tab.images}
                                                className="w-[40px] h-[40px]"
                                            />
                                            <h3 className="text-[24px] font-bold text-[#009AFF]">{tab.title}</h3>
                                        </div>
                                        <p className="text-[#616161] mt-4">{tab.description}</p>
                                        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-start">
                                            {tab.items.map((item, index) => (
                                                <div key={index} className="bg-white p-4 ">
                                                    <h4 className="text-[#424242] font-semibold text-[16px] mb-2">{item.name}</h4>
                                                    <p className="text-[#616161] text-[16px]">{item.subName}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className="lg:hidden mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {serviceData.map((service, index) => (
                            <div key={index} className="bg-white text-center">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-16 h-16 mx-auto mb-4"
                                />
                                <h4 className="text-[#424242] font-semibold text-[18px]">{service.title}</h4>
                                <p className="text-[#616161] mt-2 text-[16px]">{service.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="hidden md:flex mt-8 md:grid-cols-3 gap-6">
                        {images.map((image, index) => (
                            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                                <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-auto object-cover"
                            />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
