import { ArrowRight } from "phosphor-react";
import parceiros from "~/assets/images/parceiros.png";
export function Partners() {
  return (
    <section>
      <div>
        <div>
          <img src={parceiros} alt="imagem de parceiros shopify" />
        </div>
        <div>
          <p>
            “Escolhemos a Shopify porque ela é a melhor solução, combinando
            individualidade de marca e infraestrutura de e-commerce.”
          </p>
          <img
            src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/testimonials/logo-sobrebarba-small-2d6e98edaa753e2ad9761e12c74522cdc5dde41cd9ed65325589d639e1b41e7c.png"
            alt="logo sobrebarba"
          />
          <p>Samuel | Sobrebarba</p>
          <a
            href="#"
            className="text-lg text-[#008060] font-bold flex items-center space-x-2 hover:space-x-3 transition-all"
          >
            <span>Conheça essa história de sucesso</span>{" "}
            <ArrowRight className="mt-1" weight="bold" />
          </a>
        </div>
      </div>
      <div></div>
    </section>
  );
}
