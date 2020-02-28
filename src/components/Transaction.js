import React from 'react'

const Transaction = (props) => {

  return (
    <tr>
      <td>{props.transactionInfo.date}</td>
      <td>{props.transactionInfo.description}</td>
      <td>{props.transactionInfo.category}</td>
      <td>{props.transactionInfo.amount}</td>
    </tr>
  )
}

export default Transaction
