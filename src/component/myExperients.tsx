import google from "../assets/google.svg";
import { useScroll } from "./scrolProvider";

const MyExperients = () => {
  const { experienceRef } = useScroll();

  return (
    <div
      ref={experienceRef}
      id="my-experience"
      className="w-screen h-auto py-12 bg-black lg:h-full"
      data-speed="0.16"
    >
      <div
        data-aos="flip-left"
        className="flex justify-center gap-2 text-[28px] lg:text-[48px] mt-10 text-white"
      >
        <p>My</p>
        <p className="font-mono font-extrabold">Experience</p>
      </div>
      <div className="flex flex-col gap-10 px-4 mt-10 lg:mt-10 lg:px-36">
        <div
          data-aos="fade-up"
          data-aos-easing="ease-in-back"
          data-aos-delay="50"
          data-aos-offset="0"
          className="flex flex-col w-full h-auto p-5 text-white outline outline-white "
        >
          <div className="flex flex-col w-full h-auto lg:items-center lg:justify-between lg:flex-row ">
            <div className="flex flex-row items-center justify-between gap-4">
              <img src={google} className="w-10 h-10" />{" "}
              <p>PT Nagatech Sistem Integrator</p>
            </div>
            <div className="mt-4">Nov 2019 - Present</div>
          </div>
          <p className="mt-4 text-[#D4D4D8]">
            Saya adalah seorang desainer yang penuh semangat dan saya
            mengkhususkan diri dalam pengembangan full stack, yang berarti saya
            memiliki keahlian dalam menggunakan React.js dan Node.js. Saya
            sangat antusias dalam menciptakan produk digital yang memiliki aspek
            teknis dan visual yang menarik.
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
            <div className="flex flex-row items-center justify-between gap-4">
              <img src={google} className="w-10 h-10" />{" "}
              <p>Lead Software Engineer at Google</p>
            </div>
            <div className="mt-4">Nov 2019 - Present</div>
          </div>
          <p className="mt-4 text-[#D4D4D8]">
            Bagi saya, pengalaman pengguna yang baik, desain yang sempurna, dan
            kode yang mudah dibaca dan berkinerja tinggi sangatlah penting. Saya
            mulai belajar menjadi pengembang web pada tahun 2015, dan sejak itu,
            saya terus berkembang dan menghadapi tantangan baru. Saya selalu
            belajar teknologi terbaru yang ada. Sekarang, saya berada di usia
            awal tiga puluhan dan telah menghabiskan 7 tahun dalam perjalanan
            saya sebagai pengembang web. Saat ini, saya sedang membangun
            aplikasi web yang canggih menggunakan teknologi modern seperti
            Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, dan banyak lagi.
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
            <div className="flex flex-row items-center justify-between gap-4">
              <img src={google} className="w-10 h-10" />{" "}
              <p>Lead Software Engineer at Google</p>
            </div>
            <div className="mt-4">Nov 2019 - Present</div>
          </div>
          <p className="mt-4 text-[#D4D4D8]">
            Ketika saya tidak sibuk mengembangkan aplikasi, Anda bisa menemukan
            saya di Twitter atau di Indie Hacker. Di sana, saya mengikuti
            perjalanan startup awal atau menikmati waktu luang saya. Jika Anda
            ingin mendapatkan informasi terkait teknologi dan melihat
            proyek-proyek yang saya bangun secara publik, Anda bisa mengikuti
            saya di Twitter atau melihat repositori saya di GitHub.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyExperients;
