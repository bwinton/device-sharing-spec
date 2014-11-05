/** @jsx React.DOM */
BaseStateCorner = require('./BaseStateCorner.jsx');

module.exports = React.createClass({
  render: function() {
    console.log(this.props.data);
    return (
      <div className="FullImage"
        style={{
          "background-image": "url(" + this.props.data.image + ")",
          "width": this.props.data.width,
          "height": this.props.data.height
        }}/>
    );
  }
});
