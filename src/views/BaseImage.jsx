/** @jsx React.DOM */
BaseState = require('./BaseState.jsx');

module.exports = React.createClass({
  render: function() {
    console.log(this.props.data);
    return (
      <div className="StateWrapper">
        <h3 className="higher"><span className="counter">{ this.props.index + 1 }</span> { this.props.name }</h3>
        <FullImage data={ this.props.data }/>
      </div>
    );
  }
});
