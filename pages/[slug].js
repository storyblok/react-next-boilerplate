import Head from "next/head"
import styles from "../styles/Home.module.css"
 
// The Storyblok Client & hook
import Storyblok, { useStoryblok } from "../lib/storyblok"
import DynamicComponent from '../components/DynamicComponent'
 
export default function DynamicPage(props) {
  const story = useStoryblok(props.story)
  return (
    <div className={styles.container}>
      <Head>
        <title>{ story ? story.name : 'My Site' }</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
      <header>
        <h1>
          { story ? story.name : 'My Site' }
        </h1>
      </header>
 
      <main>
        { story ? story.content.body.map((blok) => (
          <DynamicComponent blok={blok} key={blok._uid}/>
        )) : null }
      </main>
    </div>
  )
}

export async function getStaticProps(context) {
    let slug = context.params.slug
    let params = {
      version: "draft", // or 'published'
    }
   
    if (context.preview) {
      params.version = "draft"
      params.cv = Date.now()
    }
   
    let { data } = await Storyblok.get(`cdn/stories/pages/${slug}`, params)
   
    return {
      props: {
        story: data ? data.story : false,
        preview: context.preview || false
      },
      revalidate: 10, 
    }
  }

export async function getStaticPaths() {
    // get all stories inside the pages folder
    let { data } = await Storyblok.get('cdn/links/', {
        starts_with: 'pages'
    })
 
    let paths = []
    Object.keys(data.links).forEach(linkKey => {
        // don't generate route for folders or home entry
        if (data.links[linkKey].is_folder || data.links[linkKey].slug === 'home') {
            return
        }

        // remove /pages from slug
        const slug = data.links[linkKey].slug.replace('pages', '')

        // generate page for the slug
        paths.push({ params: { slug } })
    })
 
    return {
        paths: paths,
        fallback: "blocking"
    }
}