/** @jsx React.DOM */
module.exports = React.createClass({
  render: function() {
    var icon, chevron, dropdown;
    if (this.props.icon) {
      icon = <i className={"fa fa-" + this.props.icon}></i>;
    }
    if (this.props.hasRightChevron) {
      chevron = <span className="chevron"> ▾ </span>;
    }
    if (this.props.children) {
      dropdownClass = "Dropdown " + (this.props.showDropdown ? "show" : "hide");
      dropdown = <div className={ dropdownClass }>
        { this.props.children }
      </div>;
    }
    return (
      <div className="ButtonContainer">
        <div id={this.props.id} onClick={this.props.onClick} className={"Button " + this.props.style }>{ this.props.text }{icon}{chevron}</div>
        { dropdown }
      </div>
    )
  }
});
