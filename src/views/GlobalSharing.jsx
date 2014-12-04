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
          toggleDropdown={ this.props.toggleDropdown } />
        <SharingDoorhanger
          sharing={ this.props.sharing }
          isSharingVisible={ this.props.isSharingVisible }
          isDropdownVisible={ this.props.isDropdownVisible }
          shareDevices={ this.props.shareDevices }
          toggleDropdown={ this.props.toggleDropdown }
          image='new-doorhanger' />
      </div>
    )
  }
});
