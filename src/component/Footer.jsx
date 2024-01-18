import React from "react";
import img from "../asset/img/logo.png";

function Footer() {
  return (
    <footer className="bg-[#565655] lg:py-[65px] py-[40px] font-[300px] text-[14px] text-white">
      <div className="lg:px-[100px] text-[15px] font-bold lg:space-y-0 space-y-4 px-6">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:space-y-0 space-y-8">
          <img src={img} className="w-[50px] h-[60px]" alt="logo" />
          <div className="relative w-fit mx-auto lg:mx-0">
            <input
              type="text"
              className="lg:w-[470px] md:w-[450px] w-[100%] text-[12px] md:text-[15px] lg:text-[20px] border font-normal focus:outline-none text-black pl-4 pr-[83px] py-3 bg-white"
              placeholder="Enter your email for updates"
            />
            <a
              href="mailto:nicodabarber@gmail.com"
              className="absolute top-1 bottom-1 right-1 rounded-none btn btn-sm lg:btn-md my-auto lg:my-0 flex lg:items-center text-white"
            >
              SUBMIT
            </a>
          </div>
        </div>
        <div className="lg:pt-[60px] lg:space-y-0 text-center space-y-8 flex flex-col lg:flex-row lg:justify-between ">
          <div>
            <a
              href="https://www.google.com/maps/place/2101+Smith+St+%23206,+Houston,+TX+77002,+USA/@29.7504004,-95.3767986,17z/data=!3m1!4b1!4m5!3m4!1s0x8640bf403c89dce9:0x123a709dd9fab9da!8m2!3d29.7504004!4d-95.3746099"
              target="_blank"
              rel="noopener noreferrer"
            >
              2101 Smith Street, Ste 206, Houston, 77002
            </a>
          </div>
          <div>
            <a href="tel:832-836-1954">832-836-1954</a>
          </div>
          <div>Find Us Online</div>
          <div className="flex justify-center lg:justify-center space-x-8">
            <a
              href="https://www.youtube.com/@iamnicothabarber"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/FFFFFF/youtube-play.png"
                className="w-[25px] hover:brightness-50"
              />
            </a>
            <a
              href="https://www.facebook.com/thekutfactoryhtx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/material-rounded/24/FFFFFF/facebook-new.png"
                className="hover:brightness-50"
              />
            </a>
            <a
              href="https://www.instagram.com/nicothabarber/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/material-outlined/24/FFFFFF/instagram-new--v1.png"
                className="hover:brightness-50"
              />
            </a>
            <a
              href="https://www.tiktok.com/@nicothabarber_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios/50/FFFFFF/tiktok--v1.png"
                className="w-[25px] hover:brightness-50"
              />
            </a>
          </div>
        </div>
        <div className="lg:pt-[60px] text-center">
          Copyright © 2023 The Kut Factory All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
