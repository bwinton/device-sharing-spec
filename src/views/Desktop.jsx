/** @jsx React.DOM */
var SharingDoorhanger = require('./SharingDoorhanger.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      slug: 'new-doorhanger',
      view: SharingDoorhanger,
      data: {
        sharing: 'requested',
        image: 'new-doorhanger'
      }
    };
  },
  render: function() {
    return (
      <div>
        <div className="FullImage full-screen" title={this.props.title}>
          <SharingIndicator
            sharing="requested"
            isSharingVisible="true"
            toggleDropdown={this.toggleDropdown}/>
          <SharingDoorhanger data={this.state.data}
            name={this.state.name} slug={this.state.slug} />
        </div>
      </div>
    );
  }
});
