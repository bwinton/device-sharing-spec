/** @jsx React.DOM */
var Button = require('./Button.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div className={"Panel " + (this.props.extraClass || "")}>
        <div className="title">
          <span>mozilla.org</span>
          <Button style="minimal" icon="times"
            onClick={this.props.toggleDropdown}/>
        </div>
        { this.props.children }
      </div>
    )
  }
});
