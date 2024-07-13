import project1 from "../assets/project1.png";

const MyProject = () => {
  return (
    <div id="project" className="w-screen h-full p-10 bg-black">
      <div
        data-aos="flip-left"
        className="flex justify-center text-white font-sora text-[48px] gap-4"
      >
        <p>My </p>
        <p className="font-extrabold">Project</p>
      </div>
      <div
        data-aos="zoom-in"
        className="flex flex-row items-center justify-between p-16"
      >
        <img src={project1} />
        <div className="flex flex-col gap-5 pl-10 text-white">
          <div className="text-[48px] font-extrabold">01</div>
          <div className="text-[32px] font-bold">
            Crypto Screener Application
          </div>
          <p className="text-[#71717A] w-[35rem]">
            I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to specimen book.
          </p>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        className="flex flex-row items-center justify-between p-16"
      >
        <div className="flex flex-col gap-5 text-white">
          <div className="text-[48px] font-extrabold">02</div>
          <div className="text-[32px] font-bold">
            Crypto Screener Application
          </div>
          <p className="text-[#71717A] w-[35rem]">
            I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to specimen book.
          </p>
        </div>
        <img src={project1} />
      </div>
      <div
        data-aos="zoom-in"
        className="flex flex-row items-center justify-between p-16"
      >
        <img src={project1} />
        <div className="flex flex-col gap-5 pl-10 text-white">
          <div className="text-[48px] font-extrabold">01</div>
          <div className="text-[32px] font-bold">
            Crypto Screener Application
          </div>
          <p className="text-[#71717A] w-[35rem]">
            I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to specimen book.
          </p>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        className="flex flex-row items-center justify-between p-16"
      >
        <div className="flex flex-col gap-5 text-white">
          <div className="text-[48px] font-extrabold">02</div>
          <div className="text-[32px] font-bold">
            Crypto Screener Application
          </div>
          <p className="text-[#71717A] w-[35rem]">
            I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to specimen book.
          </p>
        </div>
        <img src={project1} />
      </div>
    </div>
  );
};

export default MyProject;
