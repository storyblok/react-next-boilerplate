import Components from './index'

export default (props) => (
  <div v-editable="blok" className="grid">
    {props.content.columns.map((blok) =>
      Components(blok)
    )}
  </div>
)