'use strict';

import React, { Component } from 'react';
import axios from 'axios';


class WidgetService {

    async getDashInfos() {
        return new Promise(function (resolve, reject) {
            axios.get("http://dev.4all.com:3050/widgets").then(result => {
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

export default WidgetService;