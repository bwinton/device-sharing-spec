/** @jsx React.DOM */
BaseState = require('./BaseState.jsx');

module.exports = React.createClass({
  render: function() {
    console.log(this.props.data);
    return (
      <BaseState name={ this.props.name } index={ this.props.index } sharing={ this.props.data.sharing } >
        <div className={ "FullImage " + this.props.data.image }/>
      </BaseState>
    );
  }
});
