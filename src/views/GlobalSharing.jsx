/** @jsx React.DOM */
var SharingDoorhanger = require('./SharingDoorhanger.jsx');
var SharingIndicator = require('./SharingIndicator.jsx');

module.exports = React.createClass({
  render: function(){
    return (
      <div>
        <SharingIndicator id="global-indicator"
          sharing={ this.props.sharing }
          isSharingVisible={ this.props.isSharingVisible }
          toggleDropdown={ this.props.toggleDropdown }
          devices={ this.props.devices } />
        <SharingDoorhanger {...this.props} />
      </div>
    )
  }
});
