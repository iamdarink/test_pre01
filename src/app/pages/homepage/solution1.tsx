import React, { useEffect, useState } from 'react';
import router from 'next/router';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { label: "Home", route: "home", style: "text-[#424242] hover:text-[#009AFF]" },
        { label: "About", route: "about", style: "text-[#424242] hover:text-[#009AFF]" },
        { label: "Services", route: "services", style: "text-[#424242] hover:text-[#009AFF]" },
        { label: "Project Solutions", route: "project-solutions", style: "text-[#424242] hover:text-[#009AFF]" },
        {
            label: "Contact",
            route: "contact",
            style: "bg-[#009AFF] text-white px-6 py-2 rounded-lg hover:bg-sky-400",
            icon: "/phone.svg"
        },
    ];

    const handleNavigation = (route: string) => {
        router.push(`/${route}`);
        setIsMenuOpen(false);
    };

    // ตรวจสอบขนาดหน้าจอเพื่อเปลี่ยนสถานะเมนู
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMenuOpen(false);
            }
        };

        // ติดตั้ง Event Listener
        window.addEventListener('resize', handleResize);

        // เรียกใช้ครั้งแรกเพื่อให้แน่ใจว่าสถานะถูกต้อง
        handleResize();

        // ลบ Event Listener เมื่อ Component ถูกทำลาย
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-10 flex items-center justify-between h-[80px] px-[16px] sm:px-[32px] lg:px-[10px] w-[393px] sm:w-[1024px] lg:w-auto lg:gap-[99px]">
                <div>
                    <img src="/logo.png" alt="icon" />
                </div>

                {/* เมนูปกติ (Desktop) */}
                <div className="hidden lg:flex items-center gap-[99px]">
                    {menuItems.map((item, index) => (
                        <button
                            key={index}
                            className={item.style}
                            onClick={() => handleNavigation(item.route)}
                        >
                            {item.icon && (
                                <img src={item.icon} alt={item.label} className="inline w-[20px] h-[20px] mr-2" />
                            )}
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Hamburger Menu (Mobile) */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="border-2 border-[#009AFF] text-[#009AFF] px-3 py-2 rounded-md flex items-center gap-2"
                    >
                        <img src="../menu.png" alt="Menu" className="w-[20px] h-[20px]" />
                        Menu
                    </button>
                </div>
            </nav>

            {/* เมนูแบบครึ่งจอ (สำหรับ Mobile) */}
            {isMenuOpen && (
                <div className="fixed inset-0 backdrop-blur-md z-20 flex flex-col items-center justify-center h-1/2">
                    <div className="mb-8 flex items-center justify-between w-full px-4">
                        <img src="/logo.png" alt="icon"  />
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute top-5 right-5 text-[#616161] hover:text-sky-400"
                        >
                            <span className="text-xl font-bold">Close</span>
                        </button>
                    </div>
                    {menuItems.map((item, index) => (
                        <button
                            key={index}
                            className={`text-[16px] mb-2 text-[#424242] ${item.style}`}
                            onClick={() => handleNavigation(item.route)}
                        >
                            {item.icon && (
                                <img src={item.icon} alt={item.label} className="inline w-[20px] h-[20px] mr-2" />
                            )}
                            {item.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}