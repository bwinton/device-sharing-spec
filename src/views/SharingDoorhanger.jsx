/** @jsx React.DOM */
Button = require('./Button.jsx');
Footer = require('./Footer.jsx');
Panel = require('./Panel.jsx');
PanelGroup = require('./PanelGroup.jsx');

module.exports = React.createClass({
  viewForDevice: function (device) {
    var className = 'Device ' + (device.enabled ? 'enabled' : 'disabled');
    var imageName = 'images/device-icon-' + device.type +
                        '.' + (device.typeExt || 'png');
    return <div className={ className }>
      <img src={ imageName }/>
      <div>{ device.name }</div>
      <Button text={ device.value }
        hasRightChevron style="default" />
    </div>;
  },

  render: function() {
    var footer = "";
    if (this.props.sharing === 'requested') {
      footer = <Footer shareDevices={ this.props.shareDevices } />;
    }
    return (
      <div className={ "PanelWrapper " + (this.props.isDropdownVisible ? "shown" : "hidden") }>
        <PanelGroup>
          <Panel items={ this.props.items }
            toggleDropdown={ this.props.toggleDropdown }>
            <span>This site would like to access:</span>
            { this.props.devices.map(this.viewForDevice) }
            {footer}
          </Panel>
        </PanelGroup>
      </div>
    )
  }
});