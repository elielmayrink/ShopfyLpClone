import PropTypes from "prop-types";
export function ShopifyButton({ label, width, height }) {
  return (
    <button
      className={`${width} ${height} w-full max-w-[405px] lg:min-w-[201px] md2:mt-2 lg:mt-0 bg-[#028060] mr-5 hover:bg-[#004C3F] transition-colors rounded-[4px] text-white font-bold text-base`}
    >
      {label}
    </button>
  );
}
ShopifyButton.propTypes = {
  label: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

ShopifyButton.defaultProps = {
  label: "Crie sua loja grátis",
  width: "w-[181px]",
  height: "h-[44px]",
};
