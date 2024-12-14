import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const contactInfo = [
  {
    icon: <WifiCalling3Icon />,
    subtext: "Phone & mobile",
    text: "2348115840662",
  },
  {
    icon: <EmailOutlinedIcon />,
    subtext: "Email",
    text: "imancheabiye@gmail.com",
  },
  {
    icon: <InstagramIcon />,
    subtext: "Instagram",
    text: "happinessabiyeibrahim",
  },
  {
    icon: <LinkedInIcon />,
    subtext: "LinkedIn",
    text: "Happiness Abiye Ibrahim",
  },
];

const Contact = () => (
  <div className="bg-gradient-to-r from-slate-500 to-slate-800 mb-4">
    <div className="flex justify-center items-start h-[40rem] text-white">
      <div className="mt-20 w-[60rem]">
        <div className="text-center">
          <h1 className="font-bold text-3xl md:text-5xl">GET IN TOUCH</h1>
          <p>Let&apos;s work together</p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 my-16">
        {contactInfo.map(info => (
          <div key={info.subtext} className="w[137px] px-2 text-center">
            <div className="w-fit mx-auto">
              {info.icon}
            </div>
            <p className="font-bold md:text-lg capitalize my-4 break-words">{info.subtext}</p>
            <p className="text-wrap break-words">{info.text}</p>
          </div>

          ))}
        </div>

        <div>
          <div className="border border-3 w-full"></div>
          <p className="text-center leading-8 text-2xl lg:text-5xl uppercase my-6 font-bold text">
            Happiness Abiye
          </p>
          <div className="flex w-full items-center justify-stretch">
            <div className="border border-3 w-full"></div>
            <p className="mx-5 min-w-fit leading-8 lg:text-2xl">
              PORTFOLIO 2024
            </p>
            <div className="border border-3 w-full"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
