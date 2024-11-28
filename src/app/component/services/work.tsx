import React from 'react';

export default function Work() {
    const steps = [
        {
            id: '01',
            title: 'Discovery and Planning',
            description: 'Dive deep into discussions to grasp your goals, challenges, and vision. Together, we define project objectives, scope, and create a strategic roadmap.',
        },
        {
            id: '02',
            title: 'Design and Prototyping',
            description: 'Our design team crafts intuitive interfaces, wireframes, and prototypes, refining designs collaboratively until they seamlessly align with your vision.',
        },
        {
            id: '03',
            title: 'Development and Coding',
            description: 'Skilled developers bring designs to life, employing cutting-edge technologies. We follow agile methodologies for flexible and iterative development, keeping you involved throughout.',
        },
        {
            id: '04',
            title: 'Testing and Quality Assurance',
            description: 'Rigorous testing ensures functionality, security, and reliability. We promptly address any issues, ensuring a polished, high-quality end product.',
        },
        {
            id: '05',
            title: 'Deployment and Integration',
            description: 'The finalized solution is deployed, integrated, and thoroughly tested in a live environment, ensuring a smooth transition and seamless operation.',
        },
        {
            id: '06',
            title: 'Training and Documentation',
            description: 'Provide comprehensive training and detailed documentation, empowering your team to leverage the new software solution effectively.',
        },
        {
            id: '07',
            title: 'Maintenance and Support',
            description: 'Our commitment extends beyond deployment. We offer ongoing maintenance, support, and updates, ensuring your software remains optimal and up-to-date.',
        },
    ];
    
    // StepCard component to render each step
    const StepCard = ({ id, title, description }: { id: string; title: string; description: string }) => (
        <div className="w-[328px] h-[250px] p-[30px] bg-white rounded-[10px] shadow flex-col justify-start items-start gap-5 inline-flex">
            <div className="self-stretch h-[70px] flex-col justify-center items-start gap-2.5 flex">
                <div className="text-black text-2xl font-semibold leading-9">{id}</div>
                <div className="self-stretch text-neutral-700 text-xl font-semibold leading-normal">{title}</div>
            </div>
            <div className="self-stretch text-neutral-700 text-sm font-light">{description}</div>
        </div>
    );
    
    // StepDivider component for the lime div that connects cards
    const StepDivider = ({ isLastStep }: { isLastStep: boolean }) => (
        <div className={`w-[50px] h-[15px] ${isLastStep ? '' : 'bg-lime-600'}`} />
    );

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
                <div>
                    {steps.map((step, index) => {
                        const isLastStep = index === steps.length - 1;
                        return (
                            <div key={step.id} className="lg:flex mt-10 justify-start items-center inline-flex">
                                <StepCard id={step.id} title={step.title} description={step.description} />
                                {/* StepDivider is added between cards, except for the last one */}
                                {!isLastStep && <StepDivider isLastStep={isLastStep} />}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
