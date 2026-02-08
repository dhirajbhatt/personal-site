import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description="Dhiraj Bhatt's personal website."
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Dhiraj Bhatt</Link>
          </h2>
          <p>#84keysandlife.</p>
        </div>
      </header>
      <section>
        <p>
          Hi, I’m Dhiraj. I enjoy architecting and building systems that operate in the real world.
        </p>

        <p>
          My work involves building and leading engineering teams across geographies, often where
          software meets physical operations, customers, and data that people rely on every day. I
          have worked across large enterprises and startups, and I care deeply about calm
          execution, quality, and platforms that continue to work long after the excitement of
          launch.
        </p>

        <p>
          I am drawn to projects with real impact, where technology improves everyday life for
          people. I am especially interested in how data and AI can support better decision making,
          not by adding complexity, but by creating clarity and trust in systems that matter.
        </p>

        <p>
          If you are curious, you can read a little more <Link to="/about">about me</Link>, or
          browse a few selected <Link to="/projects">projects</Link> and experiments.
        </p>

        <p>
          Best way to reach me: dhirajbhatt@live.com.
        </p>

      </section>
    </article>
  </Main>
);

export default Index;
