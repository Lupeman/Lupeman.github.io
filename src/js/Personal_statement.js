var React = require('react');

var Personal_statement = React.createClass({
  render: function(){
    return(
      <div className="personal_statement_container">
      <img className="image_me" src="/images/jaime3.jpg" />
        <div className="quote">
          <p>
            “I am an ideas person new to the development world and as such looking for a team to help guide me, in exchange so that I might provide meaningful content.”
          </p>
        </div>
        <div className="body-text">
          <p>
            A graduate of the Web Development Immersive Program, I have recently made the all important leap into pursuing my passion for coding full-time. Throughout my diverse career, I have been able to take from each pursuit a new skill set. I am a confident, inquisitive, kind and determined individual always striving to learn something new and see how it can be applied. My interest in learning is what lead me to coding - as I was looking for another way to challenge myself. It has also taught me that there is always more to know and many experienced people out there, who can help teach, mould and advise.</p>
            <p>I have spoken to crowds, engaged in technical discussions with physicians, lead groups and fostered others, managed a business and created a successful brand. I live my life to the motto of <span>“Why not?”</span> and believe that pragmatism and a sense of adventure can dynamically coexist. My creativity spurs me to constantly be thinking of new ideas and ways to bring them to life.
          </p>
        </div>
      </div>
    );
  }
});

module.exports = Personal_statement;
