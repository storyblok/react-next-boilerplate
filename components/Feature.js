import React from "react";
import { sbEditable } from "@storyblok/storyblok-editable";

const Feature = ({ blok }) => (
  <div className="column feature" {...sbEditable(blok)}>
    {blok.name}
  </div>
);

export default Feature;
