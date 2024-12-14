import EmailManagementUrl from "../../assets/images/EmailManagement.jpg";
import LeadGenerationUrl from "../../assets/images/LeadGeneration.jpg";
import MinuteOfMeetingUrl from "../../assets/images/minute_of_meeting.jpg";
import TravelItineryUrl from "../../assets/images/TravelItinery.jpg";
import ContentBrandingUrl1 from "../../assets/images/content_branding_1.webp";
import ContentBrandingUrl2 from "../../assets/images/content_branding_2.webp";
import ProjectImage from "./projectImage";
import { ArrowRight } from "@mui/icons-material";

const Project = () => (
  <div className="bg-gradient-to-r from-slate-900 to-slate-800 w-full">
    <ProjectImage name={"Lead Generation"} url={LeadGenerationUrl} />
    <ProjectImage name={"Email Management"} url={EmailManagementUrl} />
    <ProjectImage name={"Minute of meeting"} url={MinuteOfMeetingUrl} />
    <ProjectImage name={"Travel Itinery"} url={TravelItineryUrl} />

    <div className="mb-4">
      <div className="hidden md:flex items-center">
        <h1 className="uppercase font-bold text-2xl lg:text-5xl pl-6 py-10 text-white flex-auto">
          Content Creation and branding
        </h1>
        <a
          href={
            "https://www.instagram.com/p/CngohGsN3ew/?igsh=MWtmYnducmE5dGFnag=="
          }
          className="text-green-300 font-bold text-sm text-nowrap lg:text-xl pl-6 py-10 mr-6"
        >
          View Content
          <ArrowRight />
        </a>
      </div>

      <div className="md:hidden mb-2 pl-6 py-4">
        <h1 className="uppercase font-bold text-2xl md:text-5xl text-white flex-auto">
          Content Creation and branding
        </h1>
        <a
          href={
            "https://www.instagram.com/p/CngohGsN3ew/?igsh=MWtmYnducmE5dGFnag=="
          }
          className="text-green-300 font-bold text-sm text-nowrap lg:text-xl"
        >
          View Content
          <ArrowRight />
        </a>
      </div>
      <div className="md:flex justify-between">
        <div className="w-full">
          <img
            src={ContentBrandingUrl1}
            alt="content_brand"
            className="h-[40rem] w-full"
          />
        </div>
        <div className="w-full">
          <img
            src={ContentBrandingUrl2}
            alt="content_brand"
            className="h-[40rem] w-full"
          />
        </div>
      </div>

      <div className="">
        <h1 className="uppercase font-bold text-2xl lg:text-5xl py-6 text-white flex-auto">
          Testimonials
        </h1>
        <p>
          Happiness Abiye Ibrahim has been an invaluable part of the Prominence
          Promise Impact Network (PPIN) Ltd. <br /> She brings dedication, a
          strong work ethic, and a positive attitude to everything she does. Her
          ability to manage tasks efficiently and keep things running smoothly
          is highly commendable. <br /> Happiness is one of my trusted team
          members, she's organized, reliable, and always willing to go the extra
          mile to ensure that everything is in order. Whether it's handling
          administrative tasks, coordinating schedules, or assisting team
          members, she does it all with a smile and a sense of responsibility.
          Her presence adds a sense of calm and assurance to the team, making
          her a true asset to PPIN.
          <br />
          <br />
          <strong>
            {" "}
            Prominence Promise,
            <br /> Founder Prominence Promise Impact Network <br />{" "}
            prominenceconcepts@gmail.com
          </strong>
          <br />
          <br />
          I've known Abiye for the past four years now and I've been privileged
          to work with her on so many occasions.
          <br /> She's is a lady who is committed to learning, helping people,
          and volunteering.
          <br /> As an Administrative Assistant, she has made my work easier,
          she always understand the task and don't hesitate to carry it out to
          religiously.
          <br /> She's your go-to person for your Virtual Assistant - with her,
          you are in safe hands.
          <br />
          <br />
          <strong>Tobi Light</strong> <br />
        </p>
      </div>
    </div>
  </div>
);

export default Project;
