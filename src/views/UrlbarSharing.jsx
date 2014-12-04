/** @jsx React.DOM */
var Button = require('./Button.jsx');
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
          <SharingDoorhanger
            sharing={ this.props.sharing }
            isSharingVisible={ this.props.isSharingVisible }
            isDropdownVisible={ this.props.isDropdownVisible }
            shareDevices={ this.props.shareDevices }
            toggleDropdown={ this.props.toggleDropdown }
            image='new-doorhanger' />
        <Button text="Request sharing" style="default"
          onClick={this.props.requestSharing}/>
      </div>
    )
  }
});
