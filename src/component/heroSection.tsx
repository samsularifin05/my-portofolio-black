import heroSection from "../assets/hero.svg";
import { useScroll } from "./scrolProvider";

const HeroSection = () => {
  const { aboutMeRef } = useScroll();

  return (
    <div
      id="#"
      ref={aboutMeRef}
      className="flex flex-row items-center px-4 lg:w-screen lg:h-screen lg:py-0 lg:px-20"
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
          className="lg:px-2  text-zinc-400 lg:w-[37rem] text-justify"
          data-aos="fade-right"
        >
          Dengan pengalaman kerja dari tahun 2018 hingga saat ini di PT.
          Nagatech System Integrator sebagai Front-end Developer, saya telah
          mengembangkan keahlian khusus dalam pemrograman Front-end menggunakan
          Node JS dengan React JS. Selain itu saya memiliki kemampuan untuk
          merancang antarmuka pengguna yang responsif dan interaktif menggunakan
          Tailwind, memastikan kinerja aplikasi yang optimal, serta
          berkolaborasi dengan tim untuk mengimplementasikan solusi teknologi
          yang inovatif
        </p>
        <div className="flex flex-row gap-5 px-2 mt-5 lg:mt-22">
          <a
            href="https://www.facebook.com/samsularifin30"
            data-aos="fade-up"
            data-aos-easing="ease-in-back"
            data-aos-delay="50"
            data-aos-offset="0"
            target="_blank"
            className="flex items-center justify-center w-10 h-10 bg-black lg:w-20 lg:h-16"
          >
            {" "}
            <i className="text-white fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/samsularifin05/"
            target="_blank"
            data-aos="fade-up"
            data-aos-easing="ease-in-back"
            data-aos-delay="100"
            data-aos-offset="0"
            className="flex items-center justify-center w-10 h-10 lg:w-20 lg:h-16 outline"
          >
            {" "}
            <i className=" fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://github.com/samsularifin05"
            data-aos="fade-up"
            target="_blank"
            data-aos-easing="ease-in-back"
            data-aos-delay="150"
            data-aos-offset="0"
            className="flex items-center justify-center w-10 h-10 lg:w-20 lg:h-16 outline"
          >
            {" "}
            <i className=" fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/samsularifin05/"
            target="_blank"
            data-aos="fade-up"
            data-aos-easing="ease-in-back"
            data-aos-delay="200"
            data-aos-offset="0"
            className="flex items-center justify-center w-10 h-10 lg:w-20 lg:h-16 outline"
          >
            {" "}
            <i className="fa-brands fa-linkedin"></i>
          </a>
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
