/** @jsx React.DOM */
BaseStateCorner = require('./BaseStateCorner.jsx');

module.exports = React.createClass({
  render: function() {
    console.log(this.props.data);
    return (
      <div className={ "FullImage " + this.props.data.image }/>
    );
  }
});
