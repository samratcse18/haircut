import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./Button";
import img1 from "../asset/img/IMG_1028.jpg";
import img2 from "../asset/img/quality.jpeg";
import img3 from "../asset/img/3.jpeg";
import img4 from "../asset/img/img1.jpeg";
import img5 from "../asset/img/5.jpeg";

function SliderView() {
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  };
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  };
  const settings = {
    // arrows: true,
    // dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          pauseOnHover: true,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="relative group/item cursor-pointer">
        <img
          src={img1}
          alt="/"
          className="w-[272px] h-[220px] md:w-[372px] md:h-[320px] lg:w-[472px] lg:h-[420px] mx-auto brightness-75"
        />
        <div className="absolute top-[5%] left-0 right-0 mx-auto w-[50%] md:w-[65%] text-white">
          <span className="text-[15px] md:text-[22px] font-bold">
            Monday Off Day Kut
          </span>
          <br />
          <p className="text-[11px] md:text-[15px] leading-2 invisible group-hover/item:visible">
            We all forget to plan sometimes but luckily we’re here to keep you
            Factory Fresh with Quality and convenience! This is for after hour
            and before hour and also Mondays.
          </p>
        </div>
      </div>
      <div className="relative group/item cursor-pointer">
        <img
          src={img2}
          alt="/"
          className="w-[272px] h-[220px] md:w-[372px] md:h-[320px] lg:w-[472px] lg:h-[420px] mx-auto brightness-75"
        />
        <div className="absolute top-[5%] left-0 right-0 mx-auto w-[50%] md:w-[65%] text-white">
          <span className="text-[15px] md:text-[22px] font-bold">
            75 Minute Reservation
          </span>
          <br />
          <p className="text-[11px] md:text-[15px] leading-2 invisible group-hover/item:visible">
            Haircut & Beard OR head and face razor shave razor edge up
            Shampoo/Condition (upon request) Scalp Massage Beard Hydration Steam
            + essential oil Combo wax cleanup (ear, nose, brow) **(Optional
            Enhancements Included)** + cocktail
          </p>
          <a
            href="https://booksy.com/en-us/instant-experiences/widget/550001?instant_experiences_enabled=true&ig_ix=true"
            target="_blank"
            className="invisible group-hover/item:visible"
          >
            <Button
              bg_color={"white"}
              bg_hover={"black"}
              text_color={"black"}
              text_hover={"white"}
              text={"Book"}
              size={"100px"}
              m_size={"100px"}
              l_size={"245px"}
            />
          </a>
        </div>
      </div>
      <div className="relative group/item cursor-pointer">
        <img
          src={img3}
          alt="/"
          className="w-[272px] h-[220px] md:w-[372px] md:h-[320px] lg:w-[472px] lg:h-[420px] mx-auto brightness-75"
        />
        <div className="absolute top-[5%] left-0 right-0 mx-auto w-[50%] md:w-[65%] text-white">
          <span className="text-[15px] md:text-[22px] font-bold">
            90 Minute Reservation
          </span>
          <br />
          <p className="text-[11px] md:text-[15px] leading-2 invisible group-hover/item:visible">
            Haircut & Beard OR head and face razor shave razor edge up
            Shampoo/Condition (upon request) Scalp Massage Hot Towel Mini Facial
            Upper body/face massage Wax hair removal (ear, nose, brows) Beard
            Hydration Steam + essential oil **( Optional Enhancements
            Included)** +(2) cocktails
          </p>
          <a
            href="https://booksy.com/en-us/instant-experiences/widget/550001?instant_experiences_enabled=true&ig_ix=true"
            target="_blank"
            className="invisible group-hover/item:visible"
          >
            <Button
              className="invisible group-hover/item:visible"
              bg_color={"white"}
              bg_hover={"black"}
              text_color={"black"}
              text_hover={"white"}
              text={"Book"}
              size={"100px"}
              m_size={"100px"}
              l_size={"245px"}
            />
          </a>
        </div>
      </div>
      <div className="relative group/item cursor-pointer">
        <img
          src={img4}
          alt="/"
          className="w-[272px] h-[220px] md:w-[372px] md:h-[320px] lg:w-[472px] lg:h-[420px] mx-auto brightness-75"
        />
        <div className="absolute top-[5%] left-0 right-0 mx-auto w-[50%] md:w-[65%] text-white">
          <span className="text-[15px] md:text-[22px] font-bold">
            Kut & Council
          </span>
          <br />
          <p className="text-[10px] md:text-[15px] leading-[16px] invisible group-hover/item:visible">
            We will do a mental health check, discuss life, & recalibrate your
            energy and intentions. You will leave reaffirmed and stronger.
            Haircut & Beard OR head and face razor shave razor edge up
            Shampoo/Condition (upon request) Scalp Massage Hot Towel Mini Facial
            Upper body/face massage Wax hair removal (ear, nose, brows) Beard
            Hydration Steam + essential oil **( Optional Enhancements
            Included)** +(3) cocktails
          </p>
          <a
            href="https://booksy.com/en-us/instant-experiences/widget/550001?instant_experiences_enabled=true&ig_ix=true"
            target="_blank"
            className="invisible group-hover/item:visible"
          >
            <Button
              bg_color={"white"}
              bg_hover={"black"}
              text_color={"black"}
              text_hover={"white"}
              text={"Book"}
              size={"100px"}
              m_size={"100px"}
              l_size={"245px"}
            />
          </a>
        </div>
      </div>
      <div className="relative group/item cursor-pointer">
        <img
          src={img5}
          alt="/"
          className="w-[272px] h-[220px] md:w-[372px] md:h-[320px] lg:w-[472px] lg:h-[420px] mx-auto brightness-75"
        />
        <div className="absolute top-[5%] left-0 right-0 mx-auto w-[50%] md:w-[65%] text-white">
          <span className="text-[15px] md:text-[22px] font-bold">
            PRIVATE HOUSE CALL
          </span>
          <br />
          <p className="text-[11px] md:text-[15px] leading-2 invisible group-hover/item:visible">
            Select this Service for a one-hour session at your place of business
            or residence. This can also be selected for hours between 12am-4a.
            Time must be agreed upon before the appointment is final.
          </p>
          <a
            href="https://booksy.com/en-us/instant-experiences/widget/550001?instant_experiences_enabled=true&ig_ix=true"
            target="_blank"
            className="invisible group-hover/item:visible"
          >
            <Button
              bg_color={"white"}
              bg_hover={"black"}
              className="invisible group-hover/item:visible"
              text_color={"black"}
              text_hover={"white"}
              text={"Book"}
              size={"100px"}
              m_size={"100px"}
              l_size={"245px"}
            />
          </a>
        </div>
      </div>
    </Slider>
  );
}

export default SliderView;
