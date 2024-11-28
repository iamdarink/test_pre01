import React from 'react'

export default function Solution2() {
  const statistics = [
    { number: 10, label: "Projects Done" },
    { number: 20, label: "Members" },
    { number: 10, label: "Clients" },
  ];

  return (
    <div>
      <div className="relative w-full h-[600px] lg:h-[300px] bg-cover bg-center">
        <img src="/about/Rectangle19.png" alt="Solution 2" className='w-full h-full object-cover' />

        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
          <h2 className="text-white text-3xl font-bold m-8">STATISTIC</h2>
          
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 ">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center bg-black bg-opacity-50 rounded-md p-6">
                <p className="text-white text-4xl font-bold">{stat.number}</p>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
