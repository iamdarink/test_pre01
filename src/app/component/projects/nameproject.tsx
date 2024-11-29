import { useState } from "react";

export default function Nameproject() {
    const projects = [
        { id: 1, name: "Project Name", description: "Short Description", tags: ["Web Application", "Tag"], image: "/projects/Rectangle12.png" },
        { id: 2, name: "Project Name", description: "Short Description", tags: ["Web Application", "Tag"], image: "/projects/Rectangle12.png" },
        { id: 3, name: "Project Name", description: "Short Description", tags: ["Web Application", "Tag"], image: "/projects/Rectangle12.png" },
        { id: 4, name: "Project Name", description: "Short Description", tags: ["Web Application", "Tag"], image: "/projects/Rectangle12.png" },
        { id: 5, name: "Project Name", description: "Short Description", tags: ["Web Application", "Tag"], image: "/projects/Rectangle12.png" },
        { id: 6, name: "Project Name", description: "Short Description", tags: ["Web Application", "Tag"], image: "/projects/Rectangle12.png" },
        { id: 7, name: "Project Name", description: "Short Description", tags: ["Web Application", "Tag"], image: "/projects/Rectangle12.png" },
        { id: 8, name: "Project Name", description: "Short Description", tags: ["Web Application", "Tag"], image: "/projects/Rectangle12.png" },
        { id: 9, name: "Project Name", description: "Short Description", tags: ["Web Application", "Tag"], image: "/projects/Rectangle12.png" },
        { id: 10, name: "Project Name", description: "Short Description", tags: ["Web Application", "Tag"], image: "/projects/Rectangle12.png" },
      ];

    // จำนวนการ์ดต่อหน้า
    const ITEMS_PER_PAGE = 4;

    // สถานะหน้าปัจจุบัน
    const [currentPage, setCurrentPage] = useState(1);

    // คำนวณจำนวนหน้าทั้งหมด
    const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

    // ข้อมูลที่จะแสดงในหน้าปัจจุบัน
    const paginatedProjects = projects.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
          setCurrentPage(currentPage + 1);
        }
      };

    return (
        <div className="container mx-auto px-6 py-10">
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {paginatedProjects.map((project) => (
                        <div
                            key={project.id}
                            className="relative w-full max-w-[400px] h-[250px] rounded-lg overflow-hidden shadow-lg"
                        >
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-[#424242] flex flex-col justify-end p-4 text-white">
                                <h3 className="text-lg font-semibold">{project.name}</h3>
                                <p className="text-sm">{project.description}</p>
                                <div className="flex gap-2 mt-2">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="text-xs bg-white text-black rounded-full px-2 py-1"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Pagination */}
            <div className="flex justify-center md:justify-end mt-6 space-x-4 px-10">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`w-8 h-8 rounded-full ${currentPage === 1 ? "bg-gray-300 text-gray-500" : "bg-gray-200 text-black"
                        } flex items-center justify-center`}
                >
                    &lt;
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`w-8 h-8 rounded-full ${currentPage === index + 1
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 text-black"
                            } flex items-center justify-center`}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`w-8 h-8 rounded-full ${currentPage === totalPages ? "bg-gray-300 text-gray-500" : "bg-gray-200 text-black"
                        } flex items-center justify-center`}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
}
