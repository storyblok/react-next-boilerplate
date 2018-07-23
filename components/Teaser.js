import Components from './index'
import SbEditable from 'storyblok-react'

export default (props) => (
  <SbEditable content={props.content}>
    <div className="teaser">
      {props.content.headline}
    </div>
  </SbEditable>
)
