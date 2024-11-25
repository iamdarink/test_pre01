import router from 'next/router';
import React from 'react';

export default function solution6() {
    return (
        <div>
            <div className="relative w-full h-auto">
                <img 
                    src="/Rectangle17.svg" 
                    alt="Rectangle17"
                    className="w-screen h-[340px] object-cover"
                />
                <div className="absolute inset-0 flex items-center bg-gradient-to-r from-[#009AFF] to-transparentr">
                    <div className="px-8 ">
                        <h2 className="text-[32px] font-bold text-[#FFFFFF]">
                            Get in touch <span className="text-[#424242]">with us!</span>
                        </h2>
                        <p className="text-[20px] text-[#616161] mt-2">
                            ให้เราเป็นส่วนหนึ่งในการนำธุรกิจคุณไปสู่โลกดิจิทัลด้วยกัน คุยกับเราได้เลย!
                        </p>
                        <button 
                            className="px-8 py-3 bg-white text-[#009AFF] text-[14px] font-medium rounded-full shadow-md mt-[15px]"
                            onClick={() => router.push('/contact')}
                        >
                            Talk with Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
