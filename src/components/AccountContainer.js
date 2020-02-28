import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import AddTransactionForm from './AddTransactionForm'

class AccountContainer extends Component {
  state = {
   transactionInfo: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/transactions').then(resp => resp.json())
    .then(data => this.setState({
      transactionInfo: data
    }))
  }
  handleFormData = (e, newTransaction) => {
    e.preventDefault()
    this.setState(prevState => {
      return {transactionInfo: [newTransaction, ...prevState.transactionInfo]}
    })
  }
render() {
    
    return (
      <div>
        <Search />
        <AddTransactionForm handleFormData={this.handleFormData} />
        <TransactionsList transactionInfo={this.state.transactionInfo}/>
      </div>
    )
  }
}
export default AccountContainer
