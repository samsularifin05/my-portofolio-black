import Header from "./component/header";
import HeroSection from "./component/heroSection";
import MySkils from "./component/myskils";
import MyExperients from "./component/myExperients";
import AboutMe from "./component/aboutMe";
import { useEffect } from "react";
import SmoothScroll from "smooth-scroll";

const App = () => {
  useEffect(() => {
    new SmoothScroll('a[href*="#"]', {
      speed: 800,
      speedAsDuration: true
    });
  }, []);

  return (
    <main className="flex flex-col w-screen ">
      <Header />
      <HeroSection />
      <MySkils />
      <MyExperients />
      <AboutMe />
      <div
        id="project"
        className="w-screen h-screen p-10 bg-black"
        data-speed="1.5"
      >
        <div className="flex justify-center text-white font-sora text-[48px] gap-4">
          <p>My </p>
          <p className="font-extrabold">Project</p>
        </div>
      </div>
    </main>
  );
};

export default App;
