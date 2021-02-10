import React, { Component } from 'react'

export default class Transaction extends Component {
    render() {
        let transaction = this.props.transaction
        return (
            <div>
                <span>  vendor : {transaction.vendor}  ------</span>
                <span>  amount : {transaction.amount}  ------</span>
                <span>  category : {transaction.category}  ------</span>
                <i>delete icon</i>
            </div>
        )
    }
}
