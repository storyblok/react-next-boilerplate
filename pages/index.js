import Components from '../components/index'
import StoryblokService from '../utils/StoryblokService'
import SbEditable from 'storyblok-react'
import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {pageContent: props.page.data.story.content}
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
    return Components(this.state.pageContent)
  }
}
