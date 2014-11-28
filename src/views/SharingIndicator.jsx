/** @jsx React.DOM */
module.exports = React.createClass({
  render: function() {
    var sharingClass = "sharing " + this.props.sharing +
      (this.props.isSharingVisible ? " shown" : " hidden");
    return (
      <div id={ this.props.id }
        className={ sharingClass }
        onClick={ this.props.toggleDropdown }></div>
    );
  }
});
