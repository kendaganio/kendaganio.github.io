import React from "react"
import g from "glamorous"
import Link from "gatsby-link"

export default ({ data }) => {
  return <div>
    <g.H1>Hello! They call me Ken.</g.H1>

    <p>
      I am a software developer with a penchant for experimentation. I have walked my way through most of the web stack
      and find myself enjoying every bit of it. Currently, I am
      helping <a target="_blank" href="https://www.launchpadrecruits.com">LaunchPad Recruits</a> create
      video interviewing software.
    </p>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <p>I like to write, but I'm not very diligent about it. You can see some of my posts <Link to="/posts">here.</Link></p>

  </div>
};
