import { cartItem } from "../constants";
import { useState } from "react";
import { Button } from "../components";

const Description = ({ amount, setAmount }) => {
  const [addAmount, setAddAmount] = useState(0);

  function increase() {
    setAddAmount((prev) => prev + 1);
  }

  function decrease() {
    setAddAmount((prev) => prev - 1);
  }

  function addToCart() {
    setAmount((prev) => prev + addAmount);
    setAddAmount(0);
  }

  return (
    <div className="px-6 pb-6 flex gap-2 flex-col">
      <h2 className="text-sneak-orange uppercase font-bold tracking-wider text-[14px]">
        Sneaker Company
      </h2>
      <h1 className="font-bold text-sneak-dark-blue text-[30px] md:text-[42px] leading-none pt-2 pb-6">
        {cartItem.title}
      </h1>
      <p className="text-sneak-dark-gray">{cartItem.description}</p>
      <div className="flex justify-between items-center md:items-start md:flex-col gap-1 py-4">
        <div className="flex items-center gap-4">
          <h2 className="text-sneak-dark-blue font-bold text-[30px]">
            ${(cartItem.price / 100) * (100 - cartItem.discount)}.00
          </h2>
          <div className="text-sneak-orange bg-sneak-orange-pale px-2 font-bold text-[18px] rounded-md">
            {cartItem.discount}%
          </div>
        </div>
        <div className="relative">
          <h3 className="font-bold text-sneak-medium-gray">
            ${cartItem.price}.00
          </h3>
          <div className="absolute left-0 bottom-[9px] h-[1px] w-full bg-sneak-medium-gray" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex justify-between bg-sneak-light-gray items-center px-4 rounded-lg">
          <button
            className="text-[28px] font-bold text-sneak-orange pb-[5px] hover:opacity-70"
            onClick={decrease}
          >
            -
          </button>
          <p className="font-bold text-sneak-dark-blue text-[18px] px-10">
            {addAmount}
          </p>
          <button
            className="text-[28px] font-bold text-sneak-orange pb-[5px] hover:opacity-70"
            onClick={increase}
          >
            +
          </button>
        </div>
        <Button onClick={addToCart} text={"Add to cart"} icon={true} />
      </div>
    </div>
  );
};

export default Description;
