var React = require('react');

var Footer = React.createClass({
  render: function(){
    return (
      <div className="footer_container">
        <p>&#169; <a href="http://www.jaimegunther.com">jaimegunther.com</a> ~ Made just for you using React.js and Flexbox.</p>
      </div>
    );
  }
});

module.exports=Footer;
