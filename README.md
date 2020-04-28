# Next.js Storyblok Boilerplate

This repository is a Next [Storyblok](https://www.storyblok.com) starter template used in following [tutorial](https://www.storyblok.com/tp/next-js-react-guide).

## Requirements

To use this project you have to have a Storyblok account. If you don't have one yet you can register at [Storyblok](https://www.storyblok.com), it's free.

## How to get started?

Read the [Next.js tutorial](https://www.storyblok.com/tp/next-js-react-guide) about Storyblok's concept.

### 1. Get the source code.

```sh
  $ git clone https://github.com/storyblok/gatsby-storyblok-boilerplate.git
```

### 2. Install all dependecies 
```sh
$  yarn # or npm install
```

### 3. Adding the Access token
Create a new empty Space and exchange the preview token with your own in ```utils/StoryblokService.js``` (not required if you have downloaded the project via app.storyblok.com).

```js
// in utils/StoryblokService.js
class StoryblokService {
  constructor() {
    this.devMode = false // If true it always loads draft
    this.token = 'Your_Preview_Token_Here'
    this.client = new StoryblokClient({
      accessToken: this.token,
      cache: {
        clear: 'auto',
        type: 'memory'
      }
    })
```

### 4. Run your project
Set the preview domain in <strong>Storyblok</strong> to `http://localhost:3000`

```sh
# to run in developer mode
$ yarn dev # or npm run dev
```

```sh
# to build your project
$ yarn build # or npm run build
```

For detailed explanation on how things work, checkout the [Next.js docs](https://nextjs.org/docs/#setup).

---

<p align="center">
  <h5 align="center">Powered by <a href="https://www.storyblok.com/" title="link to the Storyblok website">Storyblok</a></h5>
</p>
