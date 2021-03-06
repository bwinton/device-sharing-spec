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

  muteDevice: function (deviceIndex) {
    Dispatcher.emit('device:mute', deviceIndex);
  },

  onItemOver: function (deviceIndex, itemIndex) {
    var device = this.props.devices[deviceIndex]
    if (device.type === 'screen') {
      Dispatcher.emit('highlight:set', itemIndex);
    }
  },
  onItemOut: function (deviceIndex, itemIndex) {
    var device = this.props.devices[deviceIndex]
    if (device.type === 'screen') {
      Dispatcher.emit('highlight:clear', itemIndex);
    }
  },

  itemForDevice: function (deviceIndex, item, itemIndex) {
    return <div className="dropdownItem"
      onMouseOver={ this.onItemOver.bind(this, deviceIndex, itemIndex) }
      onMouseOut={ this.onItemOut.bind(this, deviceIndex, itemIndex) }
      onClick={ this.selectDevice.bind(this, deviceIndex, itemIndex) }>{item}</div>
  },

  getDeviceClass: function (device) {
    return 'Device ' + device.status;
  },

  requestForDevice: function (device, index) {
    var imageName = 'images/device-icon-' + device.type +
                        '.' + (device.typeExt || 'png');
    if (device.status != 'requested') {
      return "";
    }
    return <div className={ this.getDeviceClass(device) } key={ device.name }>
      <div className="group">{ device.name }</div>
      <img src={ imageName }/>
      <Button text={ device.values[device.selected] }
        hasRightChevron="true" style="default"
        showDropdown={ device.panel }
        onClick={ this.showPanel.bind(this, device) }>
        <div>{device.values.map(this.itemForDevice.bind(this, index))}</div>
      </Button>
    </div>;
  },

  shareForDevice: function (device, index) {
    var imageName = 'images/device-icon-' + device.type +
                        '.' + (device.typeExt || 'png');
    return <div className={ this.getDeviceClass(device) } key={ device.name }>
      <img src={ imageName }/>
      <div className="name">{ device.values[device.selected] }</div>
      <Button text={ (device.status === "muted") ? "Unmute" : "Mute" }
        hasRightChevron="true" style="default"
        // showDropdown={ device.panel }
        onClick={ this.muteDevice.bind(this, index) }
        >
        // <div>{device.values.map(this.itemForDevice.bind(this, index))}</div>
      </Button>
    </div>;
  },

  render: function() {
    var info = "";
    var devices = "";
    var footer = "";
    if (this.props.sharing === 'requested') {
      info = <span>This site would like to access:</span>;
      devices = this.props.devices.map(this.requestForDevice);
      footer = <Footer shareDevices={ this.props.shareDevices } />;
    } else {
      info = <span>This site is currently using these devices:</span>
      devices = this.props.devices.map(this.shareForDevice);
    }
    return (
      <div className={ "PanelWrapper " + (this.props.isDropdownVisible ? "shown" : "hidden") }>
        <PanelGroup>
          <Panel toggleDropdown={ this.props.toggleDropdown }>
            { info }
            { devices }
            { footer }
          </Panel>
        </PanelGroup>
      </div>
    )
  }
});