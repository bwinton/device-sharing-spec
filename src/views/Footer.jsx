/** @jsx React.DOM */
var Button = require('./Button.jsx');

module.exports = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  shareClick: function() {
    document.location = "#after-sharing";
  },
  render: function(){
    return (
      <div className="Footer">
        <Button text="Share selected devices" hasRightChevron style="default"
          onClick={this.shareClick}/>
      </div>
    )
  }
})
