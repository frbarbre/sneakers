import { closeOrange, closeWhite } from "./assets";
import { Carousel, Navbar, Description } from "./components";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);

  const [fullscreen, setFullscreen] = useState(false);

  const [closeActive, setCloseActive] = useState(false);

  function fsToggle() {
    setFullscreen((prev) => !prev);
  }

  function closeEnterToggle() {
    setCloseActive((prev) => !prev);
  }

  function closeLeaveToggle() {
    setCloseActive((prev) => !prev);
  }

  return (
    <div>
      <Navbar amount={amount} setAmount={setAmount} />
      <main className="flex flex-col md:flex-row w-full max-w-[1000px] justify-between md:items-center md:gap-16 mx-auto md:px-5 md:mt-16 md:mb-40">
        <div className="md:hidden">
          <Carousel dots={false} arrow={true} />
        </div>
        <div className="hidden md:block">
          <Carousel
            dots={true}
            arrow={false}
            fsToggle={fsToggle}
            styles={"cursor-pointer hover:opacity-70"}
          />
        </div>
        <div className="flex">
          <Description amount={amount} setAmount={setAmount} />
        </div>
      </main>
      <div
        className={`${
          fullscreen ? "" : "hidden"
        } fixed inset-0 flex items-center justify-center bg-black-opaque`}
      >
        <div className="mb-20 relative">
          <img
            src={closeActive ? closeOrange : closeWhite}
            alt="close-icon"
            className="absolute top-[-30px] right-0 w-[15px] object-contain cursor-pointer"
            onClick={fsToggle}
            onMouseOver={closeEnterToggle}
            onMouseLeave={closeLeaveToggle}
          />
          <Carousel dots={true} arrow={true} fsToggle={null} />
        </div>
      </div>
    </div>
  );
}

export default App;
