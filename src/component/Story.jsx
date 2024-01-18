import React from "react";
import Button from "./Button";
import img from "../asset/img/img1.jpeg";

function Story() {
  return (
    <div className="bg-white w-full" id="ourStory">
      <div className="lg:mr-[100px] lg:-mt-[80px] lg:relative lg:z-40 bg-black section leading-8 text-lg text-white p-[20px] md:flex md:flex-row-reverse">
        <div className="">
          <p
            className="my-3"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="2000"
          >
            Welcome to The Kut Factory Luxury Barbershop, where we understand
            that a haircut is not just a routine grooming task but an integral
            part of your holistic journey towards self-care and luxury living.
            At The Kut Factory, we cater to individuals who are interested in
            treating themselves to the ultimate grooming experience, where
            quality and luxury go hand in hand.
          </p>
          <Button
            bg_color={"white"}
            bg_hover={"black"}
            text_color={"black"}
            text_hover={"white"}
            text={"Our Story"}
            size={"150px"}
            m_size={"180px"}
            l_size={"245px"}
          />
        </div>
        <img
          className="img1 my-4 h-[420px] md:mx-4"
          src={img}
          data-aos="fade-zoom-out"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
        />
      </div>
    </div>
  );
}

export default Story;
