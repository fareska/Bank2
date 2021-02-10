import React, { Component } from 'react'
import Transaction from './Transaction'

export default class Transactions extends Component {
    render() {

        return (
            <div>
                {this.props.transactions.map((t, i) => <Transaction key={i} transaction={t} />)}
            </div>
        )
    }
}
