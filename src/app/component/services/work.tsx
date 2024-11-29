import React from 'react';

export default function Work() {
    type Step = {
        id: number;
        title: string;
        description: string;
      };
      
      const steps: Step[] = [
        {
          id: 1,
          title: "Discovery and Planning",
          description: "Dive deep into discussions to grasp your goals, challenges, and vision. Together, we define project objectives, scope, and create a strategic roadmap.",
        },
        {
          id: 2,
          title: "Design and Prototyping",
          description: "Our design team crafts intuitive interfaces, wireframes, and prototypes, refining designs collaboratively until they seamlessly align with your vision.",
        },
        {
          id: 3,
          title: "Development and Coding",
          description: "Skilled developers bring designs to life, employing cutting-edge technologies. We follow agile methodologies for flexible and iterative development, keeping you involved throughout.",
        },
        {
          id: 4,
          title: "Testing and Quality Assurance",
          description: "Rigorous testing ensures functionality, security, and reliability. We promptly address any issues, ensuring a polished, high-quality end product.",
        },
        {
          id: 5,
          title: "Deployment and Integration",
          description: "The finalized solution is deployed, integrated, and thoroughly tested in a live environment, ensuring a smooth transition and seamless operation.",
        },
        {
          id: 6,
          title: "Training and Documentation",
          description: "Provide comprehensive training and detailed documentation, empowering your team to leverage the new software solution effectively.",
        },
        {
          id: 7,
          title: "Maintenance and Support",
          description: "Our commitment extends beyond deployment. We offer ongoing maintenance, support, and updates, ensuring your software remains optimal and up-to-date.",
        },
      ];
      

    return (
        <div className="bg-gray-100 py-16">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="text-center mb-12">
                    <h2 className="text-[32px] font-bold text-[#424242]">
                        How we <span className="text-[#009AFF]">work?</span>
                    </h2>
                    <p className="text-[20px] text-[#616161] mt-2">ขั้นตอนการทำงานแบบมืออาชีพ</p>
                </div>

                {/* Loop through steps and render StepCard */}
                <div className="container mx-auto px-14 w-full">
                    {steps.map((step, index) => (
                        <div
                            className={`hidden lg:flex mt-10 ${index % 2 === 0 ? "justify-start" : "justify-end"
                                }`}
                            key={step.id}
                        >
                            <div
                                className={`w-[328px] h-[250px] p-[30px] bg-white rounded-[10px] shadow flex-col justify-start items-start gap-5 inline-flex`}
                            >
                                <div className="self-stretch h-[70px] flex-col justify-center items-start gap-2.5 flex">
                                    <div className="text-black text-2xl font-semibold leading-9">
                                        {step.id.toString().padStart(2, "0")}
                                    </div>
                                    <div className="self-stretch text-neutral-700 text-xl font-semibold leading-normal">
                                        {step.title}
                                    </div>
                                </div>
                                <div className="self-stretch text-neutral-700 text-sm font-light">
                                    {step.description}
                                </div>
                            </div>
                            <div
                                className={`${index < steps.length - 1 ? "w-[50px] h-[15px] bg-lime-600" : ""
                                    }`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
