/** @jsx React.DOM */
BaseState = require('./BaseState.jsx');
Footer = require('./Footer.jsx');
FullImage = require('./FullImage.jsx');
Panel = require('./Panel.jsx');
PanelGroup = require('./PanelGroup.jsx');

module.exports = React.createClass({
  render: function() {
    var footer = "";
    if (this.props.data.sharing === 'requested') {
      footer = <Footer></Footer>;
    }
    return (
      <BaseState name={ this.props.name } index={ this.props.index }
        sharing={ this.props.data.sharing } isDropdownVisible={ this.props.isDropdownVisible }>
        <PanelGroup>
          <Panel items={ this.props.items }>
            <FullImage data={this.props.data} />
            {footer}
          </Panel>
        </PanelGroup>
      </BaseState>
    )
  }
});