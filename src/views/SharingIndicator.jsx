/** @jsx React.DOM */
module.exports = React.createClass({
  viewForDevice: function (device) {
    var deviceClass = "device";
    if (!device.enabled) {
      deviceClass += " requested";
    }

    var imageName = "images/icons/FX_" + device.type;
    if (device.muted) {
      imageName += '-mute';
    }
    imageName += "-16x16.svg"

    return <img src={ imageName } className={ deviceClass } />
  },

  render: function () {
    var sharingClass = "sharing " + this.props.sharing +
      (this.props.isSharingVisible ? " shown" : " hidden");
    return (
      <div id={ this.props.id }
        className={ sharingClass }
        onClick={ this.props.toggleDropdown }>
        { this.props.devices.map(this.viewForDevice) }
      </div>
    );
  }
});
