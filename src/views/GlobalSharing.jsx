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
          isDropdownVisible={ this.props.isDropdownVisible }
          requestSharing={ this.props.requestSharing }
          toggleDropdown={ this.props.toggleDropdown } />
        <SharingDoorhanger
          sharing={ this.props.sharing }
          isSharingVisible={ this.props.isSharingVisible }
          isDropdownVisible={ this.props.isDropdownVisible }
          requestSharing={ this.requestSharing }
          toggleDropdown={ this.toggleDropdown }
          image='new-doorhanger' />
      </div>
    )
  }
});
