import React, { Component } from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage, renderCustomComponent } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

//import logo from '../logo.svg';
import MessagesService from "../services/Messages.service";
import NewOrdersComponent from "./NewOrdersComponent";

class ChatComponent extends Component {

    logo = "";
    constructor(props){
        super(props);
        this.messagesService = new MessagesService();
    }
    componentDidMount() {
        this.messagesService.getMessages().then(historic => {
            console.log(historic);
            historic.forEach(line => {
                if (line.displayPortraitLeft) {
                    addResponseMessage(
                        " ~" + line.userName + "   \n   " +
                        line.time + "  \n " +
                        line.message);
                    this.logo = line.portrait
                } else {
                    addUserMessage(" ~" + line.userName + "   \n   " +
                        line.time + "  \n " +
                        line.message);
                }
            })
        });
    }

    handleNewUserMessage = (newMessage) => {
        console.log(`New message incomig! ${newMessage}`);
        this.messagesService.postMessages(newMessage);
        addUserMessage(" ~" + "Eu" + "   \n   " +
            "1 min ago" + "  \n " +
            newMessage);

        //renderCustomComponent(NewOrdersComponent, {newOrders: 10}, {showAvatar: false});

    };

    render() {
        return (
            <div className="App" align="right">
                <Widget
                    handleNewUserMessage={this.handleNewUserMessage}
                    title={"DashBoard Chat"}
                    subtitle={""}
                    profileAvatar={this.logo}
                    showCloseButton={true}
                    fullScreenMode={false}
                />
            </div>
        );
    }
}

export default ChatComponent;