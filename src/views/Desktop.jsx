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
      isSharingVisible: !this.state.isSharingVisible,
      isUrlbarDropdownVisible: !this.state.isSharingVisible ? this.state.isUrlbarDropdownVisible : false,
      isGlobalDropdownVisible: !this.state.isSharingVisible ? this.state.isGlobalDropdownVisible : false
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
  render: function() {
    console.log("Rendering", this.state);
    return (
      <div>
        <div className="FullImage full-screen" title={this.props.title}>
          <GlobalSharing
            sharing={ this.state.sharing }
            isSharingVisible={ this.state.isSharingVisible }
            isDropdownVisible={ this.state.isGlobalDropdownVisible }
            requestSharing={ this.requestSharing }
            toggleDropdown={ this.toggleGlobalDropdown } />
          <UrlbarSharing
            sharing={ this.state.sharing }
            isSharingVisible={ this.state.isSharingVisible }
            isDropdownVisible={ this.state.isUrlbarDropdownVisible }
            requestSharing={ this.requestSharing }
            toggleDropdown={ this.toggleUrlbarDropdown } />
        </div>
      </div>
    );
  }
});
