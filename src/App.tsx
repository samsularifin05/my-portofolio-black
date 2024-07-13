import Header from "./component/header";
import HeroSection from "./component/heroSection";
import MySkils from "./component/myskils";
import MyExperients from "./component/myExperients";
import AboutMe from "./component/aboutMe";
import { useEffect } from "react";
import SmoothScroll from "smooth-scroll";
import MyProject from "./component/myProject";

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
      <MyProject />
    </main>
  );
};

export default App;
