'use strict';

import React, { Component } from 'react';
import { NativeModules} from 'react-native';

exports.getSessionDetails = function (callback) {
    NativeModules.DigitsManager.sessionDetails((error, sessionDetails) => {
      if (error) {
        console.error(error);
      } else {
        callback(sessionDetails);
      }
    });
  }