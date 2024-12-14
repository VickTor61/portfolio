import { ArrowRight } from "@mui/icons-material";

// eslint-disable-next-line react/prop-types
const ProjectImage = ({ name, url, link }) => (
  <div>
    <div className="flex items-center">
    <h1 className="uppercase font-bold text-2xl lg:text-5xl  pl-6 py-10 text-white flex-auto">
      {name}
    </h1>
    { link && <a href={link} className=" font-bold text-xl pl-6 py-10 text-white mr-6"> Link to <ArrowRight /></a>}
    </div>
    <img src={url} alt="image" className="h-[40rem] w-full" />
  </div>
);

export default ProjectImage;
