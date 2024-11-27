import { useRef, useState } from "react";
import { Slider, Box } from "@mui/material";
import Landing from "./components/sections/landing";
import About from "./components/sections/about";
import Education from "./components/sections/education";
import Experience from "./components/sections/experience";
import Skills from "./components/sections/skills";
import Project from "./components/sections/project";
import Contact from "./components/sections/contact";
import "./App.css";

const App = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const landingRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const sections = [
    { component: <Landing />, ref: landingRef },
    { component: <About />, ref: aboutRef },
    { component: <Education />, ref: educationRef },
    { component: <Experience />, ref: experienceRef },
    { component: <Skills />, ref: skillsRef },
    { component: <Project />, ref: projectRef },
    { component: <Contact />, ref: contactRef },
  ];

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
    const sectionIndex = Math.floor((newValue / 100) * (sections.length - 1));
    sections[sectionIndex].ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSection = (index) => {
    sections[index].ref.current.scrollIntoView({ behavior: "smooth" });
    setSliderValue((index / (sections.length - 1)) * 100);
  };

  return (
    <div className="relative h-screen ">
      <div className="w-[1356px] mx-auto px-auto">
        <nav className="fixed w-[1356px] left-1/2 transform -translate-x-1/2 h-20 bg-gray-900 px-10 text-white shadow-xl z-10 flex items-center justify-between">
          <div className="flex justify-between flex-1">
            <button
              className="uppercase px-3 py-2 rounded bg-gradient-to-r from-gray-200 to-black-400 text-white shadow-lg"
              onClick={() => scrollToSection(0)}
            >
              Happiness Abiye
            </button>
            <button
              className="uppercase mr-2"
              onClick={() => scrollToSection(1)}
            >
              About Me
            </button>
            <button
              className="uppercase mr-2"
              onClick={() => scrollToSection(2)}
            >
              Education
            </button>
            <button
              className="uppercase mr-2"
              onClick={() => scrollToSection(3)}
            >
              Experience
            </button>
            <button
              className="uppercase mr-2"
              onClick={() => scrollToSection(4)}
            >
              Skills
            </button>
            <button
              className="uppercase mr-2"
              onClick={() => scrollToSection(5)}
            >
              Project
            </button>
            <button
              className="uppercase mr-8"
              onClick={() => scrollToSection(6)}
            >
              Contact
            </button>
          </div>
          <div>
            <Box sx={{ width: 300 }}>
              <Slider
                value={sliderValue}
                onChange={handleSliderChange}
                min={0}
                max={100}
                aria-label="Progress"
              />
            </Box>
          </div>
        </nav>

        <main className="pt-20 w-full bg-gradient-to-tl from-black via-gray-900 to-black ">
          {sections.map((section, index) => (
            <div ref={section.ref} key={index} className="w-11/12 mx-auto">
              {section.component}
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default App;
