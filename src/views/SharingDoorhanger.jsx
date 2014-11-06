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
      <BaseState name={ this.props.name } sharing={ this.props.data.sharing } >
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