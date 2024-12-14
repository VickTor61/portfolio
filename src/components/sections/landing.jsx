import Portfolio from "../Portfolio";
import ProfileImage from "../ProfileImage";
import ProfileUrl from '../../assets/images/profile.jpg'

const Landing = () => (
  <div className="bg-gradient-to-bl from-slate-600 via-zinc-500 to-zinc-800">
    <div className="flex md:justify-between text-white">
      <div className="md:w-1/2 mx-auto">
        <div className="px-4 md:px-6 lg:px-15 mt-6 mb-4 md:my-8 text-sm md:text-base">
          <p className="italic text-2xl">Hello !!!</p>
          <h2 className="text-4xl md:text-6xl space-x-0 text-white my-6 tracking-tight">
            I&apos;m Happiness Abiye
          </h2>
          <p className="px-3 py-2 bg-gradient-to-r from-gray-200 to-black-400 text-black mb-4 md:w-4/5">
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
          <p className="mt-4 md:mt-14">
            I am on a mission to help one business at a time!
          </p>
        </div>
      </div>

      <div className="hidden md:flex ml-3 justify-center items-center w-1/2">
      {" "}
        <div className="">
          <div className="p-4 md:p-0">
          <ProfileImage url={ProfileUrl}/>
          </div>
        </div>
      </div>
    </div>

    <Portfolio />
  </div>
);

export default Landing;
