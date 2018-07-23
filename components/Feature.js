import SbEditable from 'storyblok-react'

export default (props) => (
  <SbEditable content={props.content}>
    <div className="column feature">
      {props.content.name}
    </div>
  </SbEditable>
)
