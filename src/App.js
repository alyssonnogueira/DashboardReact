import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NewOrders from './components/NewOrdersComponent';
import Comments from './components/CommentsComponent';
import NewUsers from './components/NewUsersComponent';
import ViewPages from './components/ViewPagesComponent';
import ChatComponent from './components/ChatComponent';
import ChartsjsComponent from './components/ChartsjsComponent';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingBag, faComment, faUser, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import WidgetService from './services/Widget.service';
import ChartInfoService from "./services/ChartInfo.service";

library.add(faComment, faShoppingBag, faUser, faNewspaper);

class App extends Component {
    newOrders = 0;
    comments = 0;
    newUsers = 0;
    pageViews = 0;
    constructor(props) {
        super(props);
        new WidgetService().getDashInfos().then(result => {
            this.newOrders = result.newOrders;
            this.comments = result.comments;
            this.newUsers = result.newUsers;
            this.pageViews = result.pageViews;
            this.setState({});
        });
        new ChartInfoService().getPageViews().then(results => {
            const labels = [];
            const data = [];
            results.forEach(result => {
                labels.push(result.month);
                data.push(result.views);
            });
            console.log(labels);
            this.chartData = {
                labels: labels,
                datasets: [{
                    abel: "Page Views",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: data
                }]
            };
            this.c
            this.setState({});
        });
    }

  render() {
    return (
      <div className="App" style={{backgroundColor: '#F0F4F7'}}>
        <header className="App-header">
          <h1 className="App-title">Dashboard</h1>
        </header>
          <Grid container spacing={24}>
              <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
                  <NewOrders newOrders={this.newOrders}/>
              </Grid>
              <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
                  <Comments comments={this.comments} />
              </Grid>
              <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
                 <NewUsers newUsers={this.newUsers}/>
              </Grid>
              <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
                  <ViewPages pageViews={this.pageViews}/>
              </Grid>
              <Grid item style={this.graphicStyle}>
                  <ChartsjsComponent chartData={this.chartData} chartOptions={this.chartOptions}/>
              </Grid>
              <Grid item style={{verticalAlign: 'rigth'}}>
                  <ChatComponent/>
              </Grid>
          </Grid>
      </div>
    );
  }

    graphicStyle = {
      backgroundColor: '#FFF',
      margin: '40px',
      padding: '10px',
      alignCenter: true
    };

    chartData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: []
            }
        ]
    };
    chartOptions = {
        legendTemplate : "<ul class='legend'>teste<li><span style='background-color:black'>TESTE</span></li></ul>"
    }
}

export default App;
