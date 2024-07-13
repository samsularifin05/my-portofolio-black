import project1 from "../assets/project1.png";

const MyProject = () => {
  return (
    <div
      id="project"
      className="justify-center h-full gap-5 p-5 bg-black lg:w-screen lg:p-10"
    >
      <div
        data-aos="flip-left"
        className="flex justify-center text-white font-sora text-[48px] gap-4"
      >
        <p>My </p>
        <p className="font-extrabold">Project</p>
      </div>
      <div
        data-aos="zoom-in"
        className="flex flex-col items-center justify-between lg:p-16 lg:flex-row"
      >
        <img src={project1} />
        <div className="flex flex-col gap-5 text-white lg:pl-10">
          <div className="text-[48px] font-extrabold">01</div>
          <div className="text-[32px] font-bold">
            Crypto Screener Application
          </div>
          <p className="text-[#71717A] lg:w-[35rem]">
            I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to specimen book.
          </p>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        className="flex flex-col items-center justify-between lg:p-16 lg:flex-row"
      >
        <div className="flex lg:hidden">
          <img src={project1} />
        </div>
        <div className="flex flex-col gap-5 text-white">
          <div className="text-[48px] font-extrabold">02</div>
          <div className="text-[32px] font-bold">
            Crypto Screener Application
          </div>
          <p className="text-[#71717A] lg:w-[35rem]">
            I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to specimen book.
          </p>
        </div>
        <div className="hidden lg:flex">
          <img src={project1} />
        </div>
      </div>
      <div
        data-aos="zoom-in"
        className="flex flex-col items-center justify-between lg:flex-row lg:p-16"
      >
        <img src={project1} />
        <div className="flex flex-col gap-5 text-white lg:pl-10">
          <div className="text-[48px] font-extrabold">01</div>
          <div className="text-[32px] font-bold">
            Crypto Screener Application
          </div>
          <p className="text-[#71717A] lg:w-[35rem]">
            I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to specimen book.
          </p>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        className="flex flex-col items-center justify-between lg:p-16 lg:flex-row"
      >
        <div className="flex lg:hidden">
          <img src={project1} />
        </div>
        <div className="flex flex-col gap-5 text-white">
          <div className="text-[48px] font-extrabold">02</div>
          <div className="text-[32px] font-bold">
            Crypto Screener Application
          </div>
          <p className="text-[#71717A] lg:w-[35rem]">
            I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to specimen book.
          </p>
        </div>
        <div className="hidden lg:flex">
          <img src={project1} />
        </div>
      </div>
    </div>
  );
};

export default MyProject;
