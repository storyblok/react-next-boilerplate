import StoryblokClient from 'storyblok-js-client'
 
const Storyblok = new StoryblokClient({
    accessToken: 'your-preview-token',
    cache: {
      clear: 'auto',
      type: 'memory'
    }
})
 
export default Storyblok