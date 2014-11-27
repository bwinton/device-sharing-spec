/** @jsx React.DOM */

// Main views.
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

var state = {
  name: 'The new doorhanger',
  slug: 'new-doorhanger',
  view: SharingDoorhanger,
  data: {
    sharing: 'requested',
    image: 'new-doorhanger'
  }
};

var screendata = {
  image: 'full-screen'
}

setTimeout(function(){
  var el = $('<div/>', {
    class: 'component-wrapper',
    id: state.slug
  })[0];

  var viewEl = $('<div/>', {
    class: 'View'
  })[0];

  var screenEl = $('<div/>', {
    class: 'NoteWrapper'
  })[0];

  $(el).append(viewEl);

  $('#wrapper').append(el);

  React.renderComponent(<SharingDoorhanger data={state.data} error={state.error} name={state.name} slug={state.slug} />, viewEl);
  $(el).append(screenEl)
  React.renderComponent(<FullImage data={screendata} />, screenEl);

  $('.tip').tipr({
    mode: 'top',
    speed: 200
  });
}, 100);
