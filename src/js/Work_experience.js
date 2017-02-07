var React = require('react');
var Job = require('./Job');

var Work_experience = React.createClass({
  getInitialState: function() {
    return {
      data: [
        {
        'company': 'MSD',
        'position': 'Sales Representative',
        'start_date': 'April 2010',
        'end_date': 'Nov 2016',
        'image': 'images/msd-logo.png',
        'about': 'Independently managed a large territory of approximately 300 clients to ensure they were provided with accurate and up-to-date product information. I successfully launched two new products to market, worked with territory teammates to promote, organise and run Webinars, evening meetings and events on various topics within the industry. I am able to engage in technical product discussions and maintain ongoing professional relationships with clients.'
        },
        {
        'company': 'Out & About Dogs',
        'position': 'Owner',
        'start_date': 'June 2007',
        'end_date': 'April 2010',
        'image': 'images/out_and_about_dogs.jpeg',
        'about': 'Upon my arrival to Australia, I decided to create my own opportunity and started a dog walking and pet minding service. Using my previous experience working with animals and attempting to leverage my creativity and people skills to promote it, over the course of 3 years was able to build a sizeable client base of approximately 120.'
        },
        {
        'company': 'Complete Med Communications',
        'position': 'Project Manager',
        'start_date': 'Oct 2005',
        'end_date': 'June 2006',
        'image': 'images/CMC-logo.png',
        'about': 'Aided in the development of nation-wide physician medical education programs. Responsible for event planning, onsite logistics, development of conference materials, invoice reconciliation, summary of events.'
        },
      ]
    }
  },
  render: function(){
    return (
      <div className="work_experience">
        <h3>Work Experience</h3>
        <div className="work_experience_container">
        {this.state.data.map(function(job) {
          return <Job company={job.company} position={job.position} start_date={job.start_date} end_date={job.end_date} image={job.image} about={job.about} />
        })}
        </div>
      </div>
    );
  }
});

module.exports = Work_experience;
