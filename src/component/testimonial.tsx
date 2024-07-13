const Testiimonial = () => {
  return (
    <div
      id="testiomonial"
      className="flex flex-col justify-between p-4 mt-8 lg:p-28"
    >
      <div
        data-aos="flip-left"
        className="flex justify-center  gap-2 text-[30px] lg:text-[48px]"
      >
        <p className="font-normal font-sora ">My</p>{" "}
        <p className="font-extrabold font-sora">Testimonial</p>
      </div>

      <div className="flex flex-col gap-8 mt-16 lg:flex-row">
        <div
          data-aos="zoom-in"
          className="h-[329px] lg:w-[370px] w-auto rounded-[10px] p-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
        >
          <div className="flex justify-center">Hai</div>
        </div>
        <div
          data-aos="zoom-in"
          className="h-[329px] lg:w-[370px] p-10 w-auto bg-black rounded-[10px]  shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
        >
          <div className="flex justify-center text-white">Hai</div>
        </div>
        <div
          data-aos="zoom-in"
          className="h-[329px] lg:w-[370px] w-auto rounded-[10px]  p-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
        >
          <div className="flex justify-center">Hai</div>
        </div>
      </div>
    </div>
  );
};

export default Testiimonial;
