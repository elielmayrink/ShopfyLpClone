import { ArrowUp } from "phosphor-react";
export function TheJourney() {
  return (
    <section className="w-full max-w-[1600px] m-auto pt-24 pb-32 relative">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-[30px] leading-10 text-[#212326] max-w-[815px] text-center">
          Comece a sua jornada no mundo dos negócios com a Shopify
        </h2>
        <p className="text-lg leading-6 text-[#6B7177] text-center max-w-[815px] mt-5 mb-7">
          Experimente a Shopify gratuitamente e explore todas as ferramentas e
          serviços necessários para começar, gerenciar e expandir o seu negócio.
        </p>
        <button className="w-[181px] h-[44px] bg-[#028060] hover:bg-[#004C3F] transition-colors rounded-[4px] text-white font-bold text-base">
          Crie sua loja grátis
        </button>
      </div>
      <a
        href="#"
        className={`text-base text-[#028060] font-bold flex items-center space-x-1 group transition-all absolute bottom-8 right-14`}
      >
        <span>Voltar ao topo</span>{" "}
        <ArrowUp className="group-hover:mb-2 transition-all" weight="bold" />
      </a>
    </section>
  );
}
