import React, { Component } from 'react';
import {Line} from 'react-chartjs';

class ChartsjsComponent extends Component {

    render() {
        return (
            <Line data={this.props.chartData} options={this.props.chartOptions} style={this.styles} width="800" height="450" redraw />
        )
    }

    styles={
        margin: '10px',
    }
}

export default ChartsjsComponent;