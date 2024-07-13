import logo from "../assets/logo 1.svg";

const Header = () => {
  return (
    <div
      id="#"
      className="sticky top-0 z-50 flex flex-row justify-between w-full px-4 py-4 bg-white shadow lg:px-20"
    >
      <a href="#" className="flex items-center justify-center gap-5">
        <img src={logo} />{" "}
        <div className="flex flex-col">
          <p className="font-bold font-sora text-[15px] lg:text-[20px]">
            Samsul Arifin
          </p>
          <p className="text-[10px]">Frondend Developer</p>
        </div>
      </a>
      <div className="items-center hidden gap-8 font-semibold font-sora lg:flex">
        <a href="#about">About Me</a>
        <a href="#skils">Skils</a>
        <a href="#project">Project</a>
        <a href="#contact">Contact me</a>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex lg:hidden">
          <i className="fa-solid fa-bars  text-[20px]"></i>
        </div>
        <button className="items-center justify-center hidden h-10 gap-2 font-semibold text-white bg-black rounded lg:flex font-sora w-36">
          Resume <i className="fa-solid fa-download"></i>
        </button>
      </div>
    </div>
  );
};

export default Header;
