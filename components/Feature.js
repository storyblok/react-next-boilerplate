import { storyblokEditable } from "@storyblok/react";

const Feature = ({ blok }) => (
  <div className="column feature" {...storyblokEditable(blok)} key={blok._uid}>
    {blok.name}
  </div>
);

export default Feature;
