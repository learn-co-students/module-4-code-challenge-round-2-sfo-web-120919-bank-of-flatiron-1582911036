import React from 'react'

const Transaction = (props) => {
  console.log("Transaction props:", props)
  return (
    <tr>
      <td>{props.oneTransaction.date}</td>
      <td>{props.oneTransaction.description}</td>
      <td>{props.oneTransaction.category}</td>
      <td>{props.oneTransaction.amount}</td>
    </tr>
  )
}

export default Transaction
