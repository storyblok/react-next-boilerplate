import React from "react";
import { sbEditable } from "@storyblok/storyblok-editable";

const Teaser = ({ blok }) => {
  return <h2 {...sbEditable(blok)}>{blok.headline}</h2>;
};

export default Teaser;
