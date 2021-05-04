import { useEffect, useState } from "react";
import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: "your-preview-token",
  cache: {
    clear: "auto",
    type: "memory",
  },
});

export function useStoryblok(originalStory, preview) {
  let [story, setStory] = useState(originalStory);

  // adds the events for updating the visual editor
  // see https://www.storyblok.com/docs/guide/essentials/visual-editor#initializing-the-storyblok-js-bridge
  function initEventListeners() {
    if (typeof StoryblokBridge !== "undefined") {
      // initialize the bridge with your token
      const storyblokInstance = new StoryblokBridge({
        accessToken: "your-preview-token",
      });

      // reload on Next.js page on save or publish event in the Visual Editor
      storyblokInstance.on(["change", "published"], () =>
        location.reload(true)
      );

      // live update the story on input events
      storyblokInstance.on("input", (event) => {
        if (event.story.content._uid === story.content._uid) {
          setStory(event.story);
        }
      });
    }
  }

  // appends the bridge script tag to our document
  // see https://www.storyblok.com/docs/guide/essentials/visual-editor#installing-the-storyblok-js-bridge
  function addBridge(callback) {
    // check if the script is already present
    const existingScript = document.getElementById("storyblokBridge");
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "//app.storyblok.com/f/storyblok-v2-latest.js";
      script.id = "storyblokBridge";
      document.body.appendChild(script);
      script.onload = () => {
        // once the scrip is loaded, init the event listeners
        callback();
      };
    } else {
      callback();
    }
  }

  useEffect(() => {
      // only load inside preview mode
      if(preview) {
        // first load the bridge, then initialize the event listeners
        addBridge(initEventListeners);
      } 
  });

  return story;
}

export default Storyblok;
