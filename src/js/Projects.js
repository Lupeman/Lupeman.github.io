var React = require('react');
var Project = require('./Project');


var Projects = React.createClass({
  getInitialState: function() {
    return {
      data: [
          {
          'title': 'Memory Game',
          'description': 'Prior to starting the course we were tasked with making a simple memory card game.',
          'url': 'https://github.com/Lupeman/wdi-fundamentals-memorygame',
          'image': 'images/memory_game_project.png',
          'technologies': 'HTML5, CSS, Bootstrap.'
          },
          {
          'title': 'Food Sort',
          'description': 'As an alternative to Tic Tac Toe, I decided to challenge myself and create an app for 4 year old (who I have been starting to teach concepts of coding). I created the Food Sort Game which required the user to drag the correct food item into the appropriate basket. I also performed a data migration.',
          'url': 'https://github.com/Lupeman/what-where-project',
          'image': 'images/food_sort_project.png',
          'technologies': 'HTML5, CSS, JavaScript.'
          },
          {
          'title': 'Mynsta',
          'description': 'Mynsta has the potential to allow users to authenticate with Instagram and then create personalised Google search engines based on those people they follow that have associated blogs. This idea came from being frustrated not being able to search for recipes specifically for those blogs I was interested in.',
          'url': 'https://github.com/Lupeman/mynsta',
          'image': 'images/mynsta_project.png',
          'technologies': 'HTML5, CSS, JavaScript, Ruby, Sinatra, implemented OATH with Instagram.'
          },
          {
          'title': 'Helping Hands',
          'description': 'Helping Hands is an application that aims to connect people and charities online. Charities create a wish list of items that their charity needs and users may filter charities to donate to based on location and cause',
          'url': 'https://github.com/Lupeman/charity_helpCharity',
          'image': 'images/helping_hands.png',
          'technologies': 'HTML5, CSS, SASS, JavaScript, Ruby, Ruby on Rails, Bootstrap, AWS Carrier Wave, Handlebars.Js, Backbone.Js, Git, Trello.'
          },
          {
          'title': 'WDI Conf 2017',
          'description': 'A mock conference website for the WDI class. Users are able to look up conference details, including individual speaker info and purchase tickets. Additionally, a chatbot is able to answer basic information about the conference.',
          'url': 'https://github.com/Lupeman/WDI_Conf',
          'image': 'images/WDI_conf.png',
          'technologies': 'HTML, CSS, SASS, Bootstrap, EventBrite, JavaScript, Node.js, Express.js, Wit.Ai, Socket.io, Git'
        },
        {
        'title': 'Greenfields HR',
        'description': 'A revamp on an actual site made for a freelance client.',
        'url': 'https://www.greenfieldshr.com.au',
        'image': 'images/greenfieldshr.png',
        'technologies': 'Wordpress'
        },
        {
        'title': 'Everybodi',
        'description': 'Commissioned to create an e-commerce site for a freelance client.',
        'url': 'https://www.everybodi.co',
        'image': 'images/everybodi.png',
        'technologies': 'Zoey - a Magento CMS platform'
        }
      ]
    }
  },

  render: function(){
    return (
      <div className="projects">
        <h3>Projects</h3>
        <div className="projects_container">
        {this.state.data.map(function(project) {
          return <Project title={project.title} description={project.description} project_url={project.url} image={project.image} technologies={project.technologies} />
        })}
        </div>
      </div>
    );
  }
});


module.exports = Projects;
