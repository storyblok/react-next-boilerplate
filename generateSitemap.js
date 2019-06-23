const StoryblokClient = require('storyblok-js-client')
const Storyblok = new StoryblokClient({
  accessToken: 'vIxSxIvAUpbqD8V7NrciPAtt'
})
const fs = require('fs')

let routes = {}

Storyblok.get('cdn/links')
  .then((res) => {
    for (var key in res.data.links) {
      if (res.data.links[key].is_folder) {
        continue;
      }
      let slug = '/' + res.data.links[key].slug
      if (slug == '/home') {
        slug = '/'
      }
      routes[slug] = {page: '/'}
    }

    let fileContent = `module.exports = ${JSON.stringify(routes)}`

    fs.writeFile('sitemap.js', fileContent, function (err) {
      if (err) {
        throw err
      }
      console.log('File is created successfully.')
    })
  })
