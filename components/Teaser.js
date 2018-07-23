import Components from './index'

export default (props) => (
  <div v-editable="blok" className="teaser">
    {props.content.headline}
  </div>
)