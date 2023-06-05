import { avatar, cart, logo, menu, close } from "../assets";
import { navLinks } from "../constants";
import { Cart, NavMobile } from "../components";
import { useState } from "react";

const Navbar = ({ amount, setAmount }) => {
  const [cartActive, setCartActive] = useState(false);

  const [menuActive, setMenuActive] = useState(false);

  function toggleCart() {
    setCartActive((prev) => !prev);
  }

  function menuToggle() {
    setMenuActive((prev) => !prev);
  }

  return (
    <nav className="max-w-[1200px] mx-auto flex items-center justify-between p-6 md:px-6 md:py-0 md:h-[82px] bg-white md:border-b-sneak-light-gray md:border-b-solid md:border-b-[2px]">
      <div className="flex items-center gap-3 md:gap-10">
        <img
          src={menuActive ? close : menu}
          alt="menu-icon"
          className="h-[12px] object-contain mt-[2px] md:hidden cursor-pointer relative z-20"
          onClick={menuToggle}
        />
        <img src={logo} alt="sneakers-logo" />
        <div className="hidden md:flex items-center jus gap-6 text-sneak-dark-gray text-[14px] mt-[4px] h-[80px]">
          {navLinks.map((link) => (
            <div
              key={link.id}
              className="h-full hover:border-b-sneak-orange hover:border-b-[4px] cursor-pointer hover:border-b-solid transition-all flex items-center"
            >
              <h2>{link.title}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-5 md:gap-10">
        <div className="relative">
          <img
            src={cart}
            alt="cart-icon"
            onClick={toggleCart}
            className="cursor-pointer w-[22px] object-contain"
          />
          <div
            className={`${
              amount === 0 ? "hidden" : ""
            } pointer-events-none absolute top-[-4px] right-[-5px] h-[11.5px] w-[18px] rounded-full bg-sneak-orange text-[11px] font-bold text-white`}
          >
            <div className="translate-y-[-3.3px] text-center">{amount}</div>
          </div>
          <div className="absolute z-10 top-[40px] right-[-80px] xl:right-[-120px] w-[352px] mx-auto hidden md:block pointer-events-none">
            <Cart
              cartActive={cartActive}
              amount={amount}
              setAmount={setAmount}
            />
          </div>
        </div>
        <div className="absolute z-10 top-[80px] w-screen left-0 md:hidden flex justify-center xs:justify-end pointer-events-none">
          <div className="max-w-[352px] ml-[8px] mr-[10px] w-full">
            <Cart
              cartActive={cartActive}
              amount={amount}
              setAmount={setAmount}
            />
          </div>
        </div>
        <img
          src={avatar}
          alt="profile-picture"
          className="h-[25px] md:h-[40px] object-contain"
        />
      </div>
      <div
        className={`${
          menuActive ? "" : "hidden"
        } md:hidden fixed inset-0 bg-black-opaque pointer-events-none z-10`}
      >
        <NavMobile />
      </div>
    </nav>
  );
};

export default Navbar;
