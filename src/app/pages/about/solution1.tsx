import React from 'react'

export default function Solution1() {
    const data = [
        {
            id: 1,
            title: "Vision",
            discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum finibus ultricies. Fusce sed sapien sed mauris consequat auctor."
        },
        {
            id: 2,
            title: "Mission",
            discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum finibus ultricies. Fusce sed sapien sed mauris consequat auctor."
        },
    ];

    return (
        <div>
            <div className="relative inset-0 left-0 right-0 w-full h-[600px] mx-full">
                <div className="relative flex flex-col justify-center gap-[100px] w-full h-full text-center bg-gradient-to-t from-white">
                    <img
                        src="/about/Rectangle20.png"
                        alt="Rectangle"
                        className="object-cover absolute top-0 left-0 w-[1440px] h-[600px] z-[-1]"
                    />

                    <div>
                        <h2 className="flex flex-col lg:flex-row justify-center text-[40px] font-bold text-[#424242] gab-[15px] ">
                            ABOUT <span className="text-[#009AFF] ">CODING HUB</span>
                        </h2>
                        <p className="text-[#616161] text-[16px] mt-6 mx-16">
                            Coding Hub Co.,Ltd. is a software development and technology consulting company.
                            With a customer base ranging from smb to enterprise, we have a strong track record of collaborating closely with our clients to plan and build solutions,
                            mobile apps, web platforms, business automation and intelligent tools to serve digital transformation.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="text-center px-6 bg-white max-w-4xl mx-auto">
                    <h2 className="text-[32px] font-bold text-[#009AFF]">
                        Our Goal
                    </h2>
                    <p className="text-[20px] text-[#616161] mt-2">เป้าหมายที่เรามีร่วมกัน</p>
                </div>
                <div className="text-center p-6 bg-white max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[20px] mx-auto mt-[40px]">
                        {data.map((item) => (
                            <div
                                key={item.id}
                                className=" w-full max-w-[400px] bg-white rounded-[20px] p-[40px] flex flex-col gap-[30px]"
                            >
                                <h3 className="text-center text-lg font-bold text-gray-800">{item.title}</h3>
                                <p className="text-center text-sm text-gray-600">{item.discription}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
