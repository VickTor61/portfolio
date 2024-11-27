import EmailManagementUrl from "../../assets/images/EmailManagement.jpg";
import LeadGenerationUrl from "../../assets/images/LeadGeneration.jpg";
import MinuteOfMeetingUrl from "../../assets/images/minute_of_meeting.jpg";
import TravelItineryUrl from "../../assets/images/Travel_Itinery.jpg";
import ContentBrandingUrl1 from "../../assets/images/content_branding_1.webp";
import ContentBrandingUrl2 from "../../assets/images/content_branding_2.webp";
import ProjectImage from "./projectImage";
import { ArrowRight } from "@mui/icons-material";

const Project = () => (
  <div className="bg-gradient-to-r from-slate-900 to-slate-800 w-full">
    <ProjectImage name={'Lead Generation'} url={LeadGenerationUrl} />
    <ProjectImage name={'Email Management'} url={EmailManagementUrl} />
    <ProjectImage name={'Minute of meeting'} url={MinuteOfMeetingUrl} />
    <ProjectImage name={'Travel Itinery'} url={TravelItineryUrl} />

    <div className="mb-4">
    <div className="flex items-center">
    <h1 className="uppercase font-bold text-5xl pl-6 py-10 text-white flex-auto">
      Content Creation and branding
    </h1>
     <a href={'https://www.instagram.com/p/CngohGsN3ew/?igsh=MWtmYnducmE5dGFnag=='} className="text-green-300 font-bold text-xl pl-6 py-10 mr-6">View Content<ArrowRight /></a>
    </div>
    <div className="grid grid-cols-2 gap-6">
      <img src={ContentBrandingUrl1} alt="content_brand" className="h-[40rem]" />
      <img src={ContentBrandingUrl2} alt="content_brand" className="h-[40rem] w-full" />
    </div>
  </div>
  </div>
);

export default Project;
