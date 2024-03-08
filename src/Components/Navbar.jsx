const Navbar = () => {
  return (
    <nav className="bg-[#FAE3B6] py-9">
      <div className="container flex justify-between items-center">
        <div className="w-32">
          <img
            className="w-full cursor-pointer"
            src="/Fresh-logo.png"
            alt="Fresh-logo.png"
          />
        </div>
        <div>
          <ul className="flex gap-14">
            <li className="cursor-pointer text-black hover:text-[#FDBB57] text-xl font-semibold">
              Men
            </li>
            <li className="cursor-pointer text-black hover:text-[#FDBB57] text-xl font-semibold">
              Woman
            </li>
            <li className="cursor-pointer text-black hover:text-[#FDBB57] text-xl font-semibold">
              Kids
            </li>
            <li className="cursor-pointer text-black hover:text-[#FDBB57] text-xl font-semibold">
              Collection
            </li>
            <li className="cursor-pointer text-black hover:text-[#FDBB57] text-xl font-semibold">
              Trends
            </li>
          </ul>
        </div>
        <div className="shadow-black">
          <button className="bg-[#FAE3B6] text-[#050505] hover:bg-[#FDBB57] rounded-xl py-3 px-7 mr-3 shadow-xl text-xl font-semibold">
            Login
          </button>
          <button className="bg-[#FAE3B6] text-[#050505] hover:bg-[#FDBB57] rounded-xl py-3 px-4 shadow-xl text-xl font-semibold">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
