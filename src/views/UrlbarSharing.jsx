/** @jsx React.DOM */
var SharingDoorhanger = require('./SharingDoorhanger.jsx');
var SharingIndicator = require('./SharingIndicator.jsx');

module.exports = React.createClass({
  render: function(){
    return (
      <div className="BrowserWindow">
        <div className="Toolbar"><SharingIndicator id="urlbar-indicator"
          sharing={ this.props.sharing }
          isSharingVisible={ this.props.isSharingVisible }
          toggleDropdown={ this.props.toggleDropdown } /><div className="end"
        ></div></div>
          <SharingDoorhanger {...this.props} />
      </div>
    )
  }
});
