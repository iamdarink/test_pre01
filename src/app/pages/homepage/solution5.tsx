import React from 'react';

export default function Solution5() {
    const data = [
        {
            id: 1,
            title: "Frontend",
            image: ["/frontend/HTML.svg", "/frontend/CSS.svg", "/frontend/JS.svg", "/frontend/Vue.svg", "/frontend/Flutter.svg", "/frontend/Next.svg", "/frontend/React.svg"],
            alt: ["HTML", "CSS", "JavaScript", "Vue", "Flutter", "Next.js", "React"]
        },
        {
            id: 2,
            title: "Backend",
            image: ["/backend/NodeJS.svg", "/backend/Django.svg", "/backend/Graphql.svg", "/backend/Python.svg"],
            alt: ["Node.js", "Django", "GraphQL", "Python"]
        },
        {
            id: 3,
            title: "Database",
            image: ["/database/MySQL.svg", "/database/Postgresql.svg", "/database/Redis.svg", "/database/Mongo.svg"],
            alt: ["MySQL", "PostgreSQL", "Redis", "MongoDB"]
        },
        {
            id: 4,
            title: "DevOps",
            image: ["/devops/Docker.svg", "/devops/Jenkins.svg", "/devops/Kubernetes.svg"],
            alt: ["Docker", "Jenkins", "Kubernetes"]
        }
    ];

    return (
        <div>
            <div className="p-8 text-center bg-white">
                <div className="text-center px-6 py-16 max-w-2xl mx-auto">
                    <h2 className="text-[32px] font-bold text-[#424242]">
                        Tech <span className="text-[#009AFF]">Stack</span>
                    </h2>
                    <p className="text-[20px] text-[#616161] mt-2">เครื่องมือที่เราใช้สร้างสรรค์นวัตกรรม</p>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 justify-between gap-[40px]">
                    {data.map((category) => (
                        <div key={category.id} className="text-center">
                            <h3 className="text-[20px] text-[#424242] font-bold mb-4">{category.title}</h3>
                            <div className="flex justify-between p-[8px] gap-[20px] sm:w-[150px] lg:w-[200px] flex-wrap">
                                {category.image.map((src, index) => (
                                    <div key={index} className="flex flex-col items-center">
                                        <img src={src} alt={category.alt[index]} className="w-[50px] h-[50px]" />
                                        <p className="text-[14px]">{category.alt[index]}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
