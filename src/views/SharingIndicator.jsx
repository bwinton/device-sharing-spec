/** @jsx React.DOM */
module.exports = React.createClass({
  render: function() {
    return (
      <div className={"sharing " +
        this.props.sharing + (this.props.isSharingVisible ? " shown" : " hidden")}
        onClick={this.props.toggleDropdown}></div>
    );
  }
});
