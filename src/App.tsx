import Header from "./component/header";
import HeroSection from "./component/heroSection";
import MySkils from "./component/myskils";
import MyExperients from "./component/myExperients";
import AboutMe from "./component/aboutMe";

import MyProject from "./component/myProject";
import Contact from "./component/contact";
// import Testiimonial from "./component/testimonial";
import Footer from "./component/footer";
import { ScrollProvider } from "./component/scrolProvider";

const App = () => {
  return (
    <ScrollProvider>
      <main className="flex flex-col scroll-smooth">
        <Header />
        <HeroSection />
        <AboutMe />
        <MyExperients />
        <MySkils />
        <MyProject />
        {/* <Testiimonial /> */}
        <Contact />
        <Footer />
      </main>
    </ScrollProvider>
  );
};

export default App;
