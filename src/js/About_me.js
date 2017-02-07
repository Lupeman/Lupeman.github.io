var React = require('react');
var Personal_statement = require('./Personal_statement');


var About_me = React.createClass({
  render: function(){
    return (
        <div className="about_me_container">
          <Personal_statement />
        </div>
    );
  }
});

module.exports = About_me;
