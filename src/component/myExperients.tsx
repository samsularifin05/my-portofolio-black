import google from "../assets/google.svg";

const MyExperients = () => {
  return (
    <div
      className="w-screen h-auto py-10 bg-black lg:h-screen"
      data-speed="0.16"
    >
      <div
        data-aos="flip-left"
        className="flex justify-center gap-2 text-[28px] lg:text-[48px] text-white"
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
              <p>Lead Software Engineer at Google</p>
            </div>
            <div className="mt-4">Nov 2019 - Present</div>
          </div>
          <p className="mt-4 text-[#D4D4D8]">
            As a Senior Software Engineer at Google, I played a pivotal role in
            developing innovative solutions for Google's core search algorithms.
            Collaborating with a dynamic team of engineers, I contributed to the
            enhancement of search accuracy and efficiency, optimizing user
            experiences for millions of users worldwide.
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
            As a Senior Software Engineer at Google, I played a pivotal role in
            developing innovative solutions for Google's core search algorithms.
            Collaborating with a dynamic team of engineers, I contributed to the
            enhancement of search accuracy and efficiency, optimizing user
            experiences for millions of users worldwide.
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
            As a Senior Software Engineer at Google, I played a pivotal role in
            developing innovative solutions for Google's core search algorithms.
            Collaborating with a dynamic team of engineers, I contributed to the
            enhancement of search accuracy and efficiency, optimizing user
            experiences for millions of users worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyExperients;
