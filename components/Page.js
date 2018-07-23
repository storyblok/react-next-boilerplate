import Components from './index'

export default (props) => (
  <div v-editable="blok">
    {props.content.body.map((blok) =>
      Components(blok)
    )}
  </div>
)
