import React from "react";
import profilPeople from "../assets/profilPeople.svg";
import { useScroll } from "./scrolProvider";

const AboutMe: React.FC = () => {
  const { aboutMeRef } = useScroll();

  return (
    <div
      id="about-me"
      ref={aboutMeRef}
      className="flex items-center justify-center h-auto px-4 pb-10 lg:h-screen mt-28 lg:px-20"
      data-speed="1"
    >
      <div className="flex flex-col items-center gap-4 lg:flex-row">
        <img
          src={profilPeople}
          data-aos="flip-right"
          className="flex items-center justify-center lg:mt-12"
          alt="Profile"
        />
        <div className="flex flex-col font-mono ">
          <div className="text-[48px] flex flex-row gap-5" data-aos="fade-down">
            <p className="font-normal">About</p>
            <p className="font-extrabold ">Me</p>
          </div>
          <div
            data-aos="zoom-in"
            className="text-[15px] font-sora font-normal gap-4 flex flex-col text-[#71717A]"
          >
            <div>
              Saya adalah seorang desainer yang penuh semangat dan saya
              mengkhususkan diri dalam pengembangan full stack, yang berarti
              saya memiliki keahlian dalam menggunakan React.js dan Node.js.
              Saya sangat antusias dalam menciptakan produk digital yang
              memiliki aspek teknis dan visual yang menarik. Bagi saya,
              pengalaman pengguna yang baik, desain yang sempurna, dan kode yang
              mudah dibaca dan berkinerja tinggi sangatlah penting.
            </div>
            <div>
              Saya mulai belajar menjadi pengembang web pada tahun 2019, dan
              sejak itu, saya terus berkembang dan menghadapi tantangan baru.
              Saya selalu belajar teknologi terbaru yang ada. Sekarang, saya
              berada di usia awal tiga puluhan dan telah menghabiskan 4,5 tahun
              dalam perjalanan saya sebagai pengembang web. Saat ini, saya
              sedang membangun aplikasi web yang canggih menggunakan teknologi
              modern seperti Next.js, TypeScript, Nestjs, Tailwindcss, Supabase,
              dan banyak lagi.
            </div>
            <div>
              Ketika saya tidak sibuk mengembangkan aplikasi, Jika Anda ingin
              mendapatkan informasi terkait teknologi dan melihat proyek-proyek
              yang saya bangun secara publik, Anda bisa mengikuti saya di sosial
              media saya atau melihat repositori saya di GitHub.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
