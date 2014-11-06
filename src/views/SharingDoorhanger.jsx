/** @jsx React.DOM */
BaseState = require('./BaseState.jsx');
Footer = require('./Footer.jsx');
FullImage = require('./FullImage.jsx');
Panel = require('./Panel.jsx');
PanelGroup = require('./PanelGroup.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <BaseState name={ this.props.name } sharing="requested" >
        <PanelGroup>
          <Panel items={ this.props.items }>
            <FullImage data={{
              "image": "images/new-doorhanger.png",
              "width": "348px",
              "height": "166px"
            }} />
            <Footer></Footer>
          </Panel>
        </PanelGroup>
      </BaseState>
    )
  }
});