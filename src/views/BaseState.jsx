/** @jsx React.DOM */
module.exports = React.createClass({
  getDefaultProps: function(){
    return {
      name: 'Base State',
      children: [],
      index: 1
    }
  },
  render: function(){
    return (
      <div className="StateWrapper">
        <h3 className="higher"><span className="counter">{ this.props.index + 1 }</span> { this.props.name }</h3>
        <div className="Toolbar"><div className={"sharing " + this.props.sharing}></div><div className="end"></div></div>
        <div className="PanelWrapper">
          { this.props.children }
        </div>
      </div>
    )
  }
});
