const express = require('express')
const router = express.Router()

const Transaction = require('../model/Transaction')

router.post('/transaction' , async (req, res)=>{
    let newTransaction = new Transaction(req.body)
    console.log(newTransaction);
    let saved = await newTransaction.save()
    res.send(saved)
})

router.get('/transactions', function(req, res){
    Transaction.find({}, (err, data)=>res.send(data))
})

router.delete('/transaction/:id', async function(req, res){
    const tran = await Transaction.findByIdAndDelete(req.params.id)
    res.send(tran)
})

module.exports = router