import project1 from "../assets/project1.png";
import waClone from "../assets/wa-clone.png";
import cuanGaget from "../assets/cuan-gadget.png";
import tokopediaDesain from "../assets/tokopediaDesain.png";
import adminShacdn from "../assets/adminShacdn.png";

import { useScroll } from "./scrolProvider";

const MyProject = () => {
  const { projectRef } = useScroll();

  return (
    <div
      ref={projectRef}
      id="project"
      className="justify-center h-full gap-5 p-5 bg-black lg:w-screen lg:p-10"
    >
      <div
        data-aos="flip-left"
        className="flex justify-center text-[28px] text-white font-sora lg:text-[48px] mt-10 gap-4"
      >
        <p>My </p>
        <p className="font-extrabold">Project</p>
      </div>
      <div
        data-aos="zoom-in"
        className="flex flex-col items-center justify-between lg:p-16 lg:flex-row"
      >
        <img src={waClone} className="w-[600px]" />
        <div className="flex flex-col gap-5 text-white lg:pl-10">
          <div className="text-[48px] font-extrabold">01</div>
          <div className="text-[32px] font-bold">Whatsapp Ui</div>
          <p className="text-[#71717A] lg:w-[35rem]">
            Proyek ini bertujuan untuk membuat replika sederhana dari antarmuka
            pengguna WhatsApp menggunakan teknologi modern seperti React.js dan
            Tailwind CSS. Dengan menggunakan kombinasi React untuk membangun
            komponen UI yang dinamis dan Tailwind CSS untuk styling yang efisien
            dan responsif, proyek ini akan meniru fitur-fitur dasar dari
            WhatsApp, seperti daftar kontak, obrolan, dan pengaturan.
          </p>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        className="flex flex-col items-center justify-between lg:p-16 lg:flex-row"
      >
        <div className="flex lg:hidden">
          <img src={cuanGaget} className="w-[600px]" />
        </div>
        <div className="flex flex-col gap-5 text-white">
          <div className="text-[48px] font-extrabold">02</div>
          <div className="text-[32px] font-bold">Cuan Gadget</div>
          <p className="text-[#71717A] lg:w-[35rem]">
            Proyek ini bertujuan untuk membuat landing page sederhana
            menggunakan teknologi modern seperti React.js dan Tailwind CSS.
          </p>
        </div>
        <div className="hidden lg:flex">
          <img src={cuanGaget} className="w-[600px]" />
        </div>
      </div>
      <div
        data-aos="zoom-in"
        className="flex flex-col items-center justify-between lg:flex-row lg:p-16"
      >
        <img src={tokopediaDesain} className="w-[600px]" />
        <div className="flex flex-col gap-5 text-white lg:pl-10">
          <div className="text-[48px] font-extrabold">03</div>
          <div className="text-[32px] font-bold">Tokopedia Ui</div>
          <p className="text-[#71717A] lg:w-[35rem]">
            Proyek ini bertujuan untuk membuat replika sederhana dari antarmuka
            pengguna Tokopedia menggunakan teknologi modern seperti React.js dan
            Tailwind CSS. Dengan menggunakan kombinasi React untuk membangun
            komponen UI yang dinamis dan Tailwind CSS untuk styling yang efisien
            dan responsif.
          </p>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        className="flex flex-col items-center justify-between lg:p-16 lg:flex-row"
      >
        <div className="flex lg:hidden">
          <img src={adminShacdn} className="w-[600px]" />
        </div>
        <div className="flex flex-col gap-5 text-white">
          <div className="text-[48px] font-extrabold">04</div>
          <div className="text-[32px] font-bold">Admin Shacdn</div>
          <p className="text-[#71717A] lg:w-[35rem]">
            Proyek ini bertujuan untuk membuat base admin sederhana, menggunakan
            teknologi modern seperti React.js dan Tailwind CSS.
          </p>
        </div>
        <div className="hidden lg:flex">
          <img src={adminShacdn} className="w-[600px]" />
        </div>
      </div>
    </div>
  );
};

export default MyProject;
