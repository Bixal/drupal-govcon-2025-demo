import Header from "./header.html.twig";
import HeaderExtended from "./header--extended.twig";

export default {
  title: "Components/Header",
};

const Template = (args) => Header(args);
const ExtendedTemplate = (args) => HeaderExtended(args);

export const Default = Template.bind({});

export const Extended = ExtendedTemplate.bind({});
