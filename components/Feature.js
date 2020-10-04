import SbEditable from 'storyblok-react'

const Feature = ({blok}) => (
  <SbEditable content={blok}>
    <div className="feature util__flex-eq">
      <h2>{blok.name}</h2>
      <p>{blok.Footer}</p>
    </div>
  </SbEditable>
)

export default Feature
