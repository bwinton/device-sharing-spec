/** @jsx React.DOM */
Marked = require('marked');

_users = require('./models/users.js');
STRINGS = require('./models/strings.js')
Utils = require('./utils/utils.js');
getTimeFromRange = Utils.getTimeFromRange;
TableOfContents = require('./views/TableOfContents.jsx');
NoteView = require('./views/NoteView.jsx');

// Supporting views.
Window = require('./views/Window.jsx');

// Main views.
BaseImage = require('./views/BaseImage.jsx');
GlobalDoorhanger = require('./views/GlobalDoorhanger.jsx');
SharingDoorhanger = require('./views/SharingDoorhanger.jsx');

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
    name: 'The new sharing indicator',
    slug: 'new-sharing-indicator',
    view: BaseImage,
    data: {image: 'new-sharing-indicator'}
  },
  {
    name: 'The new doorhanger',
    slug: 'new-doorhanger',
    view: SharingDoorhanger,
    data: {
      sharing: 'requested',
      image: 'new-doorhanger'
    }
  },
  {
    name: 'Sharing enabled',
    slug: 'after-sharing',
    view: SharingDoorhanger,
    data: {
      sharing: 'enabled',
      image: 'after-sharing'
    }
  },
  {
    name: 'Additional permissions',
    slug: 'additional-permissions',
    view: SharingDoorhanger,
    data: {
      sharing: 'enabled-2',
      image: 'additional-permissions'
    }
  },
  {
    name: 'Multiple sites',
    slug: 'multiple-sites',
    view: SharingDoorhanger,
    data: {
      sharing: 'enabled-3',
      image: 'multiple-sites'
    }
  },
  {
    name: 'Screensharing dropdown',
    slug: 'screensharing-dropdown',
    view: SharingDoorhanger,
    data: {
      sharing: 'enabled-3',
      image: 'screensharing-dropdown'
    }
  },
  {
    name: 'Global doorhanger',
    slug: 'global-doorhanger',
    view: GlobalDoorhanger,
    data: {
      sharing: 'enabled-3',
      images: [
      'global-doorhanger-top',
      'global-doorhanger-middle',
      'global-doorhanger-bottom'
      ]
    }
  },
  {
    name: 'Single doorhanger',
    slug: 'single-doorhanger',
    view: GlobalDoorhanger,
    data: {
      sharing: 'enabled-3',
      images: ['global-doorhanger-single']
    }
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
      React.renderComponent(<View data={state.data} error={state.error} index={index} name={state.name} slug={state.slug} />, viewEl);
      var notes = Marked(data);
      $(el).append(noteEl)
      React.renderComponent(<NoteView note={notes} />, noteEl);
    }).error(function(error){
      React.renderComponent(<View data={state.data} items={_users} error={state.error} index={index} name={state.name} slug={state.slug} />, viewEl);
    });
  })

  $('.tip').tipr({
    mode: 'top',
    speed: 200
  });
}, 100);
