import { useState } from "react";
import { useScroll } from "./scrolProvider";

const Contact = () => {
  const { contactMeRef } = useScroll();
  const [form, setform] = useState({
    name: "",
    email: "",
    website: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:samsul026@gmail.com?subject=Contact from ${form.name}&body=Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0AWebsite: ${form.website}%0D%0AMessage: ${form.message}`;
    window.location.href = mailtoLink;
  };
  return (
    <div className="mt-10 mb-8" id="contact-me" ref={contactMeRef}>
      <form onSubmit={handleSubmit}>
        <div
          data-aos="flip-left"
          className="flex justify-center gap-2 text-[30px] lg:text-[48px] mt-14"
        >
          <p className="font-normal font-sora ">My</p>{" "}
          <p className="font-extrabold font-sora">Contacts</p>
        </div>
        <div className="flex flex-col justify-between gap-5 px-4 mt-10 lg:px-20 lg:flex-row ">
          <div className="flex flex-col gap-4 lg:w-[608px]">
            <input
              placeholder="Nama Lengkap"
              className="p-1 outline-none outline-black"
              onChange={(e) => setform({ ...form, name: e.target.value })}
            />
            <input
              placeholder="Email"
              className="p-1 outline-none outline-black"
              onChange={(e) => setform({ ...form, email: e.target.value })}
            />
            <input
              placeholder="Website"
              className="p-1 outline-none outline-black"
              onChange={(e) => setform({ ...form, website: e.target.value })}
            />
            <textarea
              placeholder="Pesan"
              className="p-1 outline-none outline-black"
              onChange={(e) => setform({ ...form, message: e.target.value })}
              rows={10}
            />
          </div>
          <div className="justify-center">
            <div className="mt-2" data-aos="fade-up">
              <div className="font-normal font-sora text-[25px] lg:text-[48px] flex flex-row gap-5">
                <p className="font-extrabold ">Let’s</p>
                <p className="font-extrabold text-white stroke">talk.</p>
                <p className="font-extrabold ">For</p>
              </div>
              <div className="font-normal font-sora text-[25px] lg:text-[48px] flex flex-row gap-5">
                <p className="font-extrabold">Something special.</p>
              </div>
              <p className=" lg:w-[608px]">
                I seek to push the limits of creativity to create high-engaging,
                user-friendly, and memorable interactive experiences.
              </p>
            </div>
            <div className="font-extrabold lg:mt-36" data-aos="fade-up">
              <p>samsul026@gmail.com</p>
              <a href="http://wa.me/628986969882" target="_blank">
                628986969882
              </a>
            </div>
          </div>
        </div>
        <div className="lg:px-[4.7rem] px-4 mt-5 flex flex-row gap-5 items-center">
          <button
            data-aos="fade-up"
            data-aos-easing="ease-in-back"
            data-aos-delay="50"
            data-aos-offset="0"
            type="submit"
            className="flex p-2 w-[150px] h-[43px] text-center justify-center text-white bg-black"
          >
            Get Touch
          </button>
          <a
            href="https://www.facebook.com/samsularifin30"
            data-aos="fade-up"
            data-aos-easing="ease-in-back"
            data-aos-delay="50"
            data-aos-offset="0"
            target="_blank"
            className="flex items-center justify-center w-10 h-10 outline"
          >
            {" "}
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/samsularifin05/"
            target="_blank"
            data-aos="fade-up"
            data-aos-easing="ease-in-back"
            data-aos-delay="100"
            data-aos-offset="0"
            className="flex items-center justify-center w-10 h-10 outline"
          >
            {" "}
            <i className=" fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://github.com/samsularifin05"
            data-aos="fade-up"
            target="_blank"
            data-aos-easing="ease-in-back"
            data-aos-delay="150"
            data-aos-offset="0"
            className="flex items-center justify-center w-10 h-10 outline"
          >
            {" "}
            <i className=" fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/samsularifin05/"
            target="_blank"
            data-aos="fade-up"
            data-aos-easing="ease-in-back"
            data-aos-delay="200"
            data-aos-offset="0"
            className="flex items-center justify-center w-10 h-10 outline"
          >
            {" "}
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </form>
    </div>
  );
};

export default Contact;
