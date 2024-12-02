import React from 'react'

export default function Work1() {
    const TextField = ({ number, name, description, }: { number: string; name: string; description: string;}) => (
         <div className="w-[328px] h-auto md:h-[280px] lg:h-[250px] p-[30px] md:p-[20px] lg:p-[30px] bg-white border-2 border-gray-200 rounded-[10px] shadow flex-col justify-start items-start gap-5 inline-flex">
            <div className="self-stretch h-[70px] flex-col justify-center items-start gap-2.5 flex">
                <div className="text-black text-2xl font-semibold leading-9">{number}</div>
                <div className="self-stretch text-neutral-700 text-xl font-semibold leading-normal">{name}</div>
            </div>
            <div className="self-stretch text-neutral-700 text-sm font-light">{description}</div>
        </div>
    );

    return (
        <div>
            <div className="text-center md:text-start px-16 mb-12">
                <h2 className="text-[32px] font-bold text-[#424242]">
                    How we <span className="text-[#009AFF]">work?</span>
                </h2>
                <p className="text-[20px] text-[#616161] mt-2">ขั้นตอนการทำงานแบบมืออาชีพ</p>
            </div>
            <div >
                <div className="container mx-auto px-14 w-full]">
                    <div className="flex mt-10 ">
                        <div className="flex flex-col md:flex-row w-full h-auto md:h-[250px] justify-center lg:justify-start items-center mt-10 md:mt-0 gap-6 md:gap-0">
                            <TextField
                                number="01"
                                name="Discovery and Planning"
                                description="Dive deep into discussions to grasp your goals, challenges, and vision. Together, we define project objectives, scope, and create a strategic roadmap."
                            />
                            <div className="hidden md:flex w-[50px] h-[15px] bg-lime-600 "></div>
                            <TextField
                                number="02"
                                name="Design and Prototyping"
                                description="Our design team crafts intuitive interfaces, wireframes, and prototypes, refining designs collaboratively until they seamlessly align with your vision."
                            />
                            <div className="hidden md:flex w-[150px] h-[15px] bg-lime-600 rounded-tr-[20px]"></div>
                            <div className="hidden md:flex md:w-[300px] lg:w-[210px] h-[15px] origin-top-left rotate-90 bg-lime-600 rounded-tl-[20px]"></div>
                        </div>
                    </div>
                    <div className="flex md:hidden">
                        <div className="flex flex-col md:flex-row w-full h-auto md:h-[250px] justify-center lg:justify-end items-center mt-6 mb-[6px] md:mt-0 gap-6 md:gap-0">
                            <TextField
                                number="03"
                                name="Development and Coding"
                                description="Skilled developers bring designs to life, employing cutting-edge technologies. We follow agile methodologies for flexible and iterative development, keeping you involved throughout."
                            />
                            <TextField
                                number="04"
                                name="Testing and Quality Assurance"
                                description="Rigorous testing ensures functionality, security, and reliability. We promptly address any issues, ensuring a polished, high-quality end product"
                            />
                        </div>
                    </div>
                    <div className="hidden md:flex mt-10 ">
                        <div className="flex flex-col md:flex-row w-full h-auto md:h-[250px] justify-center lg:justify-end items-center mt-10 md:mt-0 gap-6 md:gap-0">
                            <div>
                                <p className="hidden md:flex w-[150px] lg:w-[165px] h-[15px] origin-bottom-left rotate-90 bg-lime-600 rounded-bl-[20px]"></p>
                                <p className="hidden md:flex w-[170px] h-[15px] bg-lime-600 rounded-tl-[20px]"></p>
                            </div>
                            <TextField
                                number="04"
                                name="Testing and Quality Assurance"
                                description="Rigorous testing ensures functionality, security, and reliability. We promptly address any issues, ensuring a polished, high-quality end product"
                            />
                            <div className="hidden md:flex w-[50px] h-[15px] bg-lime-600"></div>
                            <TextField
                                number="03"
                                name="Development and Coding"
                                description="Skilled developers bring designs to life, employing cutting-edge technologies. We follow agile methodologies for flexible and iterative development, keeping you involved throughout."
                            />
                        </div>
                    </div>
                    <div className="flex mt-0 md:mt-10 mb-10">
                        <div className="flex flex-col md:flex-row w-full h-auto md:h-[250px] justify-center lg:justify-end items-center mt-[16px] md:mt-0 gap-6 md:gap-0">
                            <TextField
                                number="05"
                                name="Deployment and Integration"
                                description="The finalized solution is deployed, integrated, and thoroughly tested in a live environment, ensuring a smooth transition and seamless operation."
                            />
                            <div className="hidden md:flex w-[50px] h-[15px] bg-lime-600"></div>
                            <TextField
                                number="06"
                                name="Training and Documentation"
                                description="Provide comprehensive training and detailed documentation, empowering your team to leverage the new software solution effectively."
                            />
                            <div className="hidden md:flex w-[50px] h-[15px] bg-lime-600"></div>
                            <TextField
                                number="07"
                                name="Maintenance and Support"
                                description="Our commitment extends beyond deployment. We offer ongoing maintenance, support, and updates, ensuring your software remains optimal and up-to-date."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}