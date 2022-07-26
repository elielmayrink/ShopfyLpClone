import { useState } from "react";
import Logo from "~/assets/images/logo.png";
export function Header() {
  const [scrollY, setScrolly] = useState(0);
  function changeScrollY() {
    setScrolly(window.scrollY);
  }
  if (typeof window !== "undefined") {
    window.addEventListener("load", () => {
      window.addEventListener("scroll", changeScrollY);
    });
  }
  const headerClasses =
    scrollY < 607
      ? "flex flex-col items-start h-auto lg:flex-row min-h-[80px] lg:items-center lg:justify-between w-full z-10 max-w-[1600px] bg-[#FBF7ED] lg:h-20 m-auto transition px-[98px] fixed top-0 right-1/2 translate-x-1/2"
      : "flex flex-col items-start h-auto lg:flex-row min-h-[80px] lg:items-center lg:justify-between w-full z-10 max-w-[1600px] bg-[#ffffff] lg:h-20 m-auto  transition px-[98px] fixed top-0 right-1/2 translate-x-1/2";
  return (
    <header id="headerTop" className={headerClasses}>
      <div className="hidden md2:flex items-center space-x-8 relative">
        <img src={Logo} alt="" />
        <nav>
          <ul className="flex space-x-10">
            <li className="text-[#6C717B] hover:text-[#222326]">
              <a href="#">Começar</a>
            </li>
            <li className="text-[#6C717B] hover:text-[#222326]">
              <a href="#">Vender</a>
            </li>
            <li className="text-[#6C717B] hover:text-[#222326]">
              <a href="#">Promover</a>
            </li>
            <li className="text-[#6C717B] hover:text-[#222326]">
              <a href="#">Gerenciar</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="hidden md2:flex mt-4 ml-5 lg:ml-0 lg:mt-0 space-x-8 items-center">
        <a className="block text-[#6C717B] hover:text-[#222326]" href="#">
          Preços
        </a>
        <a className="block text-[#6C717B] hover:text-[#222326]" href="#">
          Aprender
        </a>
        <a className="block text-[#6C717B] hover:text-[#222326]" href="#">
          Entrar
        </a>
        <button className="w-[181px] h-[44px] bg-[#028060] hover:bg-[#004C3F] transition-colors rounded-[4px] text-white font-bold text-base">
          Crie sua loja grátis
        </button>
      </div>
      <div className="absolute block right-10 bottom-1/2 translate-y-1/2 md2:hidden">
        <div className="w-7 border-t-[3px]"></div>
        <div className="w-7 border-t-[3px] mt-1"></div>
        <div className="w-7 border-t-[3px] mt-1"></div>
      </div>
    </header>
  );
}
