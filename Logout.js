'use strict';

import React, { Component } from 'react';
import { NativeModules} from 'react-native';

exports.logout = function () {
  NativeModules.DigitsManager.logout();
}