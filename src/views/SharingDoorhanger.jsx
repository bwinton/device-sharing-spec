/** @jsx React.DOM */
Footer = require('./Footer.jsx');
FullImage = require('./FullImage.jsx');
Panel = require('./Panel.jsx');
PanelGroup = require('./PanelGroup.jsx');

module.exports = React.createClass({
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
            <FullImage image={ this.props.image } />
            {footer}
          </Panel>
        </PanelGroup>
      </div>
    )
  }
});