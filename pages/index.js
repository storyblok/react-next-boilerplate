import React from 'react'
import Page from '../components/Page'
import Layout from '../components/layout'
import StoryblokService from '../utils/storyblok-service'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pageContent: props.page.data.story.content,
    }
  }

  static async getInitialProps({ query }) {
    StoryblokService.setQuery(query)
    let slug = query.slug || 'home'

    return {
      page: await StoryblokService.get(`cdn/stories/${slug}`)
    }
  }

  componentDidMount() {
    StoryblokService.initEditor(this)
  }

  render() {
    return (
      <Layout settings={""}>
        {/* We will define these settings later on */}
        <Page body={this.state.pageContent.body} />
      </Layout>
    )
  }
}
