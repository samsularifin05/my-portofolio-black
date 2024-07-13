import Header from "./component/header";
import HeroSection from "./component/heroSection";
import MySkils from "./component/myskils";
import MyExperients from "./component/myExperients";
import AboutMe from "./component/aboutMe";
import { useEffect } from "react";
import SmoothScroll from "smooth-scroll";
import MyProject from "./component/myProject";
import Testiimonial from "./component/tesTimonial";

const App = () => {
  const getOffset = (hash: string): number => {
    switch (hash) {
      case "#about":
        return 60;
      case "#skils":
        return 200;
      case "#project":
        return 60;
      case "#contact":
        return 60;
      default:
        return 0;
    }
  };
  // console.log();
  useEffect(() => {
    const hash = window.location.hash;
    new SmoothScroll('a[href*="#"]', {
      speed: 800,
      speedAsDuration: true,
      offset: getOffset(hash)
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
      <Testiimonial />
    </main>
  );
};

export default App;
