import React, { useEffect, useState } from "react";
import SliderView from "./SliderView";
import { useInView } from "react-intersection-observer";
import "animate.css";
import Button from "./Button";

function Service() {
  const { ref: focusPoint, inView: focusPointView } = useInView();
  const { ref: slider, inView: sliderView } = useInView();
  const [animate, setAnimate] = useState();
  const [slideAnimate, setSlideAnimate] = useState();
  useEffect(() => {
    sliderView ? setSlideAnimate("animate__fadeIn") : setSlideAnimate("");
    focusPointView ? setAnimate("animate__fadeIn") : setAnimate("");
  }, [sliderView, focusPointView]);

  return (
    <div className="bg-white py-4 md:py-6 lg:py-8 space-y-5" id="Service">
      <div ref={focusPoint} className="w-full">
        <div
          className={`animate__animated ${animate} text-black text-center uppercase lg:text-[30px] font-bold scale-up-ver-bottom`}
        >
          Premium Services
        </div>
      </div>
      <div
        ref={slider}
        className={`animate__animated ${slideAnimate} animate__delay-.3s lg:mr-[100px]`}
      >
        <SliderView />
      </div>
      <div className="text-center">
        <a
          href="https://booksy.com/en-us/instant-experiences/widget/550001?instant_experiences_enabled=true&ig_ix=true"
          target="_blank"
        >
          <Button
            bg_color={"black"}
            bg_hover={"white"}
            text_color={"white"}
            text_hover={"black"}
            text={"All Services"}
            size={"150px"}
            m_size={"180px"}
            l_size={"245px"}
          />
        </a>
      </div>
    </div>
  );
}

export default Service;
