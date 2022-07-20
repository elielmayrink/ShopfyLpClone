import {
  Storefront,
  AppWindow,
  Users,
  HouseLine,
  ArrowRight,
} from "phosphor-react";
import { ShopifyLink } from "../ShopifyLink";
export function BusinessOnTheWeb() {
  const shops = [
    {
      segment: "ALIMENTOS E BEBIDAS",
      name: "Alfred",
      imgReference:
        "https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/alfred/home-example-small-4bc93b93a9d345329480ea6e387cf6890323170a70473bad69a87424cad52e28.jpg",
    },
    {
      segment: "JOIAS",
      name: "Corey Moranis",
      imgReference:
        "https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/corey-moranis/home-example-small-6cf57deaaf9e7c38f45de3d300080353843430c1be3ab0ed3cd5e21b93157de8.jpg",
    },
    {
      segment: "ALIMENTOS E BEBIDAS",
      name: "Detour Coffee",
      imgReference:
        "https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/detour-coffee/home-example-small-10f5c2735cb72e18af4d47a31a72326b3eb1f0611963d69d12a51ed31bed4acd.jpg",
    },
    {
      segment: "BELEZA E COSMÉTICOS",
      name: "Then I Met You",
      imgReference:
        "https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/then-i-met-you/home-example-small-873ea125aea32650f2e2c282609c62a63be928583b8830cc67df98feff30ca89.jpg",
    },
    {
      segment: "CASA E JARDIM",
      name: "Miss Boon",
      imgReference:
        "https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/miss-boon/home-example-small-8bb452f93af6069b33cdc00d9fab7cacaa32d34684bda58e13eb25faadeb2b72.jpg",
    },
  ];
  const options = [
    {
      icon: AppWindow,
      title: "Para quem está só começando",
      description:
        "Quer tirar aquela ideia de negócios da gaveta? Está atrás de uma nova fonte de renda? O primeiro passo para fazer tudo isso acontecer é abrir uma loja virtual.",
    },
    {
      icon: Storefront,
      title: "Para quem quer explorar as vitrines virtuais",
      description:
        "Inaugurar uma loja virtual pode ser uma das melhores formas de expandir a sua marca.",
    },
    {
      icon: HouseLine,
      title: "Para lojas que querem mudar de ares",
      description:
        "Já usa outra plataforma de e-commerce e quer tentar algo novo? Faça a migração para a Shopify.",
    },
    {
      icon: Users,
      title: "Para quem precisa de uma mão",
      description:
        "Se você precisa de ajuda para configurar a loja, conte com a ajuda especializada dos freelancers e agências cadastrados no Marketplace de Especialistas da Shopify",
    },
  ];
  return (
    <section className="bg-[#004C3F] w-full max-w-[1600px] m-auto px-24 py-24">
      <div className="flex flex-col items-center">
        <div className="w-full">
          <div>
            <h2 className="text-[40px] text-white leading-[48px]">
              Quer trazer seu negócio para a internet? Conte com a gente
            </h2>
            <div className="w-full flex justify-between items-center">
              <p className="text-base text-white leading-6 max-w-[1040px] mt-5">
                Crie um site de e-commerce com ferramentas projetadas para
                ajudar você a encontrar clientes, alavancar vendas e gerenciar a
                rotina da sua empresa.
              </p>
              <ShopifyLink
                label="Conheça mais exemplos"
                textColor="text-white"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between w-full mt-14">
          {shops.map((shop, index) => {
            return (
              <div className="flex-none" key={index}>
                <img src={shop.imgReference} alt={shop.segment} />
                <p className="text-sm font-bold text-white mt-2">
                  {shop.segment}
                </p>
                <span className="block text-base text-white">{shop.name}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-32">
        <h2 className="text-3xl text-white leading-10">
          Sua jornada rumo ao sucesso começa aqui
        </h2>
        <div className="w-full flex justify-between mt-14">
          {options.map((option, index) => {
            return (
              <div key={index} className="max-w-[324px]">
                <option.icon color="#FFFFFF" size={40} />
                <p className="mt-5 text-lg text-white font-medium leading-6">
                  {option.title}
                </p>
                <p className="text-base text-white mt-4">
                  {option.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
