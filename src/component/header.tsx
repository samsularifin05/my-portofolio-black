import { useState } from "react";
import logo from "../assets/logo 1.svg";
import { useScroll } from "./scrolProvider";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollToPage, scrollToHome } = useScroll();

  const handleScroll = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    page: string,
    yOffset?: number
  ) => {
    e.preventDefault();
    scrollToPage(page, yOffset);
  };

  const goUrl = (url: string) => window.open(url, "_blank");

  return (
    <div className="sticky top-0 z-50 flex flex-row justify-between w-full px-4 py-2 bg-white shadow lg:py-4 lg:px-20">
      <span
        onClick={() => scrollToHome()}
        className="flex items-center justify-center gap-5 cursor-pointer"
      >
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <div className="flex flex-col">
          <p className="font-bold text-[15px] lg:text-[20px]">Samsul Arifin</p>
          <p className="text-[10px]">Frontend Developer</p>
        </div>
      </span>
      <div className="items-center hidden gap-8 font-semibold lg:flex">
        <span
          onClick={(e) => handleScroll(e, "aboutMe", 0)}
          role="button"
          tabIndex={0}
          className="cursor-pointer"
        >
          About Me
        </span>
        <span
          onClick={(e) => handleScroll(e, "skills", 1600)}
          role="button"
          tabIndex={0}
          className="cursor-pointer"
        >
          Skills
        </span>
        <span
          onClick={(e) => handleScroll(e, "experience", 5000)}
          role="button"
          tabIndex={0}
          className="cursor-pointer"
        >
          My Experience
        </span>
        <span
          onClick={(e) => handleScroll(e, "project", 10)}
          role="button"
          tabIndex={0}
          className="cursor-pointer"
        >
          Project
        </span>
        <span
          onClick={(e) => handleScroll(e, "contactMe")}
          role="button"
          tabIndex={0}
          className="cursor-pointer"
        >
          Contact Me
        </span>
      </div>
      {isOpen && (
        <div className="absolute bg-white shadow right-5 top-12 lg:hidden">
          <div className="flex flex-col items-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <span
              onClick={(e) => handleScroll(e, "aboutMe")}
              className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-200"
            >
              About Me
            </span>
            <span
              onClick={(e) => handleScroll(e, "skills")}
              className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-200"
            >
              Skills
            </span>
            <span
              onClick={(e) => handleScroll(e, "experience")}
              className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-200"
            >
              My Experience
            </span>
            <span
              onClick={(e) => handleScroll(e, "project", -100)}
              className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-200"
            >
              Project
            </span>
            <span
              onClick={(e) => handleScroll(e, "contactMe")}
              className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-200"
            >
              Contact Me
            </span>
          </div>
        </div>
      )}
      <div className="flex items-center justify-center">
        <div className="flex lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <i
            className={`fa-solid ${
              isOpen ? "fa-times" : "fa-bars"
            } text-[20px]`}
          ></i>
        </div>
        <button
          onClick={() =>
            goUrl(
              "https://drive.google.com/drive/folders/10xw79NwrXF86xfvjz69KZ01nDZ-XMq46?usp=drive_link"
            )
          }
          type="button"
          className="items-center justify-center hidden h-10 gap-2 font-semibold text-white bg-black rounded lg:flex w-36"
        >
          Resume <i className="fa-solid fa-download"></i>
        </button>
      </div>
    </div>
  );
};

export default Header;
