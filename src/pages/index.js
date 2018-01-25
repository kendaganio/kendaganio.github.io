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
      video interviewing software. To learn more of what I've done in the past you can do so <Link to="/cv">here</Link>.
    </p>

    <p>
      Most of what I do revolves around <strong>Ruby</strong> and <strong>Javascript</strong>, but that doesn't mean I am less open to other technology stacks.
      Nowadays I spend most of my time doing front-end development, mostly with <strong>React</strong> and it's ecosystem.
    </p>

    <p>
      Writing is my first love, but I wish I'm more diligent about it.
      You can see some of my tech-related write ups <Link to="/posts">here</Link>;
      or if food and travel is what you fancy,
      I also contribute to the <a target="_blank" href="https://gastrotravelers.com">gastrotravelers</a> blog.
    </p>

    <p>
      If you want to reach out for anything, you can find me in the interwebs at the handle <strong>@kendaganio</strong>,
      or shoot me an e-mail at <a href="mailto:hi@kendaganio.com">hi@kendaganio.com</a>
    </p>

  </div>
};
