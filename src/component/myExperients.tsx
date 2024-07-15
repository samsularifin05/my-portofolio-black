import lpkia from "../assets/lpkia.png";
import ngtc from "../assets/ngtc.jpeg";
import suteki from "../assets/suteki.jpeg";
import { useScroll } from "./scrolProvider";

const MyExperients = () => {
  const { experienceRef } = useScroll();

  return (
    <div
      ref={experienceRef}
      id="my-experience"
      className="flex-col items-center w-screen h-full py-12 bg-black lg:h-screen"
    >
      <div
        data-aos="flip-left"
        className="flex justify-center gap-2 text-[28px] lg:text-[48px] mt-10 text-white"
      >
        <p>My</p>
        <p className="font-mono font-extrabold">Experience</p>
      </div>
      <div className="flex flex-col gap-10 px-4 mt-10 lg:flex-row lg:mt-10 lg:px-36">
        <div
          data-aos="fade-up"
          data-aos-easing="ease-in-back"
          data-aos-delay="50"
          data-aos-offset="0"
          className="flex flex-col w-full h-auto p-5 text-white outline outline-white "
        >
          <div className="flex flex-col w-full h-auto lg:items-center lg:justify-between lg:flex-row ">
            <div className="flex flex-row items-center gap-4">
              <img src={ngtc} className="w-10 h-10" />{" "}
              <div>
                <p>PT Nagatech Sistem Integrator </p>
                <p className="text-[10px]">(November 2019 - Sekarang)</p>
              </div>
            </div>
          </div>
          <p className="mt-4 text-[#D4D4D8]">
            Merancang dan mengimplementasikan clean architecture, menerapkan
            clean code, menganalisis serta merancang fitur dari inquiry client
            ke sistem, menghitung penjadwalan untuk proyek baru, mengarahkan
            staf sesuai prosedur, serta mengembangkan algoritma program lama
            dengan algoritma baru.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-offset="0"
          className="flex flex-col w-full h-auto p-5 text-white outline outline-white "
        >
          <div className="flex flex-col w-full h-auto lg:items-center lg:justify-between lg:flex-row ">
            <div className="flex flex-row items-center gap-4">
              <img src={suteki} className="w-10 h-10" />{" "}
              <div>
                <p>PT Suteki Karya Nusantara</p>
                <p className="text-[10px]">(Maret 2019 - Juli 2019)</p>
              </div>
            </div>
          </div>
          <p className="mt-4 text-[#D4D4D8]">
            Mengembangkan aplikasi sekolah menggunakan PHP native dan MySQL,
            melakukan perbaikan bug, meningkatkan antarmuka pengguna untuk
            meningkatkan pengalaman dan responsivitas, serta mengimplementasikan
            fitur-fitur baru berdasarkan kebutuhan dan umpan balik pengguna.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="ease-in-back"
          data-aos-delay="150"
          data-aos-offset="0"
          className="flex flex-col w-full h-auto p-5 text-white outline outline-white "
        >
          <div className="flex flex-col w-full h-auto lg:items-center lg:justify-between lg:flex-row ">
            <div className="flex flex-row items-center gap-4">
              <img src={lpkia} className="w-10 h-10" />{" "}
              <div>
                <p>Institut Digital Ekonomi LPKIA</p>
                <p> (Mei 2018 - Januari 2019)</p>
              </div>
            </div>
          </div>
          <p className="mt-4 text-[#D4D4D8]">
            Membangun Company Profile untuk prodi Administrasi Bisnis
            (Menggunakan Wordpres) dan Mengelola konten sosial media
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyExperients;
