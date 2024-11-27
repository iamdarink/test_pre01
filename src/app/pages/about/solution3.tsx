import React from 'react';

export default function Solution3() {
    const partners = [
        {
            image: "/about/partner/aws.svg",
            alt: "AWS",
            description:
                "AWS offers a broad set of cloud-based services, enabling scalable, flexible, and cost-efficient solutions for businesses undergoing digital transformation.",
        },
        {
            image: "/about/partner/azure.svg",
            alt: "Azure",
            description:
                "Microsoft Azure is a cloud platform for building, deploying, and managing services and applications, facilitating a wide range of digital transformation initiatives.",
        },
        {
            image: "/about/partner/salesforce.svg",
            alt: "Salesforce",
            description:
                "Salesforce provides customer relationship management (CRM) software and applications focused on sales, customer service, marketing automation, and analytics.",
        },
        {
            image: "/about/partner/sap.svg",
            alt: "SAP",
            description:
                "SAP offers enterprise resource planning (ERP) software and related applications to manage business operations and customer relations.",
        },
        {
            image: "/about/partner/google.svg",
            alt: "Google Cloud Platform (GCP)",
            description:
                "GCP offers cloud services with powerful computing, data storage, and machine learning to support digital innovation.",
        },
        {
            image: "/about/partner/kubernetes.svg",
            alt: "Kubernetes",
            description:
                "An open-source platform for automating deployment, scaling, and operations of application containers across clusters.",
        },
        {
            image: "/about/partner/docker.svg",
            alt: "Docker",
            description:
                "A platform that delivers software in containers to ensure it runs seamlessly in any environment.",
        },
        {
            image: "/about/partner/mongo.svg",
            alt: "MongoDB",
            description:
                "A NoSQL database for building applications with ease of development, scalability, and flexibility in data processing.",
        },
        {
            image: "/about/partner/react.svg",
            alt: "React",
            description:
                "A JavaScript library for creating dynamic and interactive user interfaces for web and mobile apps.",
        },
    ];

    return (
        <div className="hidden md:hidden lg:flex flex-col relative bg-white w-[90%] p-8 mt-8 mb-8 mx-auto rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
            <div className="text-center mb-8">
                <h2 className="text-[32px] font-bold text-[#009AFF]">
                    Meet our Partners
                </h2>
                <p className="text-[16px] text-[#616161] mt-2">
                    We are proud to collaborate with leading technology providers and
                    innovative platforms to deliver state-of-the-art solutions to our
                    clients. Our partnerships with industry giants such as Microsoft,
                    Google Cloud, and Amazon Web Services, alongside specialized
                    collaborators like Salesforce, SAP, and Oracle, empower us to stay at
                    the forefront of technology. These strategic relationships not only
                    enhance our service offerings but also ensure we are equipped to
                    tackle any challenge, providing our clients with cutting-edge,
                    reliable, and scalable solutions. Together with our partners, we are
                    shaping the future of digital transformation.
                </p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {partners.map((partner, index) => (
                    <div
                        key={index}
                        className="flex flex-col p-4 bg-white"
                    >
                        <div className="flex items-center gap-4 mb-2">
                            <img
                                src={partner.image}
                                alt={partner.alt}
                                className="w-[40px] h-[40px]"
                            />
                            <h3 className="font-bold text-[#424242] text-lg">{partner.alt}</h3>
                        </div>
                        <p className="text-[14px] text-[#616161]">{partner.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
