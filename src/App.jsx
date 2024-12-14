import { useRef, useState } from "react";
import { Box, Drawer, IconButton, Slider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const navItems = [
    { label: "Happiness Abiye", section: 0, isPrimary: true },
    { label: "About Me", section: 1 },
    { label: "Education", section: 2 },
    { label: "Experience", section: 3 },
    { label: "Skills", section: 4 },
    { label: "Project", section: 5 },
    { label: "Contact", section: 6 },
  ];

  const renderNavButton = (item) => (
    <button
      key={item.label}
      onClick={() => {
        scrollToSection(item.section);
        setIsMenuOpen(false);
      }}
      className={`uppercase text-nowrap mr-4 ${
        item.isPrimary
          ? "bg-gradient-to-r from-gray-200 to-black-400 text-white py-2 shadow-lg"
          : "text-white"
      }`}
    >
      {item.label}
    </button>
  );

  return (
    <div className="relative h-screen">
      <div className="max-w-[1300px] mx-auto relative">
        <nav className="fixed max-w-[1300px] mx-auto h-20 bg-gray-900 text-white shadow-xl z-10 flex items-center justify-between top-0 left-0 right-0 px-2">
          <div className="md:hidden mr-4 cursor-pointer">
            <IconButton onClick={() => setIsMenuOpen(true)}>
              <MenuIcon className=" text-white" />
            </IconButton>
          </div>

          <div className="hidden md:flex flex-1 justify-between">
            {navItems.map(renderNavButton)}
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

          <Drawer
            anchor="left"
            open={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
            PaperProps={{
              sx: {
                backgroundColor: "#1a202c",
                color: "white",
              },
            }}
          >
            <div className="flex flex-col space-y-4 p-4">
              {navItems.map(renderNavButton)}
            </div>
          </Drawer>
        </nav>

        <main className="mt-24 bg-gradient-to-tl from-black via-gray-900 to-black text-white">
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
