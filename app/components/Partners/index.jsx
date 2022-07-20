import { ArrowRight } from "phosphor-react";
import parceiro from "~/assets/images/parceiros.png";
import parceira01 from "~/assets/images/parceira01.png";
import parceira02 from "~/assets/images/parceira02.png";
import parceira03 from "~/assets/images/parceira03.png";
import parceira04 from "~/assets/images/parceira04.png";
import parceira05 from "~/assets/images/parceira05.png";
import parceira06 from "~/assets/images/parceira06.png";
import parceira07 from "~/assets/images/parceira07.png";
import parceira08 from "~/assets/images/parceira08.png";
import parceira09 from "~/assets/images/parceira09.png";
import parceira10 from "~/assets/images/parceira10.png";

export function Partners() {
  const parceiros = [
    parceira01,
    parceira02,
    parceira03,
    parceira04,
    parceira05,
    parceira06,
    parceira07,
    parceira08,
    parceira09,
    parceira10,
  ];
  return (
    <section className="w-full max-w-[1600px] m-auto mt-40">
      <div className="flex w-full max-w-[1406px] m-auto">
        <div className="w-[703px]">
          <img
            className="w-full"
            src={parceiro}
            alt="imagem de parceiros shopify"
          />
        </div>
        <div className="bg-[#002E25] w-[703px] flex flex-col items-center py-16">
          <p className="text-white text-3xl leading-[45px] max-w-[479px] py-9 mb-[60px] text-center">
            “Escolhemos a Shopify porque ela é a melhor solução, combinando
            individualidade de marca e infraestrutura de e-commerce.”
          </p>
          <img
            className="mb-8 object-cover"
            src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/testimonials/logo-sobrebarba-small-2d6e98edaa753e2ad9761e12c74522cdc5dde41cd9ed65325589d639e1b41e7c.png"
            alt="logo sobrebarba"
          />
          <p className="text-white mb-8 text-xl">Samuel | Sobrebarba</p>
          <a
            href="#"
            className="text-lg text-white font-bold flex items-center space-x-2 hover:space-x-3 transition-all"
          >
            <span>Conheça essa história de sucesso</span>{" "}
            <ArrowRight className="mt-1" weight="bold" />
          </a>
        </div>
      </div>
      <div className="w-full max-w-[1406px] m-auto">
        <ul className="flex mb-16 mt-16 justify-between">
          {parceiros.map((parceiro, index) => (
            <li className="" key={index}>
              <img className="bg-transparent" src={parceiro} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
