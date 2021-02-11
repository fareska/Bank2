import React, { Component } from 'react'
import Operations from './components/Operations'
import Trans from './components/Trans'
import Transactions from './components/Transactions'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            transactions: [],
            balance: this.updateBalance,
        }
    }

    componentDidMount = async () => {
        let transactions = [
            { amount: 3200, vendor: "Elevation", category: "Salary" },
            { amount: -7, vendor: "Runescape", category: "Entertainment" },
            { amount: -20, vendor: "Subway", category: "Food" },
            { amount: 3200, vendor: "Elevation", category: "Salary" },
            { amount: -7, vendor: "Runescape", category: "Entertainment" },
            { amount: -20, vendor: "Subway", category: "Food" },
            { amount: 3200, vendor: "Elevation", category: "Salary" },
            { amount: -7, vendor: "Runescape", category: "Entertainment" },
            { amount: -20, vendor: "Subway", category: "Food" },
            { amount: 3200, vendor: "Elevation", category: "Salary" },
            { amount: -7, vendor: "Runescape", category: "Entertainment" },
            { amount: -20, vendor: "Subway", category: "Food" },
            { amount: 3200, vendor: "Elevation", category: "Salary" },
            { amount: -7, vendor: "Runescape", category: "Entertainment" },
            { amount: -20, vendor: "Subway", category: "Food" },
            { amount: -98, vendor: "La Baguetterie", category: "Food" }
        ]
        await this.setState({ transactions }, () => this.updateBalance())
    }

    updateBalance = () => {
        let sum = 0
        if (this.state.transactions.length > 0) {
            this.state.transactions.forEach(t => sum += t.amount)
            this.setState({ balance: sum })
        }
    }

    deleteTran = index => {
        let trans = [...this.state.transactions]
        trans.splice(index, 1)
        this.setState({ transactions: trans },() => this.updateBalance())
    }

    addTran = obje => {        
        let trans = [...this.state.transactions]
        trans.push(obje)
        this.setState({ transactions: trans }, () => this.updateBalance())
    }

    render() {
        return (
            <div>
                <p>Yor balance -- {this.state.balance}</p>
                {/* <Transactions transactions={this.state.transactions} /> */}
                <Operations addTran={this.addTran} />
                {this.state.transactions.length > 0 ? <Trans deleteTran={this.deleteTran} transactions={this.state.transactions} /> : null}
            </div>
        )
    }

}
