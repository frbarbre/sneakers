import React from "react";
import { cartWhite } from "../assets";

const Button = ({ icon, text, onClick }) => {
  return (
    <button
      type="button"
      className=" w-full shadow-lg shadow-sneak-orange-opaque bg-sneak-orange hover:opacity-70 transition-colors justify-center gap-3 text-white rounded-lg py-3 cursor-pointer flex items-center"
      onClick={onClick}
    >
      <img
        className={`${icon ? "" : "hidden"} w-[16px] object-contain`}
        src={cartWhite}
        alt="button-icon"
      />
      <h4 className="font-bold">{text}</h4>
    </button>
  );
};

export default Button;
