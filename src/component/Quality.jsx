import React from 'react';
import video from "../asset/video.mov";
import img from "../asset/img/quality.jpeg";

function Quality() {
  return (
    <div className="space-y-14 bg-white">
      <video autoPlay loop muted>
        <source src={video} type="video/mp4"></source>
      </video>
      <div className="relative">
        <img
          src={img}
          alt=""
          className="brightness-[0.4] md:h-[700px] md:w-full"
        />
        <div
          className="absolute top-10 md:top-20 px-2 left-0 right-0 mx-auto text-white"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="text-center font-bold md:text-[20px]">
            WHY CHOOSE THE KUT FACTORY
          </div>
          <div className="text-[45px] md:text-[75px] font-bold text-center">
            QUALITY
          </div>
          <div className="text-center md:text-[25px]">
            We elevate your grooming routine
          </div>
          <div className="text-[45px] md:text-[75px] font-bold text-center">
            PASSION
          </div>
          <div className="text-center md:text-[25px]">
            A personalized experience that caters to your needs
          </div>
          <div className="text-[45px] md:text-[75px] font-bold text-center">
            LUXURY
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quality