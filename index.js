var DigitsManager = require("react-native").NativeModules.DigitsManager;
var DigitsLoginButton = require('./DigitsLoginButton');
var DigitsLogoutButton = require('./DigitsLogoutButton');
var SessionDetails = require('./SessionDetails').getSessionDetails;
var Logout = require('./Logout').logout;


module.exports.DigitsLoginButton = DigitsLoginButton;
module.exports.DigitsLogoutButton = DigitsLogoutButton;
module.exports.SessionDetails = SessionDetails;
module.exports.Logout = Logout;
module.exports.DigitsManager = DigitsManager;