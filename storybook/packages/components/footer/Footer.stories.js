import Footer from "./footer.html.twig";
import FooterBig from "./footer--big.html.twig";
import FooterSlim from "./footer--slim.html.twig";

export default {
  title: "Components/Footer",
  tags: ["autodocs"],
  component: Footer,
};

const BigTemplate = (args) => FooterBig(args);
const SlimTemplate = (args) => FooterSlim(args);

export const Default = {};

export const Big = BigTemplate.bind({});
export const Slim = SlimTemplate.bind({});
