/* var Contacts = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
  },

  render: function() {
    var contacts = this.props.items.map(function(contact) {
        return React.createElement(Contact, {item: contact, key: contact.id});
    });

    return (
      React.createElement('ul', {className: 'contactsList'}, contacts)
    );
  }
}); */

var Contacts = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <div className='contactItem'>
        <img className='contactImage'
           src={'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'}/>
        <div className="contactContent">
          <p className="contactLabel">
            {this.props.item.firstName}
          </p>
          <p className="contactLabel">
            {this.props.item.lastName}
          </p>
          <a className="contactEmail" href={'mailto:' + this.props.item.email}>
            {this.props.item.email}
          </a>
        </div>
      </div>
    );
  }
});
