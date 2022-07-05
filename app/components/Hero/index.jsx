export function Hero() {
  return (
    <section className="w-full max-w-[1600px] m-auto bg-[#FBF7ED] flex items-center pl-[98px] mt-20">
      <div className="w-[864px]">
        <h1 className="text-5xl leading-[66px] max-w-[622px] font-extrabold text-[#004c3f]">
          A casa Dos sonhos para os seus negócios
        </h1>
        <form className="mt-[30px]">
          <label className="hidden" htmlFor="email">
            E-mail
          </label>
          <input
            className="border w-[405px] h-[51px] p-5 border-[#6C7177] rounded-[4px]"
            placeholder="Insira seu email"
            type="email"
            name="Email"
            id="email"
          />
          <button className="w-[202px] h-[53px] ml-[14px] bg-[#028060] hover:bg-[#004C3F] transition-colors rounded-[4px] text-white font-bold text-base">
            Crie sua loja grátis!
          </button>
        </form>
        <p className="text-xs text-[#6C717B] max-w-[622px] mt-6 leading-5">
          Experimente a Shopify gratuitamente por 14 dias, sem precisar fornecer
          os dados do seu cartão de crédito. Ao digitar seu e-mail, você
          concorda em receber e-mail marketing da Shopify.
        </p>
      </div>
      <div>
        <img
          className="w-[756px] object-right-top"
          src="https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/pantys/pantys-home-hero-small-c43b416a19b84ceccb9b4c14ad3fae7e0ce601326350ff932a6e94861ea8b359.jpg"
          alt=""
        />
      </div>
    </section>
  );
}
