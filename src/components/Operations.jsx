import { Card } from '@material-ui/core'
import React, { Component } from 'react'

import { withStyles } from "@material-ui/core/styles";

import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';


const styles = theme => ({
    root: {
        backgroundColor: "orange"
    },
    input: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
});

class Operations extends Component {
    constructor() {
        super()
        this.state = {
            vendorVal: '',
            amountVal: '',
            categoryVal: '',
        }
    }

    handleInput = e => {
        let name = e.target.name 
        let value = e.target.value
        this.setState({ [name]: value })
    }

    emptyInputs = () => this.setState({amountVal:'', categoryVal:'', vendorVal:''})

    checkInputs = () =>{
        let inputs = Object.keys(this.state)
        for (const i of inputs) {
            if(this.state[i] === '') {
                alert('You should fill all the fields')
                return false
            }
        }
        return true 
    } 

    newWithdraw = () =>{
        if(this.checkInputs()){
            this.emptyInputs()
            this.props.addTran({ amount:parseInt(this.state.amountVal *-1)  , vendor: this.state.vendorVal, category: this.state.categoryVal })
        }
        
    } 
    
    newDeposit = () => {
        if(this.checkInputs()){
            this.emptyInputs()
              this.props.addTran({ amount:parseInt(this.state.amountVal) , vendor: this.state.vendorVal, category: this.state.categoryVal })
        }
    } 

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia className={classes.media} image="/static/images/cards/contemplative-reptile.jpg"/>
                        
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Add New Transaction :
                            </Typography>

                            <form className={classes.input} noValidate autoComplete="off">
                                <TextField required value={this.state.categoryVal} name='categoryVal' onChange={this.handleInput} id="standard-basic" label="Category" />
                                <TextField required value={this.state.vendorVal} name='vendorVal' onChange={this.handleInput} id="standard-basic" label="Vendor" />
                                <TextField type='number' required value={this.state.amountVal} name='amountVal' onChange={this.handleInput} id="standard-basic" label="Amount" />
                            </form>
                        </CardContent>
                    </CardActionArea>

                    <CardActions>
                        <Button onClick={this.newWithdraw} size="small" color="primary">
                            Withdraw
                        </Button>
                        <Button onClick={this.newDeposit} size="small" color="primary">
                            Deposit
                        </Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}
export default withStyles(styles, { withTheme: true })(Operations)   
