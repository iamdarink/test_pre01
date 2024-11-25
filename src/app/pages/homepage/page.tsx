import router from 'next/router';
import { title } from 'process';
import React from 'react'

export default function indexpage() {
    const handleNavigation = (label: string) => {
        const route = label.toLowerCase().replace(' ', '-');
        router.push(`/${route}`);
    };

    const buttonLabels: string[] = ["Home", "About", "Services", "Project Solutions", "Contact"];
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

    const imageData = [
        {
            id: 1,
            src: "/image15.svg",
            alt: "image15"
        },
        {
            id: 2,
            src: "/image16.svg",
            alt: "image16"
        },
        {
            id: 3,
            src: "/image17.svg",
            alt: "image17"
        },
        {
            id: 4,
            src: "/image18.svg",
            alt: "image18"
        },
        {
            id: 5,
            src: "/image19.svg",
            alt: "image19"
        },
    ];

    return (
        <div>
            <nav className="fixed top-0 left-0 right-0 flex justify-between px-20 py-5 bg-white  z-10">
                <div className="w-[142.86px] h-[40px]">
                    <img src="/logo.png" alt="icon" />
                </div>

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

            <div className="relative h-[1024px] mx-auto bg-gradient-to-b from-white/[0.205] to-transparent">
                <div className="relative flex flex-col items-center justify-center gap-[100px] h-full text-center">
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

            <div className="relative bg-white w-[1124px] h-auto rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] mx-auto">
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

                        <img
                            src="/Ellipse1.svg"
                            alt="Ellipse1"
                            className="absolute w-[150px] h-[150px] left-16 opacity-50"
                        />
                        <img
                            src="/Ellipse2.svg"
                            alt="Ellipse2"
                            className="absolute w-[300px] h-[300px] top-20 left-[250px] opacity-50"
                        />
                        <img
                            src="/Ellipse3.svg"
                            alt="Ellipse3"
                            className="absolute w-[250px] h-[250px] top-2 right-16 opacity-50"
                        />

                        <div className="flex justify-center gap-8 mt-20 w-[846px] h-[340px] ">
                            <img
                                src="/Rectangle5.png"
                                alt="Code"
                                className="absolute w-[413px] h-[300px] left-[120px] top-[50px] rounded-lg "
                            />
                            <img
                                src="/Rectangle7.png"
                                alt="Team"
                                className="absolute w-[413px] h-[300px] top-[80px] right-[120px] rounded-lg "
                            />
                        </div>
                        <a className="absolute mt-10 text-[#616161] text-[14px] top-[400px] left-[500px]">
                            Read More
                        </a>
                    </div>
                </div>

                <div className="flex justify-center items-center">
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
                            <div className="grid grid-cols-3 gap-8">
                                {data.map((item) => (
                                    <div
                                        key={item.id}
                                        className="w-[305px] h-auto bg-white rounded-[20px] p-[30px] flex flex-col gap-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
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
                            <a className="mt-10 text-[#616161] text-[14px] top-[400px]">
                                More Detail
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            <div className="p-8 text-center">
                <div className="text-start px-6 py-16 bg-white max-w-2xl">
                    <h2 className="text-[32px] font-bold text-[#424242]">
                        Trusted by Our <span className="text-[#009AFF]">Partners</span>
                    </h2>
                    <p className="text-[20px] text-[#616161] mt-2">พาร์ทเนอร์ที่ไว้วางใจให้เราสร้างนวัตกรรม</p>
                </div>
                <div className="relative flex px-6 justify-start items-center gap-[100px]">
                    {imageData.map((image) => (
                        <img
                            key={image.id}
                            src={image.src}
                            alt={image.alt}
                            className="w-[100px] h-auto"
                        />
                    ))}
                </div>
            </div>
            <div className="p-8 text-center">
                <div className="text-center px-6 py-16 bg-white max-w-2xl mx-auto">
                    <h2 className="text-[32px] font-bold text-[#424242]">
                        Explore Our <span className="text-[#009AFF]">Solutions</span>
                    </h2>
                    <p className="text-[20px] text-[#616161] mt-2">พบกับนวัตกรรมและความคิดสร้างสรรค์ในทุกงานของเรา!</p>
                </div>
                <div className="relative flex flex-col items-center">
                    <div className="flex justify-center gap-8 mt-20 w-[846px] h-[340px] ">
                        <img
                            src="/Rectangle5.png"
                            alt="Code"
                            className="absolute w-[413px] h-[300px] left-[120px] top-[50px] rounded-lg "
                        />
                        <img
                            src="/Rectangle7.png"
                            alt="Team"
                            className="absolute w-[413px] h-[300px] top-[80px] right-[120px] rounded-lg "
                        />
                    </div>
                    <a className="absolute mt-10 text-[#616161] text-[14px] top-[400px] ">
                        View All Projects
                    </a>
                </div>
            </div>

        </div>
    )

}