var React = require('react');

var Line = React.createClass({
  render: function(){
    return (
      <div className="vertical_line_container">
        <div className="vertical_line"></div>
        <img className="chevron" src="/images/chevron.png" />
      </div>
    );
  }
});

module.exports = Line;
