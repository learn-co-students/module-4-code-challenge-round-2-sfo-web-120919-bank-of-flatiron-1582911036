import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import AddTransactionForm from './AddTransactionForm'
import Transaction from './Transaction'

class AccountContainer extends Component {

  state = {
    allTransactions: [],
    searchTerm: '',
    displayTransactions: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/transactions')
    .then(resp => resp.json())
    .then(transactionData => this.setState({
      allTransactions: transactionData,
      displayTransactions: transactionData
    }))
  }

  handleSearchFilter =(e) => {
     let transactionInput = e.target.value.toLowerCase();
     console.log(transactionInput)
    //get user input from the event
    // compare it to the description of each transaction
    let newTransactions = this.state.allTransactions.filter(transaction =>transaction.description.toLowerCase().startsWith(transactionInput))

    // if the description starts with the user input, then show it in
    //  transactions list...case insensitive
    this.setState({
      displayTransactions: newTransactions
    })
  }

  addTransaction = (transaction) => {
    console.log(transaction)
    //Make a POST fetch
    // Match the request to the shape of the transaction
    // add new Transaction to this.state.
  }



  render() {
    return (
      <div>
        <Search handleSearchFilter={this.handleSearchFilter} />
        <AddTransactionForm />
        <TransactionsList allTransactions={this.state.displayTransactions} />
       
      </div>
    )
  }
}

export default AccountContainer
