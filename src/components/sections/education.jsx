import Portfolio from "../Portfolio";

const Education = () => (
  <div className="bg-gradient-to-bl via-zinc-500">
    <div className="md:flex justify-between text-white h-full">
      <div className="bg-gradient-to-r from-slate-900 to-slate-700 p-8 my-6">
        <div className="flex flex-col justify-end w-full h-full">
          <h1 className="text-3xl font-extrabold space-x-0 text-white">
            EDUCATION
          </h1>
          <div className="border-6 w-[14rem] my-3 rounded"></div>

          <div className="leading-6 my-4">
            I am a passionate Virtual Assistant with a background in History,
            holding a Bachelor&apos;s degree in Historyu. My studies refined my
            analytical, research, and organizational skills, which I now
            leverage in providing exceptional administrative support. To further
            my professional journey, I obtained a Virtual Assistant
            certification from ALX, equipping me with in-demand skills in time
            management, effective communication, task prioritization, and the
            use of productivity tools e.g Google Workspace, Microsoft suite,
            Asana
          </div>
        </div>
      </div>

      <div className="md:w-1/2">
        <div className="px-8 lg:px-20 flex flex-col justify-center h-full">
          <div className="flex items-center lg:mt-[5rem]">
            <div className="text-4xl lg:text-6xl font-bold ">2018</div>
            <div className="font-bold border-6 mx-4 px-3"></div>
            <div className="text-4xl lg:text-6xl font-bold">2023</div>
          </div>

          <div className="my-6 lg:my-[6rem]">
            <div className="mb-6">
              <h1 className="font-extrabold mb-4">
                Senior Secondary High School
              </h1>
              <p>Government Science Secondary School | 2018</p>
            </div>
            <div>
              <h1 className="font-extrabold mb-4">Bachelor Degree</h1>
              <p>
                University of Benin | B.A History and International Studies |
                2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Portfolio />
  </div>
);

export default Education;
