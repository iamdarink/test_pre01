import React from "react";

export default function Solution2() {
    const data = [
        {
            id: 1,
            images: "../detail/brain-circuit.png",
            title: "Infrastructure and Operations",
            description: "This category is foundational, ensuring businesses have scalable and secure technological infrastructures to support growth and innovation. It encompasses cloud computing for flexible resource management, DevOps for streamlined software deployment, cybersecurity measures to protect vital data, and IoT to enhance operational efficiencies through real-time insights. These components collectively ensure a robust platform for digital transformation.",
            
        },
        {
            id: 2,
            images: "../detail/display-chart.png",
            title: "Data Management and Analytics",
            description: "Data Management and Analytics is crucial for turning large volumes of data into actionable insights and strategic information. It combines the power of Big Data Analytics to process and understand complex datasets, AI and ML to predict trends and automate decisions, and Blockchain for secure and transparent transaction records. This synergy enables businesses to optimize operations, innovate, and tailor customer experiences.",
        },
        {
            id: 3,
            images: "../detail/user-group.png",
            title: "Customer and User Experience",
            description: "Data Management and Analytics is crucial for turning large volumes of data into actionable insights and strategic information. It combines the power of Big Data Analytics to process and understand complex datasets, AI and ML to predict trends and automate decisions, and Blockchain for secure and transparent transaction records. This synergy enables businesses to optimize operations, innovate, and tailor customer experiences.",
        }
    ];


    return (
        <div>
            <div className="relative bg-white w-[90%] mx-auto rounded-[20px] ">
                <div className="p-8 text-center">
                    <div className="text-center px-6 py-16 bg-white max-w-2xl mx-auto">
                        <h2 className="text-[32px] font-bold text-[#009AFF]">
                            Services 
                        </h2>
                        <p className="text-[20px] text-[#616161] mt-2">เราแก้ปัญหาให้คุณด้วยบริการต่อไปนี้</p>
                    </div>

                </div>
            </div>
        </div>
    );
}
