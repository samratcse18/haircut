import React from "react";

function Button({
  bg_color,
  text_color,
  text,
  bg_hover,
  text_hover,
  size,
  m_size,
  l_size
}) {
  return (
    <button
      className={`w-[${size}] md:w-[${m_size}] font-bold lg:w-[${l_size}] h-[50px] lg:h-[54px] relative group text-[11px] md:text-[13px] lg:text-[12px] uppercase`}
    >
      <div
        className={`bg-${bg_color} h-[40px] lg:h-full group-hover:bg-${bg_hover} z-10 py-[14px] px-[12px] transition duration-200`}
      ></div>
      <div
        className={`text-${text_color} absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:text-${text_hover} z-30 transition duration-200 uppercase`}
      >
        {text}
      </div>
    </button>
  );
}

export default Button;
