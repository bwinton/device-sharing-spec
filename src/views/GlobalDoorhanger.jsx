/** @jsx React.DOM */
BaseState = require('./BaseState.jsx');
Footer = require('./Footer.jsx');
FullImage = require('./FullImage.jsx');
Panel = require('./Panel.jsx');
PanelGroup = require('./PanelGroup.jsx');

module.exports = React.createClass({
  render: function() {
    imageTitles = {
      'global-doorhanger-middle': 'WebEx Videoconferencing'
    }
    var rv = (
      <BaseState name={ this.props.name } index={ this.props.index } sharing={ this.props.data.sharing } >
        <PanelGroup>
          <Panel items={ this.props.items }>
            {this.props.data.images.map(function(image) {
              return <FullImage data={{'image': image}}  title={imageTitles[image]}/>;
            })}
          </Panel>
        </PanelGroup>
      </BaseState>
    );
    return rv;
  }
});