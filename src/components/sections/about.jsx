import Portfolio from "../Portfolio";

const About = () => (
  <div className="bg-gradient-to-bl from-slate-600 via-zinc-500 to-zinc-200 ">
    <div className="flex justify-between text-white h-full">
      <div className="w-full flex flex-col items-center">
        <div className="p-5">
          <div>
            <img src={"/images/facelift.jpg"} alt="image" className="" />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-slate-900 to-slate-700 w-full h-full p-8">
        <h1 className="text-3xl font-extrabold space-x-0 text-white">
          ABOUT ME
        </h1>
        <div className="border-6 w-[14rem] my-3 rounded"></div>

        <div>
          As an experienced Virtual Assistant, my experience in both remote and
          in-office environments has allowed me to develop expertise in managing
          diverse administrative and customer service tasks. I’ve successfully
          coordinated internal communications, handled scheduling, and
          facilitated efficient workflows for teams, ensuring smooth operations.{" "}
          <br />I excel at administrative support, communication, technology
          proficiency and organizational skills.
          <div className="text-3xl leading-3 mt-8 font-semibold">
            Skill & interest
          </div>
          <ul className="mt-8">
            <li className="border px-3 py-2 mx-2 rounded-full mt-4 block">
              Administrative Task
            </li>
            <li className="border px-3 py-2 mx-2 rounded-full mt-4 block">
              CRM management
            </li>
            <li className="border px-3 py-2 mx-2 rounded-full mt-4 block">
              Content Writing
            </li>
            <li className="border px-3 py-2 mx-2 rounded-full mt-4 block">
              Internet Research
            </li>
          </ul>
        </div>
      </div>
    </div>

    <Portfolio />
  </div>
);

export default About;
