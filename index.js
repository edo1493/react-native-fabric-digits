var DigitsManager = require("react-native").NativeModules.DigitsManager;
var DigitsLoginButton = require('./DigitsLoginButton');
var DigitsLogoutButton = require('./DigitsLogoutButton');
var SessionDetails = require('./SessionDetails').getSessionDetails;

module.exports.DigitsLoginButton = DigitsLoginButton;
module.exports.DigitsLogoutButton = DigitsLogoutButton;
module.exports.SessionDetails = SessionDetails;
module.exports.DigitsManager = DigitsManager;