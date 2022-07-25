import {
  FacebookLogo,
  TwitterLogo,
  YoutubeLogo,
  InstagramLogo,
  LinkedinLogo,
  PinterestLogo,
  Globe,
} from "phosphor-react";
export function Footer() {
  const links = {
    ecommerce: {
      firstColumn: [
        "Loja virtual",
        "Plataforma de e-commerce",
        "Sites de compras",
        "Venda online",
        "SEO",
        "Histórias de Sucesso",
      ],
      secondColumn: [
        "Redes sociais",
        "Dropshipping",
        "Comprar domínio",
        "Ferramentas",
        "Venda roupas",
        "Gerador de nomes",
      ],
      thirdColumn: [
        "Venda no Facebook",
        "Criar Logotipo",
        "Banco de imagens grátis",
        "Venda no seu blog",
        "Venda pela internet",
        "Tutoriais em vídeo",
      ],
    },
    shopify: ["Contato", "Parcerias", "Parcerias", "Informações legais"],
  };
  const socialMidiasIcons = [
    FacebookLogo,
    TwitterLogo,
    YoutubeLogo,
    InstagramLogo,
    LinkedinLogo,
    PinterestLogo,
  ];
  return (
    <footer className="bg-[#002E25] w-full max-w-[1600px] m-auto text-[#B6BABF] py-8 divide-y">
      <div className="divide-y px-[100px]">
        <div className="flex space-x-5 mb-7">
          <p>Sobre</p>
          <p>Mapa do site</p>
        </div>
        <div className="flex mb-6">
          <div className="mt-5">
            <p className="text-sm font-extrabold">E-COMMERCER</p>
            <div className="grid grid-cols-3 gap-12 ">
              <div className="flex flex-col">
                {links.ecommerce.firstColumn.map((link, index) => {
                  return (
                    <a
                      key={index}
                      href="#"
                      className="text-sm mt-1 text-[#B6BABF] w-full max-w-[220px] block pr-4 hover:text-white transition-all"
                    >
                      {link}
                    </a>
                  );
                })}
              </div>
              <div className="flex flex-col">
                {links.ecommerce.secondColumn.map((link, index) => {
                  return (
                    <a
                      key={index}
                      href="#"
                      className="text-sm mt-1 text-[#B6BABF] w-full max-w-[220px] block pr-4 hover:text-white transition-all"
                    >
                      {link}
                    </a>
                  );
                })}
              </div>
              <div className="flex flex-col">
                {links.ecommerce.thirdColumn.map((link, index) => {
                  return (
                    <a
                      key={index}
                      href="#"
                      className="text-sm mt-1 text-[#B6BABF] w-full max-w-[220px] block pr-4 hover:text-white transition-all"
                    >
                      {link}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="mt-5 ml-9">
            <p className="text-sm font-extrabold">SHOPIFY</p>
            <div>
              {links.shopify.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-sm mt-1 text-[#B6BABF] w-full max-w-[220px] block pr-4 hover:text-white transition-all"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-4 px-[100px]">
        <div className="flex mt-8 space-x-5 items-center">
          {socialMidiasIcons.map((Icon, index) => (
            <Icon size={25} weight="bold" key={index} />
          ))}
        </div>
        <div className="flex space-x-5 mt-8">
          <div className="flex items-center space-x-5">
            <p>Termos de serviço</p>
            <p>Politica de privacidade</p>
          </div>
          <div className="flex items-center space-x-1">
            <Globe size={20} /> <span>Brasil</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
