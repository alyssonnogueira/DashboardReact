import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class CommentsComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Paper elevation={4} style={{textAlign: 'center'}}>
                <Grid container spacing={16}>
                    <Grid item xs={12} sm={6} style={{backgroundColor: '#FEB632'}}>
                        <FontAwesomeIcon icon="comment" size="lg"/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography component="p">
                            {this.props.comments}
                        </Typography>
                        <Typography component="p">
                            Comments
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}

export default withStyles(this.styles)(CommentsComponent);