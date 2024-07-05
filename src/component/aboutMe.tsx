import profilPeople from "../assets/profilPeople.svg";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="flex items-center justify-center h-auto px-4 pb-10 lg:h-screen mt-28 lg:px-20 box-b"
      data-speed="1"
    >
      <div className="flex flex-col gap-20 lg:flex-row">
        <img src={profilPeople} data-aos="flip-right" />
        <div className="flex flex-col font-mono ">
          <div className="text-[48px] flex flex-row gap-5" data-aos="fade-down">
            <p className="font-normal">About</p>
            <p className="font-extrabold ">Me</p>
          </div>
          <div
            data-aos="zoom-in"
            className="text-[15px] font-sora font-normal gap-4 flex flex-col text-[#71717A]"
          >
            <div>
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </div>
            <div>
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </div>
            <div>
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
