import Portfolio from "../Portfolio";
import ProfileImage from "../ProfileImage";
import ProfileUrl from "../../assets/images/profile.jpg";

const About = () => (
  <div className="bg-gradient-to-bl from-slate-600 via-zinc-500 to-zinc-200 ">
    <div className="md:flex md:justify-between text-white">
        <div className="hidden md:flex ml-3 justify-center items-center md:w-1/2">
          {" "}
          <div className="">
            <div className=" p-4 md:p-0">
              <ProfileImage url={ProfileUrl} />
            </div>
          </div>
      </div>

      <div className="bg-gradient-to-r from-slate-900 to-slate-700 md:w-1/2 mx-auto py-4 px-6">
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
