import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => (
  <div className="bg-gradient-to-r from-slate-500 to-slate-800 mb-4">
    <div className="flex justify-center items-start h-[40rem] text-white">
      <div className="mt-20 w-[60rem]">
        <div className="text-center">
          <h1 className="font-bold text-5xl">GET IN TOUCH</h1>
          <p>Let&apos;s work together</p>
        </div>

        <div className="grid grid-cols-4 my-16">
          <div className="w-fit">
            <div className="flex items-center justify-center">
              <WifiCalling3Icon sx={{ fontSize: 70 }} />
            </div>
            <p className="font-bold text-lg capitalize my-4">Phone & mobile</p>
            +2348115840662
          </div>

          <div className="w-fit text-center">
            <div className="flex items-center justify-center">
              <EmailOutlinedIcon sx={{ fontSize: 70 }} />
            </div>
            <p className="font-bold text-lg capitalize my-4">Email</p>
            imancheabiye@gmail.com
          </div>

          <div className="w-fit text-center">
            <div className="flex items-center justify-center">
              <InstagramIcon sx={{ fontSize: 70 }} />
            </div>
            <p className="font-bold text-lg capitalize my-4">Instagram</p>
            happinessabiyeibrahim
            </div>

          <div className="w-fit text-center">
            <div className="flex items-center justify-center">
              <LinkedInIcon sx={{ fontSize: 70 }} />
            </div>
            <p className="font-bold text-lg capitalize my-4">LinkedIn</p>
            Happiness Abiye Ibrahim
            </div>
        </div>

        <div>
          <div className="border border-3 w-full"></div>
          <p className="text-center leading-8 text-5xl uppercase my-6 font-bold text">Happiness Abiye</p>
          <div className="flex w-full items-center justify-stretch">
            <div className="border border-3 w-full"></div>
            <p className="mx-5 min-w-fit leading-8 text-2xl">PORTFOLIO 2024</p>
            <div className="border border-3 w-full"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
