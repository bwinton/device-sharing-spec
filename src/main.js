/** @jsx React.DOM */

// Main views.
var Desktop = require('./views/Desktop.jsx');

moment.lang('en', {
  calendar : {
    lastDay : '[Yesterday at] LT',
    sameDay : '[Today at] LT',
    nextDay : '[Tomorrow at] LT',
    lastWeek : 'l [at] LT',
    nextWeek : 'l [at] LT',
    sameElse : 'L'
  }
});

setTimeout(function(){
  var screenEl = $('<div/>', {
    class: 'component-wrapper'
  })[0];

  $('#wrapper').append(screenEl);

  React.renderComponent(<Desktop />, screenEl);

  $('.tip').tipr({
    mode: 'top',
    speed: 200
  });
}, 100);
