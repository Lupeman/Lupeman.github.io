var React = require('react');

var Project = React.createClass({
  render: function(){
    return (
      <div className="project_container">
        <div className="project_stats">
          <h4>{this.props.title}</h4>
          <p className="project_blurb">{this.props.description}</p>
          <a href={this.props.project_url}><img className="project_image" src={this.props.image} alt="project_image" /></a>
        </div>
        <p className="project_tech"><span>Technologies used: </span>{this.props.technologies}</p>
      </div>
    );
  }
});

module.exports=Project;
