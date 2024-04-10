import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" px-10 py-10 bg-Bg_navbar max-sm:px-5 ">
      <div className="flex gap-5  items-center">
        <Link href="/">
          <div className="">
            <h2 className="font-Garmond text-[45px] font-semibold italic leading-normal tracking-[-13px] text-Primary ">
              R &C
            </h2>
          </div>
        </Link>
        <div className="flex justify-around  items-center flex-1">
          <Link href="/">
            <div className="text-Primary font-semibold font-Garmond  text-[20px] hover:text-Secondary  cursor-pointer duration-300 ease-in-out active:text-Secondary  ">
              Home
            </div>
          </Link>
          <Link href="/about">
            <div className="text-Primary font-semibold font-Garmond  text-[20px] hover:text-Secondary cursor-pointer duration-300 ease-in-out  active:text-Secondary">
              About
            </div>
          </Link>
          <Link href="/contact">
            <div className="text-Primary font-semibold font-Garmond  text-[20px] hover:text-Secondary cursor-pointer duration-300 ease-in-out active:text-Secondary">
              Contact
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
