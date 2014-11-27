/** @jsx React.DOM */
Button = require('./Button.jsx');
SharingIndicator = require('./SharingIndicator.jsx');

module.exports = React.createClass({
  getDefaultProps: function(){
    return {
      name: 'Base State',
      children: []
    }
  },
  getInitialState: function() {
    return {
      isDropdownVisible: this.props.isDropdownVisible || false,
      isSharingVisible: this.props.isSharingVisible || false
    };
  },
  requestSharing: function() {
    this.setState({
      isSharingVisible: !this.state.isSharingVisible,
      isDropdownVisible: !this.state.isSharingVisible ? this.state.isDropdownVisible : false
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
        <div className="Toolbar"><SharingIndicator
          sharing={this.props.sharing}
          isSharingVisible={this.state.isSharingVisible}
          toggleDropdown={this.toggleDropdown}/><div className="end"></div></div>
        <div className={"PanelWrapper " + (this.state.isDropdownVisible ? "shown" : "hidden")}>
          { this.props.children }
        </div>
        <Button text="Request sharing" style="default"
          onClick={this.requestSharing}/>
      </div>
    )
  }
});
