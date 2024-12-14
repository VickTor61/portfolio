import Portfolio from "../Portfolio";
import FastForwardIcon from "@mui/icons-material/FastForward";

const Experience = () => (
  <div className="bg-gradient-to-bl via-zinc-500">
    <div className="text-white px-6 py-8">
      <div className="flex justify-between md:grid grid-cols-2">
        <div>
          <h1 className="text-3xl font-extrabold space-x-0 text-white">
            EXPERIENCE
          </h1>
          <div className="border-6 max-w-[14rem] my-3 rounded"></div>
        </div>

        <div>
          <div className="hidden md:block h-full">
            <div className="flex items-center">
              <div className="md:text-3xl lg:text-6xl font-bold ">2021</div>
              <div className="font-bold border-2 md:border-6 mx-4 px-3"></div>
              <div className="md:text-3xl lg:text-6xl font-bold">2024</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col text-sm md:grid md:grid-cols-2 my-3">
        <div className="flex items-center">
          <div className="mr-4">
            <FastForwardIcon />
          </div>
          <div className="flex font-semibold md:block w-full">
            <h1 className="flex-auto">
              {" "}
              Prominence Promise Impact Network / Administrative Assistant
            </h1>
            <p className="text-nowrap">2022 - 2024</p>
          </div>
        </div>

        <div className="ml-10 mt-2 md:ml-0 md:mt-0">
          At PPIN, I provided comprehensive administrative support, maintained
          organizational efficiency by managing documents and records
          effectively. I was also involved in coordinating internal
          communication, ensuring smooth workflow and project tracking.
        </div>
      </div>

      <div className="flex flex-col text-sm md:grid md:grid-cols-2 my-3">
        <div className="flex items-center">
          <div className="mr-4">
            <FastForwardIcon />
          </div>
          <div className="flex font-semibold md:block w-full">
          <h1 className="flex-auto">
          Live Your Dreams Africa/ Customer Support Intern & Publicity
              Manager
            </h1>
            <p className="text-nowrap">2023</p>
          </div>
        </div>

        <div className="ml-10 mt-2 md:ml-0 md:mt-0">
          At Live Your Dreams Africa, I Managed complex schedules for team
          members and external stakeholders, resulting in a 30% improvement in
          course enrollment. I also handled customer support queries and
          resolved issues, ensuring participant satisfaction increased by 20%.
        </div>
      </div>
    </div>
    <Portfolio />
  </div>
);

export default Experience;
