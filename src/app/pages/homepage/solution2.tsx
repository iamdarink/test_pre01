import React from "react";

export default function Solution2() {
    const data = [
        {
            id: 1,
            images: "../brain-circuit.png",
            title: "Infrastructure and Operations",
            name: "This category underpins digital business, focusing on creating scalable, secure environments for IT operations and services, leveraging cloud computing, DevOps, cybersecurity, and IoT to enhance flexibility and efficiency."
        },
        {
            id: 2,
            images: "../display-chart.png",
            title: "Data Management and Analytics",
            name: "It emphasizes handling and analyzing vast data to derive actionable insights, utilizing Big Data, AI/ML, and Blockchain technologies to drive strategic decisions and optimize operations."
        },
        {
            id: 3,
            images: "../user-group.png",
            title: "Customer and User Experience",
            name: "This area enhances how customers and users engage with businesses, using CRM and DXP technologies to deliver personalized, seamless experiences across various digital platforms and touchpoints."
        }
    ];


    return (
        <div>
            <div className="relative bg-white w-[90%] mx-auto rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
                <div className="p-8 text-center">
                    <div className="text-center px-6 py-16 bg-white max-w-2xl mx-auto">
                        <h2 className="text-[32px] font-bold text-[#424242]">
                            ABOUT <span className="text-[#009AFF]">US</span>
                        </h2>
                        <p className="text-[20px] text-[#616161] mt-2">รู้จักเราให้มากขึ้น</p>
                        <p className="text-[#616161] mt-6 max-w-4xl mx-auto leading-relaxed">
                            Coding Hub Co.,Ltd. is a software development and technology consulting company.
                            With a customer base ranging from smb to enterprise, we have a strong track record of collaborating closely
                            with our clients to plan and build solutions, mobile apps, web platforms, business automation and intelligent tools to serve digital transformation.
                        </p>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <div className="hidden lg:flex">
                            <img
                                src="/Ellipse1.svg"
                                alt="Ellipse1"
                                className="absolute w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] left-4 sm:left-16 opacity-50"
                            />
                            <img
                                src="/Ellipse2.svg"
                                alt="Ellipse2"
                                className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] top-10 sm:top-20 left-[150px] sm:left-[250px] opacity-50"
                            />
                            <img
                                src="/Ellipse3.svg"
                                alt="Ellipse3"
                                className="absolute w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] top-2 right-8 sm:right-16 opacity-50"
                            />
                        </div>

                        <div className="relative flex justify-center flex-wrap gap-4 sm:gap-8 mt-10 sm:mt-20 w-full max-w-[1280px]">
                            <img
                                src="/Rectangle5.png"
                                alt="Code"
                                className="w-[90%] sm:w-[45%] max-w-[413px] h-[200px] sm:h-[300px] rounded-lg"
                            />
                            <img
                                src="/Rectangle7.png"
                                alt="Team"
                                className="w-[90%] sm:w-[45%] max-w-[413px] h-[200px] sm:h-[300px] rounded-lg"
                            />
                        </div>

                        <a className="mt-6 sm:mt-10 text-[#616161] text-[14px]">
                            Read More
                        </a>
                    </div>

                </div>

                <div className=" flex justify-center items-center px-4">
                    <div className="p-8 text-center">
                        <div className="text-center px-6 py-16 bg-white max-w-4xl mx-auto">
                            <h2 className="text-[32px] font-bold text-[#424242]">
                                We Provide Your <span className="text-[#009AFF]">Solution</span>
                            </h2>
                            <p className="text-[20px] text-[#616161] mt-2">บริการนำธุรกิจคุณไปสู่โลกดิจิทัลเพื่อรับกับเทรนด์ในอนาคต</p>
                            <p className="text-[#616161] mt-6 max-w-4xl mx-auto leading-relaxed">
                                Transform your ideas into reality with our bespoke software development services.
                                We specialize in creating tailored solutions that address your unique business challenges.
                                Our experienced team of developers is proficient in a wide range of technologies, ensuring the delivery of high-quality, scalable software.
                            </p>
                        </div>

                        <div className="relative flex flex-col items-center">
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
                                {data.map((item) => (
                                    <div
                                        key={item.id}
                                        className="w-full max-w-[305px] bg-white rounded-[20px] p-[30px] flex flex-col gap-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
                                    >
                                        <img
                                            src={item.images}
                                            alt={item.title}
                                            className="w-12 h-12"
                                        />
                                        <h3 className="text-start text-lg font-bold text-gray-800">{item.title}</h3>
                                        <p className="text-start text-sm text-gray-600">{item.name}</p>
                                    </div>
                                ))}
                            </div>
                            <a className="mt-10 text-[#616161] text-[14px]">More Detail</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
