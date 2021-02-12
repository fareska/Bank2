import React, { Component } from 'react'
import Operations from './components/Operations'
import Trans from './components/Trans'
import Transactions from './components/Transactions'
const axios = require('axios')

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            transactions: [],
            balance: this.updateBalance,
        }
    }

    getTransactions = async () => {
        const data = await axios.get('http://localhost:3300/transactions')
        return data.data
    }

    componentDidMount = async () => {
        let transactions = await this.getTransactions()
        await this.setState({ transactions }, () => this.updateBalance())
    }

    updateBalance = () => {
        let sum = 0
        if (this.state.transactions.length > 0) {
            this.state.transactions.forEach(t => sum += t.amount)
            this.setState({ balance: sum })
        }
    }

    deleteTran = async id => {
        const data = await axios.delete(`http://localhost:3300/transaction/${id}`)
        let trans = [...this.state.transactions]
        let index
        for (let i in trans) {
            if(trans[i]._id === data.data._id) index = i
        }
        trans.splice(index, 1)
        this.setState({ transactions: trans },() => this.updateBalance())
    }

    addTran = async obje => {
        const data = await axios.post('http://localhost:3300/transaction', obje)
        console.log(data)
        let trans = [...this.state.transactions]
        trans.push(data.data)
        this.setState({ transactions: trans }, () => this.updateBalance())
    }

    render() {
        return (
            <div>
                <h2  > Yor current balance : {this.state.balance}</h2>
                <Operations addTran={this.addTran} />
                {this.state.transactions.length > 0 ? <Trans deleteTran={this.deleteTran} transactions={this.state.transactions} /> : null}
            </div>
        )
    }

}
