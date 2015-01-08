/** @jsx React.DOM */
Button = require('./Button.jsx');
Footer = require('./Footer.jsx');
Panel = require('./Panel.jsx');
PanelGroup = require('./PanelGroup.jsx');

module.exports = React.createClass({
  // doesn't fire, because we're being hidden.  Move up to grandparent class?
  showPanel: function (device) {
    device.panel = !device.panel;
    this.forceUpdate();
  },

  selectDevice: function (device, index) {
    alert("BW!!!!  " + index + " " + JSON.stringify(device));
    device.selected = index;
  },

  itemForDevice: function (device, item, index) {
    // alert(JSON.stringify(device) + ", " + JSON.stringify(item) + ", " + JSON.stringify(index));
    return <div className="dropdownItem" onClick={ this.selectDevice.bind(this, device, index) }>{item}</div>
  },

  viewForDevice: function (device) {
    var className = 'Device ' + (device.enabled ? 'enabled' : 'disabled');
    var imageName = 'images/device-icon-' + device.type +
                        '.' + (device.typeExt || 'png');
    return <div className={ className }>
      <img src={ imageName }/>
      <div>{ device.name }</div>
      <Button text={ device.values[device.selected] }
        hasRightChevron="true" style="default"
        showDropdown={ device.panel }
        onClick={ this.showPanel.bind(this, device) }>
        <div>{device.values.map(this.itemForDevice.bind(this, device))}</div>
      </Button>
    </div>;
  },

  render: function() {
    var footer = "";
    if (this.props.sharing === 'requested') {
      footer = <Footer shareDevices={ this.props.shareDevices } />;
    }
    console.log("Rendering!!!");
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