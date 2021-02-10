import React, { Component } from 'react'
import Operations from './components/Operations'
import Transactions from './components/Transactions'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            transactions: [],
            balance: 0,
        }
    }

    componentDidMount = async () => {
        let transactions = [
            { amount: 3200, vendor: "Elevation", category: "Salary" },
            { amount: -7, vendor: "Runescape", category: "Entertainment" },
            { amount: -20, vendor: "Subway", category: "Food" },
            { amount: -98, vendor: "La Baguetterie", category: "Food" }
        ]
        let sumTotal = this.calculateBalance(transactions)
        await this.setState({ balance: sumTotal })
        await this.setState({ transactions })

    }

    calculateBalance = transactions => {
        let sum = 0
        transactions.forEach(t => sum += t.amount)
        return sum
    }

    render() {
        return (
            <div>
                {/* <p>Yor balance -- {this.state.balance}</p>
                <Transactions transactions={this.state.transactions} /> */}
                <Operations />
            </div>
        )
    }

}
