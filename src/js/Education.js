var React = require('react');
var School = require('./School');


var Education = React.createClass({
  getInitialState: function(){
    return {
      data: [
        {
          'course': 'Web Development Immersive',
          'name': 'General Assembly Melbourne',
          'start_date': 'Nov 2016',
          'end_date': 'Feb 2017',
          'tech': 'HTML5,CSS3/SASS, JavaScript,Ruby, Ruby on Rails, React/Redux, jQuery, Backbone.js, Node.js/Express.js,Sinatra, PostgreSQL, Git, Heroku, NPM, Gulp, Browserify, Bootstrap, Wordpress and Magento.'
        },
        {
          'course': 'HBSc Zoology',
          'name': 'University of Guelph - CANADA',
          'start_date': 'Sept 1999',
          'end_date': 'Apr 2003',
          'tech': ''
        }
      ]
    }
  },

  render: function(){
    return (
      <div className="education">
        <h3>Education</h3>
        <div className="education_container">
          {this.state.data.map(function(school) {
            return <School course={school.course} name={school.name} start_date={school.start_date} end_date={school.end_date} tech={school.tech} />
          })}
        </div>
        <h3 className="relevant-skills">Relevant Skills</h3>
        <img className="scale-skills" src="images/skills-graph.png" alt="image of skill levels" />
      </div>
    );
  }
});




module.exports = Education;
