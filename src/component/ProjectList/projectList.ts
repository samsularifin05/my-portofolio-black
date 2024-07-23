import waClone from "../../assets/portofolioweb/wa-clone.png";
import cuanGaget from "../../assets/portofolioweb/cuan-gadget.png";
import tokopediaDesain from "../../assets/portofolioweb/tokopediaDesain.png";
import batCargo from "../../assets/portofolioweb/battCargo/battCargo.png";
import AlQuran from "../../assets/portofolioweb/al-quran.png";
import Hidup from "../../assets/portofolioweb/hidup.png";
import Nagagold from "../../assets/portofolioweb/nagagold.png";
import ExportDataFile from "../../assets/portofolioweb/exportDatafile.png";
import TimeKeeping from "../../assets/portofolioweb/timekeeping.png";
import Geka from "../../assets/portofolioweb/geka.png";
import Sunmori from "../../assets/portofolioweb/sunmori.png";
import Suryajaya from "../../assets/portofolioweb/suryajaya.png";
import Gethering from "../../assets/portofolioweb/gethering.png";
import Kencana from "../../assets/portofolioweb/kencana.png";
import Ud from "../../assets/portofolioweb/ud.png";
import MamangRamen from "../../assets/portofolioweb/mamangRamen.png";

export interface ProjectInterFace {
  no?: string;
  img: string;
  judul: string;
  deskripsi: string;
  url: string;
  postition: "LEFT" | "RIGHT";
  tag: string[];
}
export const listDataProject: ProjectInterFace[] = [
  {
    no: "01",
    judul: "Whatsapp Ui",
    postition: "LEFT",
    url: "https://clonewa.netlify.app/",
    tag: ["React.Js", "Typescript", "Tailwind"],
    img: waClone,
    deskripsi:
      "Proyek ini bertujuan untuk membuat replika sederhana dari antarmuka pengguna WhatsApp menggunakan teknologi modern seperti React.js dan Tailwind CSS. Dengan menggunakan kombinasi React untuk membangun komponen UI yang dinamis dan Tailwind CSS untuk styling yang efisien dan responsif, proyek ini akan meniru fitur-fitur dasar dari WhatsApp, seperti daftar kontak, obrolan, dan pengaturan."
  },
  {
    no: "02",
    judul: "Cuan Gadget",
    postition: "RIGHT",
    url: "https://cuangadget.netlify.app/",
    tag: ["React.Js", "Typescript", "Tailwind"],
    img: cuanGaget,
    deskripsi:
      "Proyek ini bertujuan untuk membuat landing page sederhana menggunakan teknologi modern seperti React.js dan Tailwind CSS."
  },
  {
    no: "03",
    judul: "Tokopedia Ui",
    postition: "LEFT",
    img: tokopediaDesain,
    url: "https://tokopedia-ui.netlify.app/",
    tag: ["React.Js", "Typescript", "Tailwind"],
    deskripsi:
      "Proyek ini bertujuan untuk membuat replika sederhana dari antarmuka pengguna Tokopedia menggunakan teknologi modern seperti React.js dan Tailwind CSS. Dengan menggunakan kombinasi React untuk membangun komponen UI yang dinamis dan Tailwind CSS untuk styling yang efisien dan responsif."
  },
  {
    no: "04",
    judul: "Battcargo",
    postition: "RIGHT",
    img: batCargo,
    url: "http://battcargo.com/",
    tag: ["Laravel"],
    deskripsi:
      "Battcargo adalah aplikasi yang dirancang untuk mempermudah proses tracking pengiriman dan pengecekan ongkos kirim secara real-time. Dengan menggunakan Battcargo, pengguna dapat dengan mudah memantau status pengiriman barang mereka mulai dari pengambilan oleh kurirhingga barang tiba di tujuan."
  },
  {
    no: "05",
    judul: "Al-Quran Ui",
    postition: "LEFT",
    img: AlQuran,
    url: "https://al-quran-web-app.netlify.app/",
    tag: ["React.Js", "Typescript", "Tailwind"],
    deskripsi:
      "Proyek ini bertujuan untuk membuat ui Al-Quran sederhana, menggunakan tailwind dan react js"
  },
  {
    no: "06",
    judul: "Hidup Online Store",
    postition: "RIGHT",
    img: Hidup,
    url: "https://hidupbanjaran.com/",
    tag: ["CodeIgniter"],
    deskripsi:
      "Hidup Online Store adalah aplikasi yang dirancang untuk mempermudah proses pembelian perhiasan emas secara online. Dengan menggunakan Hidup Online Store, pengguna dapat dengan mudah menemukan dan membeli berbagai koleksi perhiasan emas berkualitas tinggi. Aplikasi ini menyediakan berbagai fitur seperti pencarian produk, pengecekan harga emas terkini, dan pelacakan pesanan secara real-time. Setiap produk yang dijual di Hidup Online Store dijamin keasliannya dan disertai dengan sertifikat resmi, memberikan rasa aman dan nyaman bagi pengguna."
  },
  {
    no: "07",
    judul: "Nagagold Store",
    postition: "LEFT",
    img: Nagagold,
    url: "#",
    tag: ["React.js", "Boostrap 4"],
    deskripsi:
      "Nagagold Store adalah aplikasi Point of Sale (POS) yang dirancang untuk mengelola berbagai aspek bisnis perhiasan emas. Dengan Nagagold Store, pengguna dapat dengan mudah mengatur penjualan, pembelian, hutang, dan layanan terkait emas. Aplikasi ini menyediakan fitur-fitur lengkap untuk memantau stok barang, mencatat transaksi penjualan dan pembelian, mengelola data pelanggan, serta melacak hutang piutang dengan akurat. Nagagold Store membantu pemilik bisnis perhiasan emas untuk menjalankan operasional mereka dengan lebih efisien dan efektif."
  },
  {
    no: "08",
    judul: "Export Data File",
    postition: "RIGHT",
    img: ExportDataFile,
    url: "https://www.npmjs.com/package/exportdatafile",
    tag: ["Typescript"],
    deskripsi:
      "Modul ExportData adalah sebuah dependencies untuk mengelola data menjadi sebuah laporan seperti PDF,EXCEL"
  },
  {
    no: "09",
    judul: "Time Keeping",
    postition: "LEFT",
    img: TimeKeeping,
    url: "#",
    tag: ["React.js", "Boostrap 5", "Typescript"],
    deskripsi:
      "Proyek ini bertujuan untuk mengembangkan aplikasi web bernama Time Keeping, yang dirancang khusus untuk mengelola absensi karyawan, kasbon,cuti dan payroll. Aplikasi ini bertujuan untuk mempermudah dan mengotomatisasi proses administrasi terkait kehadiran, pinjaman karyawan, dan penggajian, sehingga meningkatkan efisiensi dan akurasi dalam manajemen sumber daya manusia."
  },
  {
    no: "10",
    judul: "Kresno GEKA",
    postition: "RIGHT",
    img: Geka,
    url: "#",
    tag: ["React.js", "Boostrap 5", "Typescript"],
    deskripsi:
      "Proyek ini bertujuan untuk mengembangkan aplikasi web bernama Kresno GEKA, yang dirancang khusus untuk mengelola transaksi gadai. Aplikasi ini bertujuan untuk mempermudah proses administrasi, pelacakan, dan manajemen gadai dengan efisien dan transparan. Kresno GEKA diharapkan dapat memberikan solusi digital yang terintegrasi untuk lembaga gadai dan pelanggannya."
  },
  {
    no: "11",
    judul: "Sunmori",
    postition: "LEFT",
    img: Sunmori,
    url: "http://sunmori.net.id/",
    tag: ["CodeIgniter", "Boostrap 4"],
    deskripsi:
      "Proyek ini bertujuan untuk mengembangkan situs web profil perusahaan untuk Sunmori, penyedia layanan internet terkemuka yang berkomitmen untuk memberikan konektivitas yang cepat, handal, dan aman kepada pelanggan. Situs web ini dirancang untuk memberikan informasi lengkap mengenai layanan, paket internet, teknologi yang digunakan, serta menyediakan platform untuk dukungan pelanggan dan pembelian layanan secara online."
  },
  {
    no: "12",
    judul: "Suryajaya",
    postition: "RIGHT",
    img: Suryajaya,
    url: "#",
    tag: ["React Js", "Boostrap 4"],
    deskripsi:
      "Suryajaya Store adalah aplikasi Point of Sale (POS) yang dirancang untuk mengelola berbagai aspek bisnis perhiasan emas. Dengan Suryaja Store, pengguna dapat dengan mudah mengatur penjualan, pembelian, hutang, dan layanan terkait emas. Aplikasi ini menyediakan fitur-fitur lengkap untuk memantau stok barang, mencatat transaksi penjualan dan pembelian, mengelola data pelanggan, serta melacak hutang piutang dengan akurat. Nagagold Store membantu pemilik bisnis perhiasan emas untuk menjalankan operasional mereka dengan lebih efisien dan efektif."
  },
  {
    no: "12",
    judul: "Gethering Studio",
    postition: "LEFT",
    img: Gethering,
    url: "#",
    tag: ["Wordpress"],
    deskripsi:
      "Proyek ini bertujuan untuk mengembangkan situs web profil perusahaan untuk Gethering Studio, sebuah studio pemotretan terkemuka yang berfokus pada berbagai jenis fotografi termasuk potret pribadi, keluarga, pernikahan, komersial, dan event. Situs web ini dirancang untuk memberikan informasi yang komprehensif tentang layanan, portofolio, dan kontak studio, serta meningkatkan visibilitas dan daya tarik Gethering Studio di pasar digital."
  },
  {
    no: "13",
    judul: "Kencana Store",
    postition: "RIGHT",
    img: Kencana,
    url: "https://kencanaputeraemas.com/",
    tag: ["CodeIgniter"],
    deskripsi:
      "Proyek ini bertujuan untuk mengembangkan situs web e-commerce untuk Kencana Store, sebuah toko online yang menyediakan berbagai produk berkualitas tinggi dengan harga terjangkau. Situs web ini dirancang untuk memberikan pengalaman belanja online yang mudah, cepat, dan aman bagi pelanggan, serta meningkatkan penjualan dan visibilitas produk Kencana Store."
  },
  {
    no: "13",
    judul: "Undangan Digital",
    postition: "LEFT",
    img: Ud,
    url: "https://undangandigital.netlify.app/",
    tag: ["React Js", "Typescript", "Firebase"],
    deskripsi:
      "Proyek ini bertujuan untuk mengembangkan situs web undangan pernikahan digital yang elegan dan interaktif. Situs web ini dirancang untuk memberikan pengalaman yang menyenangkan bagi pasangan yang akan menikah dan tamu mereka, dengan fitur-fitur yang mempermudah penyampaian informasi acara, konfirmasi kehadiran, dan interaksi lainnya."
  },
  {
    no: "14",
    judul: "Mamang Ramen",
    postition: "RIGHT",
    img: MamangRamen,
    url: "https://mamang-ramen.netlify.app/",
    tag: ["React Js", "Typescript", "Tailwind"],
    deskripsi: "Proyek ini bertujuan untuk menduplikasi aplikasi ramen bajuri"
  }
];
