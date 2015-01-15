/** @jsx React.DOM */
var Button = require('./Button.jsx');
var Dispatcher = require('../utils/Dispatcher');
var GlobalSharing = require('./GlobalSharing.jsx');
var UrlbarSharing = require('./UrlbarSharing.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    // status: "none", "requested", "enabled", "muted" ?
    var devices = [
      {name: 'Camera', type: 'camera', status: "none",
       values: ['Don’t share my camera', 'Facetime HD Camera', 'External Camera'],
       selected: 1},
      {name: 'Audio', type: 'microphone', typeExt: 'gif', status: "none",
       values: ['Don’t share my microphone', 'Built-in Microphone', 'External Microphone'],
       selected: 1},
     {name: 'Screen', type: 'screen', status: "none",
      values: ['Don’t share my screen', 'Entire Screen', 'Firefox'],
      selected: -1}
    ]

    return {
      sharing: 'requested',
      isSharingVisible: false,
      isUrlbarDropdownVisible: false,
      isGlobalDropdownVisible: false,
      devices: devices
    };
  },

  selectDevice: function (deviceIndex, itemIndex) {
    this.state.devices[deviceIndex].selected = itemIndex;
    this.setState(this.state);
  },

  muteDevice: function (deviceIndex, itemIndex) {
    var status = this.state.devices[deviceIndex].status;
    if (status === 'enabled') {
      this.state.devices[deviceIndex].status = 'muted';
    } else if (status === 'muted') {
      this.state.devices[deviceIndex].status = 'enabled';
    }
    this.setState(this.state);
  },

  requestSharing: function() {
    if (!this.state.isSharingVisible) {
      this.state.devices[0].status = "requested";
      this.state.devices[1].status = "requested";
      this.state.devices[2].status = "none";
    } else {
      this.state.devices[2].status = "requested";
      this.state.devices[2].selected = 1;
    }
    this.setState({
      sharing: 'requested',
      isSharingVisible: true,
      // isUrlbarDropdownVisible: !this.state.isSharingVisible,
      isGlobalDropdownVisible: false,
      devices: this.state.devices
    });
  },
  stopSharing: function() {
    this.state.devices.forEach(function (device) {
      device.status = "none";
    });
    this.setState({
      sharing: 'requested',
      isSharingVisible: false,
      isUrlbarDropdownVisible: false,
      isGlobalDropdownVisible: false,
      devices: this.state.devices
    });
  },

  toggleGlobalDropdown: function(e) {
    var globalVisible = !this.state.isGlobalDropdownVisible;
    var urlbarVisible = globalVisible ? false : this.state.isUrlbarDropdownVisible;
    this.setState({
      isGlobalDropdownVisible: globalVisible,
      isUrlbarDropdownVisible: urlbarVisible
    });
  },
  toggleUrlbarDropdown: function(e) {
    var urlbarVisible = !this.state.isUrlbarDropdownVisible;
    var globalVisible = urlbarVisible ? false : this.state.isGlobalDropdownVisible;
    this.setState({
      isUrlbarDropdownVisible: urlbarVisible,
      isGlobalDropdownVisible: globalVisible
    });
  },
  shareDevices: function(e) {
    var urlbarVisible = !this.state.isUrlbarDropdownVisible;
    var globalVisible = urlbarVisible ? false : this.state.isGlobalDropdownVisible;
    var devices = this.state.devices;
    devices.forEach(function (device) {
      if (device.selected > 0) {
        device.status = "enabled";
      }
    });
    this.setState({
      sharing: 'enabled',
      isUrlbarDropdownVisible: false,
      isGlobalDropdownVisible: false,
      devices: devices
    });
  },

  componentWillMount: function(){
    this.listeners = {
      'device:select': this.selectDevice,
      'device:mute': this.muteDevice
    };

    for (var event in this.listeners) {
      Dispatcher.on(event, this.listeners[event]);
    }
  },
  componentWillUnmount: function(){
    for (var event in this.listeners) {
      Dispatcher.off(event, this.listeners[event]);
    }
  },

  render: function() {
    var requestText = "Request sharing";
    var stopSharingButton = "";
    if (this.state.isSharingVisible) {
      requestText = "Request more sharing";
      stopSharingButton = <Button text="Stop sharing" style="default" id="stopSharing" onClick={ this.stopSharing }/>
    }
    return (
      <div>
        <div className="FullImage full-screen">
          <GlobalSharing
            sharing={ this.state.sharing }
            isSharingVisible={ this.state.sharing == 'enabled' }
            isDropdownVisible={ this.state.isGlobalDropdownVisible }
            toggleDropdown={ this.toggleGlobalDropdown }
            devices={ this.state.devices }
            shareDevices={ this.shareDevices } />
          <UrlbarSharing
            sharing={ this.state.sharing }
            isSharingVisible={ this.state.isSharingVisible }
            isDropdownVisible={ this.state.isUrlbarDropdownVisible }
            toggleDropdown={ this.toggleUrlbarDropdown }
            devices={ this.state.devices }
            shareDevices={ this.shareDevices } />
          <div id="shareButtons">
            <Button text={ requestText } style="default" id="requestSharing"
              onClick={ this.requestSharing }/>
            { stopSharingButton }
          </div>
        </div>
      </div>
    );
  }
});
