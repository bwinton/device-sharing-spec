/** @jsx React.DOM */
module.exports = React.createClass({
  getDefaultProps: function(){
    return {
      name: 'Base State',
      children: [],
      index: 1
    }
  },
  getInitialState: function() {
    return {
      isDropdownVisible: this.props.isDropdownVisible,
      isSharingVisible: this.props.isSharingVisible
    };
  },
  requestSharing: function() {
    this.setState({
      isSharingVisible: !this.state.isSharingVisible
    });
  },
  toggleDropdown: function() {
    this.setState({
      isDropdownVisible: !this.state.isDropdownVisible
    });
  },
  render: function(){
    return (
      <div className="StateWrapper">
        <h3 className="higher"><span className="counter">{ this.props.index + 1 }</span> { this.props.name }</h3>
        <div className="Toolbar"><div className={"sharing " +
          this.props.sharing + (this.state.isSharingVisible ? " shown" : " hidden")}
          onClick={this.toggleDropdown}></div><div className="end"></div></div>
        <div className={"PanelWrapper " + (this.state.isDropdownVisible ? "shown" : "hidden")}>
          { this.props.children }
        </div>
        <Button text="Request sharing" style="default"
          onClick={this.requestSharing}/>
      </div>
    )
  }
});
