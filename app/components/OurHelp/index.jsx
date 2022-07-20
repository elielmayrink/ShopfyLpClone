import { ShopifyLink } from "../ShopifyLink";
import manAtWork from "~/assets/images/shopifyImgBusiness.png";

export function OurHelp() {
  const shopifyHelp = [
    {
      id: 1,
      title: "Atendimento ao cliente da Shopify",
      description:
        "Fale com nossa equipe de atendimento sempre que precisar solucionar um problema ou obter orientações para a sua empresa.",
      link: "Fale com o Atendimento",
    },
    {
      id: 2,
      title: "App Store da Shopify",
      description:
        "Adicione recursos e funcionalidades à sua loja com mais de 6.000 apps, que oferecem integração total com a Shopify.",
      link: "Acesse a App Store da Shopify ",
    },
    {
      id: 3,
      title: "Marketplace de Especialistas da Shopify",
      description:
        "Contrate um Especialista da Shopify para ajudar você com tudo, desde a configuração do site até o SEO da loja.",
      link: "Explore o Marketplace de Especialistas da Shopify",
    },
  ];
  return (
    <section className="w-full max-w-[1600px] m-auto flex">
      <div className="py-24 w-1/2 bg-[#FBF7ED] pl-[82px]">
        <h2 className="max-w-[654px] pl-[18px] text-[40px] leading-[48px] text-[#212326] mb-[60px]">
          Conte com a nossa ajuda ao longo dessa jornada
        </h2>
        <div className="flex flex-wrap gap-x-1 gap-y-11">
          {shopifyHelp.map((help, index) => (
            <article className="px-[18px]" key={index}>
              <p className="max-w-[308px] text-lg text-[#212326] mb-3">
                {help.title}
              </p>
              <span className="max-w-[308px] block text-base text-[#6B7177] mb-4">
                {help.description}
              </span>
              <div className="">
                <ShopifyLink label={help.link} />
              </div>
            </article>
          ))}
        </div>
      </div>
      <div>
        <img src={manAtWork} alt="Homem trabalhando em home-ofice" />
      </div>
    </section>
  );
}
