import React from 'react';
import video from "../asset/video.mov";

function Header() {
  return (
    <header className="relative lg:z-20">
      <video autoPlay loop muted>
        <source src={video} type="video/mp4"></source>
      </video>
      <div className="absolute top-[45%] left-9 uppercase text-white">
        <span className="md:text-[20px]">Luxury Grooming Services</span>
        <br />
        <span className="text-[20px] md:text-[30px]">
          Do More, Say Less, Hustle Always
        </span>
      </div>
    </header>
  );
}

export default Header