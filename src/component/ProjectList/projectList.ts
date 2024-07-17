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

export interface ProjectInterFace {
  no?: number;
  img: string;
  judul: string;
  deskripsi: string;
  url: string;
  postition: "LEFT" | "RIGHT";
  tag: string[];
}
export const listDataProject: ProjectInterFace[] = [
  {
    judul: "Whatsapp Ui",
    postition: "LEFT",
    url: "https://clonewa.netlify.app/",
    tag: ["React.Js", "Typescript", "Tailwind"],
    img: waClone,
    deskripsi:
      "Proyek ini bertujuan untuk membuat replika sederhana dari antarmuka pengguna WhatsApp menggunakan teknologi modern seperti React.js dan Tailwind CSS. Dengan menggunakan kombinasi React untuk membangun komponen UI yang dinamis dan Tailwind CSS untuk styling yang efisien dan responsif, proyek ini akan meniru fitur-fitur dasar dari WhatsApp, seperti daftar kontak, obrolan, dan pengaturan."
  },
  {
    judul: "Cuan Gadget",
    postition: "RIGHT",
    url: "https://cuangadget.netlify.app/",
    tag: ["React.Js", "Typescript", "Tailwind"],
    img: cuanGaget,
    deskripsi:
      "Proyek ini bertujuan untuk membuat landing page sederhana menggunakan teknologi modern seperti React.js dan Tailwind CSS."
  },
  {
    judul: "Tokopedia Ui",
    postition: "LEFT",
    img: tokopediaDesain,
    url: "https://tokopedia-ui.netlify.app/",
    tag: ["React.Js", "Typescript", "Tailwind"],
    deskripsi:
      "Proyek ini bertujuan untuk membuat replika sederhana dari antarmuka pengguna Tokopedia menggunakan teknologi modern seperti React.js dan Tailwind CSS. Dengan menggunakan kombinasi React untuk membangun komponen UI yang dinamis dan Tailwind CSS untuk styling yang efisien dan responsif."
  },
  {
    judul: "Battcargo",
    postition: "RIGHT",
    img: batCargo,
    url: "http://battcargo.com/",
    tag: ["Laravel"],
    deskripsi:
      "Battcargo adalah aplikasi yang dirancang untuk mempermudah proses tracking pengiriman dan pengecekan ongkos kirim secara real-time. Dengan menggunakan Battcargo, pengguna dapat dengan mudah memantau status pengiriman barang mereka mulai dari pengambilan oleh kurirhingga barang tiba di tujuan."
  },
  {
    judul: "Al-Quran Ui",
    postition: "LEFT",
    img: AlQuran,
    url: "https://al-quran-web-app.netlify.app/",
    tag: ["React.Js", "Typescript", "Tailwind"],
    deskripsi:
      "Proyek ini bertujuan untuk membuat ui Al-Quran sederhana, menggunakan tailwind dan react js"
  },
  {
    judul: "Hidup Online Store",
    postition: "RIGHT",
    img: Hidup,
    url: "https://hidupbanjaran.com/",
    tag: ["CodeIgniter"],
    deskripsi:
      "Hidup Online Store adalah aplikasi yang dirancang untuk mempermudah proses pembelian perhiasan emas secara online. Dengan menggunakan Hidup Online Store, pengguna dapat dengan mudah menemukan dan membeli berbagai koleksi perhiasan emas berkualitas tinggi. Aplikasi ini menyediakan berbagai fitur seperti pencarian produk, pengecekan harga emas terkini, dan pelacakan pesanan secara real-time. Setiap produk yang dijual di Hidup Online Store dijamin keasliannya dan disertai dengan sertifikat resmi, memberikan rasa aman dan nyaman bagi pengguna."
  },
  {
    judul: "Nagagold Store",
    postition: "LEFT",
    img: Nagagold,
    url: "#",
    tag: ["React.js", "Boostrap 4"],
    deskripsi:
      "Nagagold Store adalah aplikasi Point of Sale (POS) yang dirancang untuk mengelola berbagai aspek bisnis perhiasan emas. Dengan Nagagold Store, pengguna dapat dengan mudah mengatur penjualan, pembelian, hutang, dan layanan terkait emas. Aplikasi ini menyediakan fitur-fitur lengkap untuk memantau stok barang, mencatat transaksi penjualan dan pembelian, mengelola data pelanggan, serta melacak hutang piutang dengan akurat. Nagagold Store membantu pemilik bisnis perhiasan emas untuk menjalankan operasional mereka dengan lebih efisien dan efektif."
  },
  {
    judul: "Export Data File",
    postition: "RIGHT",
    img: ExportDataFile,
    url: "https://www.npmjs.com/package/exportdatafile",
    tag: ["Typescript"],
    deskripsi:
      "Modul ExportData adalah sebuah dependencies untuk mengelola data menjadi sebuah laporan seperti PDF,EXCEL"
  },
  {
    judul: "Time Keeping",
    postition: "LEFT",
    img: TimeKeeping,
    url: "#",
    tag: ["React.js", "Boostrap 5", "Typescript"],
    deskripsi:
      "Aplikasi ini di buat bertujuan untuk mengelola absensi karyawan, kasbon dan payroll"
  },
  {
    judul: "Kresno GEKA",
    postition: "RIGHT",
    img: Geka,
    url: "#",
    tag: ["React.js", "Boostrap 5", "Typescript"],
    deskripsi: "Aplikasi ini di buat bertujuan untuk mengelola gadai"
  }
];
