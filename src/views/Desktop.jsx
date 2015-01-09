/** @jsx React.DOM */
var Button = require('./Button.jsx');
var Dispatcher = require('../utils/Dispatcher');
var GlobalSharing = require('./GlobalSharing.jsx');
var UrlbarSharing = require('./UrlbarSharing.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    var devices = [
      {name: 'Camera', type: 'camera', enabled: false,
       values: ['Don’t share my camera', 'Facetime HD Camera', 'External Camera'],
       selected: 1},
      {name: 'Audio', type: 'mic', typeExt: 'gif', enabled: false,
       values: ['Don’t share my microphone', 'Built-in Microphone', 'External Microphone'],
       selected: 1}
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

  enableDevice: function (deviceIndex, itemIndex) {
    this.state.devices[deviceIndex].enabled = !this.state.devices[deviceIndex].enabled;
    this.setState(this.state);
  },

  requestSharing: function() {
    this.setState({
      sharing: 'requested',
      isSharingVisible: !this.state.isSharingVisible,
      isUrlbarDropdownVisible: !this.state.isSharingVisible,
      isGlobalDropdownVisible: false
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
    this.setState({
      sharing: 'enabled',
      isUrlbarDropdownVisible: false,
      isGlobalDropdownVisible: false
    });
  },

  componentWillMount: function(){
    this.listeners = {
      'device:select': this.selectDevice,
      'device:enable': this.enableDevice
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
    if (this.state.isSharingVisible) {
      requestText = "Stop sharing";
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
          <Button text={ requestText } style="default" id="requestSharing"
            onClick={ this.requestSharing }/>
        </div>
      </div>
    );
  }
});
