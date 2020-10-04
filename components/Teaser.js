import SbEditable from 'storyblok-react'

const Teaser = ({blok}) => {
  return (
    <SbEditable content={blok}>
      <div className="teaser">
        <h1>{blok.headline}</h1>
      </div>
    </SbEditable>
  )
}

export default Teaser
