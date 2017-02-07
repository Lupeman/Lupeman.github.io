var React = require('react');

var Job = React.createClass({
  render: function(){
    return (
      <div className="job_container">
        <img className="company_logo" src={this.props.image} alt="company_logo" />
        <div className="job_stats">
          <h4>{this.props.company}</h4>
          <p>{this.props.position}</p>
          <p>{this.props.start_date} - {this.props.end_date}</p>
        </div>
        <div className="job_blurb">
          <p>{this.props.about}</p>
        </div>
      </div>
    );
  }
});

module.exports = Job;
