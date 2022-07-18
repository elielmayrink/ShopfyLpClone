import { ArrowRight, Play } from "phosphor-react";
import globo from "~/assets/images/globo.png";
export function TheWord() {
  return (
    <section className="w-full max-w-[1600px] m-auto px-44">
      <div>
        <h2 className="text-3xl left-10 text-[#212326] max-w-[714px] mb-7">
          Capacitamos empreendedoras e empreendedores dos quatro cantos do mundo
        </h2>

        <p className="text-2xl text-[#212326] max-w-[714px] mb-8">
          Milhões de empresas situadas em 175 países do mundo inteiro lucraram
          US$ 496 bilhões em vendas com a ajuda da Shopify.
        </p>
        <a
          href="#"
          className="text-lg text-[#008060] font-bold flex items-center space-x-2 hover:space-x-3 transition-all"
        >
          <span>Saiba mais sobre a Shopify</span>{" "}
          <ArrowRight className="mt-1" weight="bold" />
        </a>
      </div>
      <div className="relative">
        <img className="m-auto mt-28" src={globo} alt="" />
        <button className="absolute bottom-4 left-32">
          <Play color="#028060" weight="bold" size={30} />
        </button>
      </div>
    </section>
  );
}
