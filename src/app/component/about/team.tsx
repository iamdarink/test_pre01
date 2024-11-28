import React from 'react';

export default function Solution4() {
  const teamMembers = [
    {
      team: "Developer",
      members: [
        {
          name: "John Doe",
          image: "/about/team/john.png",
          subName: "Senior Developer",
        },
        {
          name: "Jane Smith",
          image: "/about/team/jane.png",
          subName: "Junior Developer",
        },
        {
          name: "Michael Johnson",
          image: "/about/team/michael.png",
          subName: "Senior Developer",
        },
        {
          name: "Emily Davis",
          image: "/about/team/emily.png",
          subName: "Junior Developer",
        },
        {
          name: "David Wilson",
          image: "/about/team/david.png",
          subName: "Senior Developer",
        },
      ],
    },
    {
      team: "Sales",
      members: [
        {
          name: "Sarah Brown",
          image: "/about/team/john.png",
          subName: "Sales Manager",
        },
        {
          name: "Robert Lee",
          image: "/about/team/jane.png",
          subName: "Sales Representative",
        },
        {
          name: "Olivia Wilson",
          image: "/about/team/michael.png",
          subName: "Sales Manager",
        },
        {
          name: "William Taylor",
          image: "/about/team/emily.png",
          subName: "Sales Representative",
        },
        {
          name: "Sophia Martinez",
          image: "/about/team/david.png",
          subName: "Sales Manager",
        },
      ],
    },
    {
      team: "Admin",
      members: [
        {
          name: "Michael Johnson",
          image: "/about/team/john.png",
          subName: "Project Manager",
        },
        {
          name: "Emily Davis",
          image: "/about/team/jane.png",
          subName: "Project Coordinator",
        },
        {
          name: "David Wilson",
          image: "/about/team/michael.png",
          subName: "Project Manager",
        },
        {
          name: "John Doe",
          image: "/about/team/emily.png",
          subName: "Project Coordinator",
        },
        {
          name: "Jane Smith",
          image: "/about/team/david.png",
          subName: "Project Manager",
        },
      ],
    },
  ];

  return (
    <div className="w-[90%] mx-auto py-16">
      <div className="text-center mb-8">
        <h2 className="text-[32px] font-bold text-[#009AFF]">Meet The Team</h2>
        <p className="text-[16px] text-[#616161] mt-2 px-16">
          Meet the talented individuals who drive innovation at Coding Hub.
          Our team is composed of seasoned professionals such as software
          engineering, design, project management, etc. Together, we bring a
          diverse set of skills and experiences to the table, united by a shared
          commitment to excellence.
        </p>
      </div>

 
      {teamMembers.map((team, teamIndex) => (
        <div key={teamIndex} className="mb-12">
  
          <h3 className="text-center text-[24px] font-semibold text-[#212121] mb-6">
            {team.team}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-8">
            {team.members.map((member, memberIndex) => (
              <div
                key={memberIndex}
                className="flex flex-col items-center text-center"
              >

                <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
 
                <p className="text-[#009AFF] text-[16px] font-semibold mt-4">
                  {member.name}
                </p>

                <p className="text-[#616161] text-[14px]">{member.subName}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
