import Logo from "~/assets/images/logo.png";
export function Header() {
  return (
    <header
      id="headerTop"
      className="w-full z-10 max-w-[1600px] bg-[#FBF7ED] h-20 m-auto flex items-center justify-between px-[98px] fixed top-0 right-1/2 translate-x-1/2"
    >
      <div className="flex items-center space-x-8">
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
      <div className="flex space-x-8 items-center">
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
    </header>
  );
}
