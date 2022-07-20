import { ArrowRight } from "phosphor-react";
import PropTypes from "prop-types";

export function ShopifyLink({ textColor, label, textSize, url }) {
  return (
    <a
      href={url}
      className={`${textSize} ${textColor} font-bold flex items-center space-x-2 hover:space-x-3 transition-all`}
    >
      <span>{label}</span> <ArrowRight className="mt-1" weight="bold" />
    </a>
  );
}
ShopifyLink.propTypes = {
  label: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  textSize: PropTypes.string,
  url: PropTypes.string,
};

ShopifyLink.defaultProps = {
  label: "Conheça mais exemplos",
  textColor: "text-[#028060]",
  textSize: "text-base",
  url: "#",
};
