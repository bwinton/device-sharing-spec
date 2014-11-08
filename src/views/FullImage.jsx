/** @jsx React.DOM */
module.exports = React.createClass({
  render: function() {
    return (
      <div className={ "FullImage " + this.props.data.image } title={this.props.title} />
    );
  }
});
