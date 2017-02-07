var React = require('react');

var School = React.createClass({
  render: function(){
    return (
      <div className="school_container">
        <div className="school_stats">
          <h4>{this.props.course}</h4>
          <p>{this.props.name}</p>
          <p>{this.props.start_date} - {this.props.end_date}</p>
        </div>
        <div className="education_blurb">
          <p>{this.props.tech}</p>
        </div>
      </div>
    );
  }
});

module.exports= School;
