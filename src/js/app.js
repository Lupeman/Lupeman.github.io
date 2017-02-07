var React = require('react');
var Contact_details = require('./Contact_details');
var Name_header = require('./Name_header');
var About_me = require('./About_me');
var Work_experience = require('./Work_experience');
var Line = require('./Line');
var Education = require('./Education');
var Projects = require('./Projects');
var Footer = require('./Footer');

var App = React.createClass({
  render: function(){
    return (
      <div className="main_container">
        <Contact_details />
        <Name_header />
        <About_me />
        <Work_experience />
        <Line />
        <Education />
        <Projects />
        <Footer />
      </div>
    );
  }
});


module.exports = App;
