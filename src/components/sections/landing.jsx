import Portfolio from "../Portfolio";

const Landing = () => (
  <div className="bg-gradient-to-bl from-slate-600 via-zinc-500 to-zinc-800 mt-4">
    <div className="flex justify-between text-white">
      <div className="w-full flex flex-col items-center">
        <div className="h-full px-20 my-8">
          <p className="italic text-2xl">Hello !!!</p>
          <h2 className="text-6xl space-x-0 text-white my-6">
            I&apos;m Happiness <br /> Abiye
          </h2>
          <p className="px-3 py-2 bg-gradient-to-r from-gray-200 to-black-400 text-black mb-4 w-4/5">
            Efficient Administrative Support Specialist
          </p>
          <p>
            I&apos;m a proactive and organized professional with three years of
            experience in administrative support, customer service, and content
            strategy. My background includes managing complex schedules,
            resolving customer issues, and optimizing organizational efficiency,
            which makes me an ideal candidate for a variety of administrative
            roles.
          </p>
          <p className="mt-14">
            I am on a mission to help one business at a time!
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-r from-slate-900 to-slate-700 w-full">
        {" "}
        <div>
          <img src={"/images/facelift.jpg"} alt="image" className="" />
        </div>
      </div>
    </div>

    <Portfolio />
  </div>
);

export default Landing;
