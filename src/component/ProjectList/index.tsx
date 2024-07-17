import { useState } from "react";
import { ProjectInterFace } from "./projectList";

interface ModalInterFace {
  isOpen: boolean;
  img?: string;
}
const ProjectList = (props: ProjectInterFace) => {
  const { img, judul, deskripsi, url, postition, no, tag } = props;
  const [modal, setModal] = useState<ModalInterFace>({
    isOpen: false,
    img: ""
  });

  const openModal = (img: string) => setModal({ isOpen: true, img });
  const closeModal = () => setModal({ isOpen: false, img: undefined });
  const goUrl = (url: string) => window.open(url, "_blank");
  return (
    <>
      {postition === "LEFT" ? (
        <div
          data-aos="zoom-in"
          className="flex flex-col items-center justify-between lg:p-16 lg:flex-row"
        >
          <div className="relative flex group">
            <div className="gap-5">
              <img src={img} className="w-[600px]" />
              <div className="flex flex-row justify-center gap-3 mt-3">
                {tag.map((list) => {
                  return (
                    <div className="flex items-center justify-center w-32 h-10 p-2 mt-2 bg-white rounded">
                      {list}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
              <i
                className="text-lg text-white cursor-pointer fa fa-eye"
                onClick={() => openModal(img)}
              />
              {url !== "#" && (
                <i
                  className="text-white cursor-pointer fa-regular fa-share-from-square"
                  onClick={() => goUrl(url)}
                />
              )}
            </div>
          </div>
          <div className="flex flex-col gap-5 text-white lg:pl-10">
            <div className="text-[48px] font-extrabold">0{no}</div>
            <div className="text-[32px] font-bold">{judul}</div>
            <p className="text-[#71717A] lg:w-[35rem]">{deskripsi}</p>
          </div>
        </div>
      ) : (
        <div
          data-aos="zoom-in"
          className="flex flex-col items-center justify-between lg:p-16 lg:flex-row"
        >
          <div className="relative flex lg:hidden group">
            <img src={img} className="w-[600px]" />
            <div className="absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
              <i
                className="text-lg text-white cursor-pointer fa fa-eye"
                onClick={() => openModal(img)}
              />
              {url !== "#" && (
                <i
                  className="text-white cursor-pointer fa-regular fa-share-from-square"
                  onClick={() => goUrl(url)}
                />
              )}
            </div>
          </div>
          <div className="flex flex-col gap-5 text-white">
            <div className="text-[48px] font-extrabold">
              {no ? (no > 9 ? no : `0${no}`) : ""}
            </div>
            <div className="text-[32px] font-bold">{judul}</div>
            <p className="text-[#71717A] lg:w-[35rem]">{deskripsi}</p>
          </div>
          <div className="relative hidden lg:flex group">
            <div className="gap-5">
              <img src={img} className="w-[600px]" />
              <div className="flex flex-row justify-center gap-3 mt-3">
                {tag.map((list) => {
                  return (
                    <div className="flex items-center justify-center w-32 h-10 p-2 mt-2 bg-white rounded">
                      {list}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
              <i
                className="text-lg text-white cursor-pointer fa fa-eye"
                onClick={() => openModal(img)}
              />
              {url !== "#" && (
                <i
                  className="text-white cursor-pointer fa-regular fa-share-from-square"
                  onClick={() => goUrl(url)}
                />
              )}
            </div>
          </div>
        </div>
      )}

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
    </>
  );
};

export default ProjectList;
