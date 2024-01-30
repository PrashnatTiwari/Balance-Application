import {Component} from 'react'
import Item from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    initialAmount: 2000,
  }

  onDeduction = value => {
    const {initialAmount} = this.state
    this.setState(prevState => ({
      initialAmount: prevState.initialAmount - value,
    }))
  }

  render() {
    const {initialAmount} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="header-section">
            <div className="profile-logo">
              <p className="name">{initial}</p>
            </div>
            <h1 className="user-name">{name}</h1>
          </div>
          <div className="middle-section">
            <p className="your-balance">Your Balance</p>
            <div>
              <p className="amount">{initialAmount}</p>
              <p className="in-rupees">In Rupees</p>
            </div>
          </div>
          <h2 className="user-name">Withdraw</h2>
          <p className="your-balance">CHOOSE SUM (IN RUPEES)</p>
          <ul className="unordered-list-container">
            {denominationsList.map(eachItem => (
              <Item
                itemDetails={eachItem}
                onDeduction={this.onDeduction}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
