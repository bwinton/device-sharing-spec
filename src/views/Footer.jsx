/** @jsx React.DOM */
var Button = require('./Button.jsx');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="Footer">
        <Button text="Share selected devices"
          hasRightChevron style="default"
          onClick={ this.props.shareDevices } />
      </div>
    )
  }
});
