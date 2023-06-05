import { navLinks } from "../constants";

const NavMobile = () => {
  return (
    <div className="flex flex-col gap-4 md:hidden bg-white max-w-[240px] w-full h-screen px-6 py-24 pointer-events-auto">
      {navLinks.map((link) => (
        <h2 key={link.id} className="font-bold text-sneak-dark-blue">
          {link.title}
        </h2>
      ))}
    </div>
  );
};

export default NavMobile;
