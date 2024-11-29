import React from 'react'
import Contactform from './contactform'
import MapComponent from './map'


export default function Title() {
    const contact = [
        {
            name: "Contact",
            Image: ["../footer/phone.png", "../footer/email.png", "../footer/smartphone.png", "../footer/line.png"],
            alt: ["phone1", "email", "smartphone", "Vector"],
            description: [
                "(66) 2513 6785 - 6",
                "support@iottechgroup.com",
                "(66) 2513 6788",
                "Coding hub",
            ],
        }
    ]
    return (
        <div>
            <div className="relative inset-0 left-0 right-0 top-8 w-full h-[1800px] md:h-[1024px] mx-full bg-gradient-to-b from-gray-100">
                <div className="relative flex flex-col items-center justify-center gap-[100px] h-full text-center bg-gradient-to-b from-gray-100">
                    <img
                        src="/about/Rectangle20.png"
                        alt="Rectangle"
                        className="object-cover absolute top-0 left-0 w-full h-full z-[-1] "
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-lg w-[90%] ">
                        <div className='justify-start text-start '>
                            <h3 className="text-[#424242] text-[32px] font-bold">
                                Get In <span className='text-[#009AFF] text-[32px] font-bold'>Touch</span>
                            </h3>
                            <p className="text-[#424242] text-[20px] mt-4 font-bold">Address</p>
                            <p className="text-[#616161] text-[20px]">
                                444 Olympia Thai Plaza 5th Floor, Ratchadapisek Road,
                                Samsaennok, Huaykwang, Bangkok 10310
                            </p>
                            <div className='flex gap-4 mt-6'>
                                {contact.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`flex flex-col w-full sm:w-auto max-w-[305px] lg:items-start"
                                            }`}
                                    >
                                        <h3 className="font-bold text-lg mb-2 text-[#424242] text-[20px]">{item.name}</h3>
                                        <ul className="space-y-2 text-[#616161] text-[20px]">
                                            {item.description.map((subItem, index) => (
                                                <li
                                                    key={index}
                                                    className={`flex items-center gap-3 text-sm justify-start "
                                            }`}
                                                >
                                                    {item.Image && item.Image[index] && (
                                                        <img
                                                            src={item.Image[index]}
                                                            alt={item.alt ? item.alt[index] : ""}
                                                            className="w-4 h-4 filter brightness-0"
                                                        />
                                                    )}
                                                    {subItem}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            <img
                                src="/contact/idline.png"
                                alt="idline"
                                className="w-100 h-100 mt-4"
                            />
                            <div>
                                <MapComponent />
                            </div>
                        </div>
                        <div className='justify-start text-start'>
                            <h3 className="text-[#424242] text-[32px] font-bold">Don’t hesitate to</h3>
                            <h3 className="text-[#009AFF] text-[32px] font-bold">talk with us</h3>
                            <p className="text-[#616161] text-[20px]">ให้เราคิดโซลูชั่นของโลกดิจิทัลให้คุณ!</p>
                            <Contactform />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
