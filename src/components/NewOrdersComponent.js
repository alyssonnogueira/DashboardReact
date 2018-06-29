import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NewOrdersComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
                <Paper elevation={4} style={{textAlign: 'center'}}>
                    <Grid container spacing={16} alignContent={'center'}>
                        <Grid item xs={12} sm={6} style={{backgroundColor: '#34A4FB'}}>
                            <FontAwesomeIcon icon="shopping-bag" size="lg"/>
                        </Grid>
                        <Grid item xs={12} sm={6} alignItems={true}>
                            <Typography component="p">
                               {this.props.newOrders}
                            </Typography>
                            <Typography component="p">
                                New Orders
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
        )
    }
}

export default withStyles(this.styles)(NewOrdersComponent);