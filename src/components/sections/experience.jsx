import Portfolio from "../Portfolio";
import FastForwardIcon from '@mui/icons-material/FastForward';

const Experience = () => (
  <div className="bg-gradient-to-bl via-zinc-500">
    <div className="text-white px-6 py-8">
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-3xl font-extrabold space-x-0 text-white">
            EXPERIENCE
          </h1>
          <div className="border-6 w-[14rem] my-3 rounded"></div>
        </div>

        <div>
          <div className="h-full">
            <div className="flex items-center">
              <div className="text-8xl font-bold ">2021</div>
              <div className="font-bold border-6 mx-4 px-3"></div>
              <div className="text-8xl font-bold">2024</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 my-3">
        <div className="flex items-center">
          <div className="mr-4"><FastForwardIcon /></div>
          <div className="">
            <h1>
              {" "}
              Prominence Promise Impact Network/ Administrative Assistant
            </h1>
            <p>2022 - 2024</p>
          </div>
        </div>

        <div>
          At PPIN, I provided comprehensive administrative support, maintained
          organizational efficiency by managing documents and records
          effectively. I was also involved in coordinating internal
          communication, ensuring smooth workflow and project tracking.
        </div>
      </div>

      <div className="grid grid-cols-2 my-3">
        <div className="flex items-center">
          <div className="mr-4"><FastForwardIcon /></div>
          <div className="">
            <h1>
              Live Your Dreams Africa/ Customer Support Intern & Publicity
              Manager
            </h1>
            <p>2023</p>
          </div>
        </div>

        <div>
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
