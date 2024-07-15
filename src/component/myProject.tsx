import waClone from "../assets/wa-clone.png";
import cuanGaget from "../assets/cuan-gadget.png";
import tokopediaDesain from "../assets/tokopediaDesain.png";
import adminShacdn from "../assets/adminShacdn.png";

import { useScroll } from "./scrolProvider";
import { useState } from "react";

interface ModalInterFace {
  isOpen: boolean;
  img?: string;
}
const MyProject = () => {
  const { projectRef } = useScroll();
  const [modal, setModal] = useState<ModalInterFace>({
    isOpen: false,
    img: ""
  });

  const openModal = (img: string) => setModal({ isOpen: true, img });
  const closeModal = () => setModal({ isOpen: false, img: undefined });
  const goUrl = (url: string) => window.open(url, "_blank");

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
        <div className="relative flex group">
          <img src={waClone} className="w-[600px]" />
          <div className="absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
            <i
              className="text-lg text-white cursor-pointer fa fa-eye"
              onClick={() => openModal(waClone)}
            />
            <i
              className="text-white cursor-pointer fa-regular fa-share-from-square"
              onClick={() => goUrl("https://clonewa.netlify.app/")}
            />
          </div>
        </div>
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
        <div className="relative flex lg:hidden group">
          <img src={cuanGaget} className="w-[600px]" />
          <div className="absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
            <i
              className="text-lg text-white cursor-pointer fa fa-eye"
              onClick={() => openModal(cuanGaget)}
            />
            <i
              className="text-white cursor-pointer fa-regular fa-share-from-square"
              onClick={() => goUrl("https://cuangadget.netlify.app")}
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 text-white">
          <div className="text-[48px] font-extrabold">02</div>
          <div className="text-[32px] font-bold">Cuan Gadget</div>
          <p className="text-[#71717A] lg:w-[35rem]">
            Proyek ini bertujuan untuk membuat landing page sederhana
            menggunakan teknologi modern seperti React.js dan Tailwind CSS.
          </p>
        </div>
        <div className="relative hidden lg:flex group">
          <img src={cuanGaget} className="w-[600px]" />
          <div className="absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
            <i
              className="text-lg text-white cursor-pointer fa fa-eye"
              onClick={() => openModal(cuanGaget)}
            />
            <i
              className="text-white cursor-pointer fa-regular fa-share-from-square"
              onClick={() => goUrl("https://cuangadget.netlify.app")}
            />
          </div>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        className="flex flex-col items-center justify-between lg:flex-row lg:p-16"
      >
        <div className="relative flex group">
          <img src={tokopediaDesain} className="w-[600px]" />
          <div className="absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
            <i
              className="text-lg text-white cursor-pointer fa fa-eye"
              onClick={() => openModal(tokopediaDesain)}
            />
            <i
              className="text-white cursor-pointer fa-regular fa-share-from-square"
              onClick={() => goUrl("https://tokopedia-ui.netlify.app/")}
            />
          </div>
        </div>
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
        <div className="relative flex lg:hidden group">
          <img
            src={adminShacdn}
            className="w-[600px]"
            onClick={() => openModal(adminShacdn)}
          />
          <div className="absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
            <i
              className="text-lg text-white cursor-pointer fa fa-eye"
              onClick={() => openModal(adminShacdn)}
            />
            <i
              className="text-white cursor-pointer fa-regular fa-share-from-square"
              onClick={() => goUrl("https://adminshacdn.netlify.app/")}
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 text-white">
          <div className="text-[48px] font-extrabold">04</div>
          <div className="text-[32px] font-bold">Admin Shacdn</div>
          <p className="text-[#71717A] lg:w-[35rem]">
            Proyek ini bertujuan untuk membuat base admin sederhana, menggunakan
            teknologi modern seperti React.js dan Tailwind CSS.
          </p>
        </div>
        <div className="relative hidden lg:flex group">
          <img src={adminShacdn} className="w-[600px]" />
          <div className="absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
            <i
              className="text-lg text-white cursor-pointer fa fa-eye"
              onClick={() => openModal(adminShacdn)}
            />
            <i
              className="text-white cursor-pointer fa-regular fa-share-from-square"
              onClick={() => goUrl("https://adminshacdn.netlify.app/")}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="w-32 p-2 text-center bg-white rounded backdrop-blur-lg ">
          More Project
        </button>
      </div>

      {modal.isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={() => closeModal()}
        >
          <div className="p-4" data-aos="zoom-in">
            <img src={modal.img} alt="Modal" className="w-[900px]" />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProject;
