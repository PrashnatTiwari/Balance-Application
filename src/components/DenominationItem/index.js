import './index.css'

const Item = props => {
  const {itemDetails, onDeduction} = props
  const {value} = itemDetails
  const deductionAmount = () => {
    onDeduction(value)
  }
  return (
    <li className="list-item">
      <button className="button" type="button" onClick={deductionAmount}>
        {value}
      </button>
    </li>
  )
}

export default Item
