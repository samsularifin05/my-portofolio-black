import heroSection from "../assets/hero.svg";

const HeroSection = () => {
  return (
    <div
      id="hero-section"
      className="flex flex-row items-center px-4 lg:w-screen lg:h-screen lg:py-6 lg:px-20"
    >
      <div className="w-[50rem] flex flex-col gap-2">
        <div className="flex items-center justify-center lg:hidden">
          <img src={heroSection} className="" />
        </div>
        <div className="mt-2" data-aos="fade-left">
          <div className="font-normal font-sora text-[25px] lg:text-[48px] flex flex-row gap-5">
            <p className="font-normal ">Hello I’am</p>
            <p className="font-extrabold ">Samsul Arifin.</p>
          </div>
          <div className="font-normal font-sora text-[25px] lg:text-[48px] flex flex-row gap-5">
            <p className="font-extrabold">Frontend</p>
            <p className="font-extrabold text-white stroke">Developer.</p>
          </div>
          <div className="font-normal font-sora text-[25px] lg:text-[48px] flex flex-row gap-5">
            <p className="font-normal">Baseed In</p>
            <p className="font-extrabold">Bandung.</p>
          </div>
        </div>
        <p
          className="lg:px-2  text-zinc-400 lg:w-[37rem]"
          data-aos="fade-right"
        >
          I'm Samsul Arifin Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to specimen book.
        </p>
        <div className="flex flex-row gap-5 px-2 mt-5 lg:mt-28">
          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-back"
            data-aos-delay="50"
            data-aos-offset="0"
            className="flex items-center justify-center w-10 h-10 bg-black lg:w-20 lg:h-16"
          >
            {" "}
            <i className="text-white fa-brands fa-facebook"></i>
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-back"
            data-aos-delay="100"
            data-aos-offset="0"
            className="flex items-center justify-center w-10 h-10 lg:w-20 lg:h-16 outline"
          >
            {" "}
            <i className=" fa-brands fa-instagram"></i>
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-back"
            data-aos-delay="150"
            data-aos-offset="0"
            className="flex items-center justify-center w-10 h-10 lg:w-20 lg:h-16 outline"
          >
            {" "}
            <i className=" fa-brands fa-github"></i>
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-back"
            data-aos-delay="200"
            data-aos-offset="0"
            className="flex items-center justify-center w-10 h-10 lg:w-20 lg:h-16 outline"
          >
            {" "}
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>

      <div
        className="absolute right-0 hidden lg:flex bottom-11"
        data-aos="flip-left"
      >
        <img src={heroSection} className="h-[596px] w-[898px]" />
      </div>
    </div>
  );
};

export default HeroSection;
