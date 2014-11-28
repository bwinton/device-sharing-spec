/** @jsx React.DOM */
var GlobalSharing = require('./GlobalSharing.jsx');
var UrlbarSharing = require('./UrlbarSharing.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      sharing: 'requested',
      isSharingVisible: false,
      isUrlbarDropdownVisible: false,
      isGlobalDropdownVisible: false
    };
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

  render: function() {
    return (
      <div>
        <div className="FullImage full-screen">
          <GlobalSharing
            sharing={ this.state.sharing }
            isSharingVisible={ this.state.isSharingVisible }
            isDropdownVisible={ this.state.isGlobalDropdownVisible }
            requestSharing={ this.requestSharing }
            toggleDropdown={ this.toggleGlobalDropdown }
            shareDevices={ this.shareDevices } />
          <UrlbarSharing
            sharing={ this.state.sharing }
            isSharingVisible={ this.state.isSharingVisible }
            isDropdownVisible={ this.state.isUrlbarDropdownVisible }
            requestSharing={ this.requestSharing }
            toggleDropdown={ this.toggleUrlbarDropdown }
            shareDevices={ this.shareDevices } />
        </div>
      </div>
    );
  }
});
