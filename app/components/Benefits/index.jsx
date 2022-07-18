import device from "~/assets/images/device.png";
import balanco from "~/assets/images/balanco.png";
import webApp from "~/assets/images/webApp.png";
import { ArrowRight } from "phosphor-react";

export function Benefits() {
  return (
    <section className="w-full max-w-[1600px] m-auto py-24 flex flex-col items-center">
      <div>
        <h2 className="text-[40px] leading-[48px] text-[#212326] text-center -tracking-[0.8px]">
          Seguimos no seu ritmo
        </h2>
        <p className="text-xl text-[#6b7177] max-w-[600px] text-center mt-3">
          A Shopify é uma plataforma com todos os recursos de e-commerce e
          pontos de venda necessários para você começar, gerenciar e expandir o
          seu negócio.
        </p>
      </div>
      <div className="flex items-center mt-[86px] gap-x-[90px]">
        <div className="relative z-0">
          <img
            className="w-[468px] z-0 h-[374px] rounded-md"
            src={webApp}
            alt="tela de um app web com a imagem de uma banqueta"
          />
          <img
            className="absolute z-0 left-[-90px] top-[110px] rounded-xl"
            src={device}
            alt="imagem de um celular"
          />
        </div>
        <div>
          <h3 className="text-3xl leading-10 text-[#212326] mb-5">
            Venda em qualquer lugar
          </h3>
          <p className="max-w-[474px] text-base text-[#6b7177] mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            libero voluptate vitae ex provident modi laudantium porro unde,
            numquam iusto non corrupti? Odit tempora explicabo inventore omnis,
            aliquid alias consequatur.
          </p>
          <a
            className="text-lg text-[#008060] font-bold flex items-center space-x-2 hover:space-x-3 transition-all"
            href="#"
          >
            <span>Explore as formas de vender</span>
            <ArrowRight className="mt-1" weight="bold" />
          </a>
        </div>
      </div>
      <div className="flex mt-12">
        <div>
          <h3 className="text-3xl leading-10 text-[#212326] mb-5 mt-[125px]">
            Divulgue seu negócio
          </h3>
          <p className="text-base max-w-[541px] text-[#6b7177] block mb-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            et quis esse obcaecati aliquam enim expedita fuga, perspiciatis
            commodi unde pariatur eaque harum velit praesentium porro aut nemo
            ipsam minus!
          </p>
          <a
            className="text-lg text-[#008060] font-bold flex items-center space-x-2 hover:space-x-3 transition-all"
            href="#"
          >
            <span>Descubra como divulgar a sua marca</span>
            <ArrowRight className="mt-1" weight="bold" />
          </a>
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/market-small-084eab2d72b510555838c446501d27dd7380585450efcaaa97453289b2b69c79.jpg"
            alt=""
            className="w-[583px]"
          />
        </div>
      </div>
      <div className="flex items-center gap-x-[90px] mt-8">
        <div>
          <img className="shadow-lg" src={balanco} alt="" />
        </div>
        <div>
          <h3 className="text-3xl max-w-[414px] leading-10 text-[#212326] mb-5">
            Gerencie tudo, e de forma integrada
          </h3>
          <p className="text-base max-w-[541px] text-[#6b7177] block mb-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam porro
            harum tempore, voluptatem aspernatur et eius sapiente dolores
            suscipit quisquam aut, non eum dicta nisi asperiores perspiciatis
            libero ex veritatis!
          </p>
          <a
            className="text-lg text-[#008060] font-bold flex items-center space-x-2 hover:space-x-3 transition-all"
            href="#"
          >
            <span>Descubra como gerenciar o seu negócio</span>
            <ArrowRight className="mt-1" weight="bold" />
          </a>
        </div>
      </div>
    </section>
  );
}
