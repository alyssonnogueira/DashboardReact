'use strict';

import React, { Component } from 'react';
import axios from 'axios';


class MessagesService {

    async getMessages() {
        return new Promise(function (resolve, reject) {
            axios.get("http://dev.4all.com:3050/messages").then(result => {
                    console.log(result);
                    resolve(result.data);
                }
            )
                .catch(err => {
                    reject(err)
                });
        });
    }

    async postMessages(message){
        return new Promise(function (resolve, reject) {
            axios.post("http://dev.4all.com:3050/messages", {message}).then(result => {
                    console.log(result);
                    resolve(result.data);
                }
            )
                .catch(err => {
                    reject(err)
                });
        });
    }
}

export default MessagesService;