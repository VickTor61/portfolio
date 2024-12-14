const Skills = () => {
  const skills = [
    "Research",
    "Administrative Tasks",
    "CRM Management",
    "Organizational Skills",
    "Travel Research and Booking",
    "Creating Travel Itineraries",
    "Slide creation and Presentations",
    "Lead Conversation Support",
    "Social media management",
    "Data Entry",
    "Scheduling",
    "Stakeholder management",
    "Networking and relationship building",
    "Creating meeting agendas",
    "Taking meeting minutes / notes",
  ];

  const toolkits = [
    "Google Workspace",
    "Microsoft Office Suite(word, excel, power point)",
    "MailChimp",
    "Calendly",
    "Slack",
    "Asana",
    "Trello",
    "Canvas",
    "Meta",
  ];

  return (
    <div className="bg-gradient-to-bl via-zinc-500">
      <div className="text-white px-6 py-8">
        <div className="grid grid-cols-2">
          <div className="">
            <h1 className="text-3xl font-extrabold space-x-0 text-white">
              SKILLS
            </h1>
            <div className="border-6 max-w-[14rem] my-3 mr-4 rounded"></div>
          </div>

          <div>
            <h1 className="text-3xl font-extrabold space-x-0 text-white">
              TOOLKITS
            </h1>
            <div className="border-6 max-w-[14rem] my-3 mr-4 rounded"></div>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div>
            {skills.map((skill, index) => (
              <p key={index} className="my-2">
                {skill}
              </p>
            ))}
          </div>
          <div>
            {toolkits.map((toolkit, index) => (
              <p key={index} className="my-2">
                {toolkit}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
