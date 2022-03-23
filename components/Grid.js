import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Grid = ({ blok }) => {
  return (
    <div className="grid" {...storyblokEditable(blok)} key={blok._uid}>
      {blok.columns.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} />
      ))}
    </div>
  );
};

export default Grid;
