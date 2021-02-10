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

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>

                            <Typography gutterBottom variant="h5" component="h2">
                                Add New Transaction
                            </Typography>

                            <form className={classes.input} noValidate autoComplete="off">
                                <TextField id="standard-basic" label="Category" />
                                <TextField id="standard-basic" label="Vendor" />
                                <TextField id="standard-basic" label="Amount" />
                            </form>

                        </CardContent>
                    </CardActionArea>

                    <CardActions>
                        <Button size="small" color="primary">
                            Withdraw
                        </Button>
                        <Button size="small" color="primary">
                            Deposit
                        </Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}
export default withStyles(styles, { withTheme: true })(Operations)   
