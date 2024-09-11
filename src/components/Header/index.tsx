import Link from "next/link";

const Header = () => {
  return (
    <header className="header absolute bg-transparent left-0 top-0 z-40 flex w-full items-center">
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4 xl:mr-12">
            <Link href="/" className="header-logo block w-full py-8">
              <span className="text-xl font-bold text-[#00ff00]">
                Amoeba Labs AI
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
