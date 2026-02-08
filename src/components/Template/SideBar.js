import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Dhiraj Bhatt</h2>
        <p>
          <a href="mailto:dhirajbhatt@live.com">dhirajbhatt@live.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>This is my personal space.</p>
      <p>
        I enjoy building things, learning every day, and thinking deeply about
        how people and systems behave. I care about clarity, simplicity, and
        doing work that feels honest.
      </p>
      <p>
        Outside work, I love movies, cricket, snooker, and long conversations
        that wander from philosophy to everyday life.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Dhiraj Bhatt <Link to="/">dhirajbhatt.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
