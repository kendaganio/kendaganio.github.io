import React from "react"
import Helmet from "react-helmet"

import './cv.css'

export default ({data}) => (
  <div className="columns cv-wrapper">
    <Helmet title={`${data.site.siteMetadata.title} | Curriculum Vitae`} />

    <div className="column is-one-third left">
      <h1 className="ma-name-ken">
        {data.site.siteMetadata.title}<br/>
      </h1>
      <div className="contact">
        <a href="mailto:hi@kendaganio.com">hi@kendaganio.com</a><br/>
        (+63) 936-952-0093<br/>
        @kendaganio
      </div>
      <br/>

      <div className="education">
        <h2>
          <span className="colored">Education</span>
        </h2>
        FEU - East Asia College<br/>BS Computer Science<br/>2009-2012
      </div>
      <br/>

      <div className="programming">
        <h2>
          <span className="colored">Programming</span>
        </h2>
        Javascript | React/Native | Redux
        <br/>Ruby | Ruby on Rails | Sinatra
        <br/>iOS | Swift | Objective-C
        <br/>NodeJS | Express
        <br/>
      </div>
      <br/>

      <div className="devops">
        <h2><span className="colored">Devops</span></h2>
        Linux | AWS | Heroku
        <br/>Docker | Compose
        <br/>Apache | Nginx
      </div>
      <br/>

      <div className="storage">
        <h2><span className="colored">Storage</span></h2>
        MySQL | Postgres
        <br/>MongoDB | Redis
      </div>
      <br/>

      <div className="certifications">
        <h2><span className="colored">Certifications</span></h2>
        <em>IBM Certified Solutions Advisor</em><br/>Cloud Computing Architecture v1
      </div>
    </div>

    <div className="column is-two-thirds">
      <div id="right">
        <br/>

        <div className="experience">
          <h2><span className="colored">Professional Experience</span></h2>
          <strong>Software Engineer, LaunchPad Recruits </strong> | <em> Feb 2016 - Present</em><br />
          <p>Part of the product team where we develop various features and integrations for the platform. Headed a campaign to organize Javascript dependency management and the go-to point person for all things front-end.</p>
          <strong>Software Engineer, SourcePad In'tl Inc. </strong> | <em> October 2013 - Jan 2016</em><br />
          <p>Co-authored, along with one other dev, next24.io - a task management software for teams using the MEAN stack. Worked closely with clients developing and maintaing Ruby on Rails projects including: 1000museums.com, commutyble.com, and various others. Did R&amp;D work for internal projects using bleeding edge technologies.</p>
          <strong>Software Consultant, Infoshift, Inc. </strong> | <em> July 2013 - October 2013</em><br />
          <p>Responsible for building an e-commerce merchant services portal offering SMS, Prepaid Credit Reloads, Bills Payment using various third party APIs, coded in Ruby on Rails and Nodejs.</p>
          <strong>Software Engineer, Indinero.com </strong> | <em> May 2013 - July 2013</em><br />
          <p>Worked on indinero.com product, an accounting, tax and payroll software in the browser utilizing Ruby on Rails and Backbone.js</p>
          <strong>Software Engineer, Freelancer.com </strong> | <em> October 2012 - April 2013</em><br />
          <p>Worked on the freelancer.com stack using various technologies, including PHP, Backbone.js, RabbitMQ, Redis, Node and Python</p>
        </div>

        <div className="projects">
          <h2><span className="colored">Projects</span></h2>

          <strong>jkbx.</strong> | Status: Active | <em> Q3 2015 - Present </em><br />
          <p>
            Collaborative YouTube playlists for parties or teams. Frontend made with Angular.js and Firebase, ran and built via Gulp. iOS app made with Swift.<br/>
            <a href="http://kendaganio.github.io/jkbx">http://kendaganio.com/jkbx</a>
          </p>

          <strong>NDFY.me </strong> | Status: Defunct | <em> December 2012 - October 2013</em><br />
          <p>
            An indie music hub using Ruby on Rails where users can stream and purchase original filipino indie music.<br />
            <a href="http://ndfy.me">http://ndfy.me</a>
          </p>
        </div>

        <div className="achievements">
          <h2><span className="colored">Achievements</span></h2>
          <strong>2nd Place</strong> | <em> Webgeek Devcup 2012</em><br />
          <strong>Winner</strong> | <em> NetworkLabs 4G25B: Code Jam 2011 </em><br />
          <strong>Winner</strong> | <em> ITE Cup: Programming 2010 </em><br />
          <strong>Competitor </strong> | <em> World Robot Olympiad 2005</em><br />
          <strong>Winner</strong> | <em> Philippine Robot Olympiad 2005</em><br />
          <br />
        </div>
        <div className="seminars">
          <h2><span className="colored">Public Speaking</span></h2>
          <strong><em>Rails for Designers</em><br /></strong>
          Philippine Web Designers Organization, 17 July 2013<br />
          <strong><em>Panelist, Go Negosyo Technopreneurship Summit</em><br /></strong>
          SMX Convention Center, 21 January 2013<br />
          <strong><em>History of Open Source and Hacker Culture</em><br /></strong>
          University of Sto. Tomas, 22 November 2012<br />
          <strong><em>State of the Philippine Startup Scene</em><br /></strong>
          NIMBUS Conference, Ateneo de Manila University, 12 November 2012<br />
        </div>
      </div>
    </div>

  </div>
)

export const query = graphql `
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
