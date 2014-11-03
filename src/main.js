/** @jsx React.DOM */
Marked = require('marked');

_users = require('./models/users.js');
STRINGS = require('./models/strings.js')
Utils = require('./utils/utils.js');
getTimeFromRange = Utils.getTimeFromRange;
TableOfContents = require('./views/TableOfContents.jsx');
NoteView = require('./views/NoteView.jsx');

PrecallNotSignedInFirstRun = require('./views/PrecallNotSignedInFirstRun.jsx');
Settings = require('./views/Settings.jsx');

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

var states = [
  {
    name: 'Precall (First Run)',
    view: PrecallNotSignedInFirstRun,
    tab: 0,
    slug: 'precall-firstrun'
  },
  {
    name: 'Settings',
    view: Settings,
    slug: 'settings'
  }
];

setTimeout(function(){
  React.renderComponent(<TableOfContents items={states} />, $('#toc')[0]);
  _.each(states, function(state, index){

    var el = $('<div/>', {
      class: 'component-wrapper',
      id: state.slug
    })[0];

    var viewEl = $('<div/>', {
      class: 'View'
    })[0];

    var noteEl = $('<div/>', {
      class: 'NoteWrapper'
    })[0];

    $(el).append(viewEl);

    $('#wrapper').append(el);

    var View = state.view
    $.get('./notes/' + state.slug + '.md').success(function(data){
      React.renderComponent(<View items={_users} error={state.error} index={index} tab={state.tab} name={state.name} slug={state.slug} />, viewEl);
      var notes = Marked(data);
      $(el).append(noteEl)
      React.renderComponent(<NoteView note={notes} />, noteEl);
    }).error(function(error){
      React.renderComponent(<View items={_users} error={state.error} index={index} tab={state.tab} name={state.name} slug={state.slug} />, viewEl);
    });
  })

  $('.tip').tipr({
    mode: 'top',
    speed: 200
  });
}, 100);
