/** @jsx React.DOM */
var Button = require('./Button.jsx');
var Dispatcher = require('../utils/Dispatcher');
var Footer = require('./Footer.jsx');
var Panel = require('./Panel.jsx');
var PanelGroup = require('./PanelGroup.jsx');

module.exports = React.createClass({
  // doesn't fire, because we're being hidden.  Move up to grandparent class?
  showPanel: function (device) {
    device.panel = !device.panel;
    this.forceUpdate();
  },

  selectDevice: function (deviceIndex, itemIndex) {
    Dispatcher.emit('device:select', deviceIndex, itemIndex);
    this.showPanel(this.props.devices[deviceIndex]);
  },

  itemForDevice: function (deviceIndex, item, itemIndex) {
    return <div className="dropdownItem" onClick={ this.selectDevice.bind(this, deviceIndex, itemIndex) }>{item}</div>
  },

  viewForDevice: function (device, index) {
    var className = 'Device ' + (device.enabled ? 'enabled' : 'disabled');
    var imageName = 'images/device-icon-' + device.type +
                        '.' + (device.typeExt || 'png');
    return <div className={ className } key={ device.name }>
      <img src={ imageName }/>
      <div>{ device.name }</div>
      <Button text={ device.values[device.selected] }
        hasRightChevron="true" style="default"
        showDropdown={ device.panel }
        onClick={ this.showPanel.bind(this, device) }>
        <div>{device.values.map(this.itemForDevice.bind(this, index))}</div>
      </Button>
    </div>;
  },

  render: function() {
    var footer = "";
    var info = "";
    if (this.props.sharing === 'requested') {
      info = <span>This site would like to access:</span>;
      footer = <Footer shareDevices={ this.props.shareDevices } />;
    } else {
      info = <span>This site is currently using these devices:</span>
    }
    return (
      <div className={ "PanelWrapper " + (this.props.isDropdownVisible ? "shown" : "hidden") }>
        <PanelGroup>
          <Panel toggleDropdown={ this.props.toggleDropdown }>
            { info }
            { this.props.devices.map(this.viewForDevice) }
            {footer}
          </Panel>
        </PanelGroup>
      </div>
    )
  }
});