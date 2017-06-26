define(function (require) {

  var test = require('./test');
  var log = require('./log');
  var messages = require('./messages');

  log(messages.sayHello('Alex'));
})