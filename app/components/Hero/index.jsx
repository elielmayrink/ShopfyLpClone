import { ShopifyButton } from "../ShopifyButton";

export function Hero() {
  return (
    <section className="flex flex-col md2:flex-row md2:items-center w-full max-w-[1600px] m-auto bg-[#FBF7ED] mt-20">
      <div className="w-full max-w-[864px] px-[98px]">
        <h1 className="text-[32px] mt-16 md2:text-4xl lg:text-5xl leading-[66px] max-w-[622px] font-extrabold text-[#004c3f]">
          A casa Dos sonhos para os seus negócios
        </h1>
        <form className="flex mt-[30px] md2:flex-col lg:flex-row">
          <label className="hidden" htmlFor="email">
            E-mail
          </label>
          <input
            className="border mr-[14px] w-full max-w-[405px] h-[51px] p-5 border-[#6C7177] rounded-[4px] focus:ring-1 focus:ring-[#004c3f] focus:border-[#004c3f]"
            placeholder="Insira seu email"
            type="email"
            name="Email"
            id="email"
          />
          <ShopifyButton width="lg:w-[205px]" height="h-[52px]" />
        </form>
        <p className="text-xs text-[#6C717B] max-w-[622px] mt-6 leading-5 mb-16">
          Experimente a Shopify gratuitamente por 14 dias, sem precisar fornecer
          os dados do seu cartão de crédito. Ao digitar seu e-mail, você
          concorda em receber e-mail marketing da Shopify.
        </p>
      </div>
      <div>
        <img
          className="w-full min-w-[567px] flex object-right-top"
          src="https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/pantys/pantys-home-hero-small-c43b416a19b84ceccb9b4c14ad3fae7e0ce601326350ff932a6e94861ea8b359.jpg"
          alt=""
        />
      </div>
    </section>
  );
}
