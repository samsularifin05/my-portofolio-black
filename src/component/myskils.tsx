import nestJs from "../assets/icon-nest.svg";
import socketIo from "../assets/icon-socket.svg";
import tailwind from "../assets/tailwind.svg";
import reactIc from "../assets/react.svg";
import wordpress from "../assets/wordpress.svg";

const MySkils = () => {
  return (
    <div id="skils">
      <div className="flex flex-col items-center justify-center h-auto mt-10 mb-20 lg:mt-0">
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
          <div className="text-white bg-black kotakSkils ">
            <i className="fa-brands fa-js text-[40px]"></i>
            Javascript
          </div>
          <div className="kotakSkils">
            <img src={tailwind} className="h-10" />
            Tailwind
          </div>
          <div className="kotakSkils">
            <img src={reactIc} className="h-10" />
            React Js
          </div>
          <div className="kotakSkils">
            <img src={reactIc} className="h-10" />
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
            <img src={wordpress} className="h-10" />
            Wordpress
          </div>
          <div className="kotakSkils">
            <i className="fa-brands fa-php text-[40px]"></i>
            Php
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkils;
