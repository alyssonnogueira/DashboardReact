import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class NewUsersComponent extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Paper elevation={4} style={{textAlign: 'center'}}>
                <Grid container spacing={16}>
                    <Grid item xs={12} sm={6} style={{backgroundColor: '#11C3AB'}}>
                        <FontAwesomeIcon icon="user" size="lg"/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography component="p">
                            {this.props.newUsers}
                        </Typography>
                        <Typography component="p">
                            New Users
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}

export default withStyles(this.styles)(NewUsersComponent);