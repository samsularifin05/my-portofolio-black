import nestJs from "../assets/icon-nest.svg";
import socketIo from "../assets/icon-socket.svg";
import tailwind from "../assets/tailwind.svg";
import { useScroll } from "./scrolProvider";

const MySkils = () => {
  const { skillsRef } = useScroll();
  return (
    <div
      id="sklills"
      ref={skillsRef}
      className="flex flex-col items-center justify-center h-auto mt-12 mb-20 lg:h-screen lg:mt-0"
    >
      <div
        data-aos="flip-left"
        className="flex justify-center  gap-2 text-[30px] lg:text-[48px]"
      >
        <p className="font-normal font-sora ">My</p>{" "}
        <p className="font-extrabold font-sora">Skills</p>
      </div>
      <div
        data-aos="flip-left"
        className="grid justify-center grid-cols-2 gap-5 px-4 mt-10 md:grid-cols-4 lg:grid-cols-5"
      >
        <div className="kotakSkils">
          <i className=" fa-brands fa-github text-[40px]"></i>
          Git
        </div>
        <div className="kotakSkils">
          <i className="fa-brands fa-js text-[40px]"></i>
          Javascript
        </div>
        <div className="kotakSkils">
          <img src={tailwind} className="h-10" />
          Tailwind
        </div>
        <div className="kotakSkils">
          <i className="fa-brands fa-react text-[40px]"></i>
          React Js
        </div>
        <div className="kotakSkils">
          <i className="fa-brands fa-react text-[40px]"></i>
          React Native
        </div>
        <div className="kotakSkils">
          <img src={nestJs} className="h-10" />
          Nest Js
        </div>
        <div className="kotakSkils">
          <img src={socketIo} className="h-10" />
          Socket.io
        </div>
        <div className="kotakSkils">
          <i className="fa-brands fa-laravel text-[40px]"></i>
          Laravel
        </div>
        <div className="kotakSkils">
          <i className="fa-brands fa-wordpress text-[40px]"></i>
          Wordpress
        </div>
        <div className="kotakSkils">
          <i className="fa-brands fa-php text-[40px]"></i>
          Php
        </div>
      </div>
    </div>
  );
};

export default MySkils;
