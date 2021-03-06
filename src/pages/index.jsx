import React from "react";
import "scss/style.scss";
import { Fade, Flip, Slide, Zoom } from "react-reveal";
import { Link } from "react-scroll";
import { Helmet } from "react-helmet";

import "line-awesome/dist/font-awesome-line-awesome/css/all.min.css";


import arrowSolidDown from "../svgs/arrow-solid-down.svg";

const particleParams = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: false,
        value_area: 800,
      },
    },
    color: {
      value: "#2baeca",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#1cc2f5",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "top",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

const SkillBlock = (props) => {
  const { imageSrc, title, skills } = props.skill;
  return (
    <div>
        <h2 className="text-center">{title}</h2>
        <div>
          {skills.map((skill, index) => {
            return <p key={index}>{skill}</p>;
          })}
        </div>
        </div>
  );
};

const HeaderBar = () => {
  return <div className="header-bar" />;
};

const ExperienceBlock = (props) => {
  const { title, date, info } = props.experience;
  return (
    <div className="flex-d-row experience-block text-center text-md-left">
      <h2 className="flex-100 title">{title}</h2>
      <h4 className="flex-100 date">{date}</h4>
      <div className="flex-100">{info}</div>
    </div>
  );
};

const Index = () => {
  const skills = [
    {
      title: "Frontend Web Development",
      skills: ["ReactJS", "HTML5", "CSS3"],
    },
    {
      title: "Backend Web Development",
      skills: ["NodeJs", "ExpressJs", "NestJS"],
    },
   
   
  ];
  const experiences = [
    {
      title: "Full Stack Developer - Peliel Software",
      date: "JULY 2020 - PRESENT",
      info: (
        <ul className="experience-job-info">
          <li>
            Developed and lead multiple projects, using React.JS for frontend
            and NestJS for backend
          </li>
          <li>Responsible for choosing which stack and technology to use</li>
        </ul>
      ),
    },
    {
      title: "Solid-ICT IOS Developer (Intern)",
      date: "Jul 2019 ??? Sep 2019",
      info: (
        <ul className="experience-job-info">
          <li>
          I've developed a small chat program that allows in-house
          communication.
          I used Firebase as the Database,RESTful services,JSON ,UI
          design.
          I've developed many small programs which are weather
          app, Stock market app,quiz app etc..
          </li>
        </ul>
      ),
    },
  ];

  const navbarAnchorRef = React.useRef(null);

  const [showNavbar, setShowNavbar] = React.useState(false);
  const [expandNavbar, setExpandNavbar] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", function() {
      const windowTop = this.scrollY;
      const anchorElem = navbarAnchorRef.current;
      if (anchorElem) {
        const anchorTop = anchorElem.offsetTop;
        const shouldShowNavbar = windowTop >= anchorTop;
        setShowNavbar(shouldShowNavbar);
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className="main-content">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bu??ra Tun??er's Website</title>
        <meta name="description" content="Sefer Erg??n's Personal Website" />
        <meta
          name="keywords"
          content="Sefer,Erg??n,JavaScript,Developer,Web,Software,Engineer,Nodejs"
        />
        <meta name="author" content="Sefer Erg??n" />
      </Helmet>
      {/*<Particles params={particleParams} className="particles-container"/>*/}

      <Fade top when={showNavbar}>
        <nav className="navbar">
          <Slide top cascade when={showNavbar}>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setExpandNavbar(!expandNavbar)}
            >
              <span className="navbar-toggler-icon" />
            </button>
            <ul className={`navbar-nav ${expandNavbar ? "expanded" : ""}`}>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="aboutMe"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="experiences"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  Experiences
                </Link>
              </li>
            </ul>
          </Slide>
        </nav>
      </Fade>

      <section id="home">
        <div className="flex-d-row items-center initial-header content-center">
          <div className="flex-100 flex-md-50 initial-header-text-container">
            <h3 className="initial-header-text">
              Hi, I'm{" "}
              <span className="initial-header-text-name">Bu??ra Tun??er</span>{" "}
              <br />
              I'm a full-stack web developer
            </h3>
          </div>
          <div className="flex-md-50 flex-100 overflow-hidden">
            <div className="flex-column flex-column justify-content-center initial-header-link-container">
              <a
                href="https://www.linkedin.com/in/bugratuncer/"
                target="_blank"
                className="initial-header-link"
              >
                <i className="fab fa-linkedin" />
                <span>https://www.linkedin.com/in/bugratuncer/</span>
              </a>
              <a
                href="https://github.com/bugratuncer"
                target="_blank"
                className="initial-header-link"
              >
                <i className="fab fa-github" />
                <span>https://github.com/bugratuncer</span>
              </a>
            </div>
          </div>
          <div className="flex-100 text-center m-t-5">
            <Link
              to="aboutMe"
              smooth={true}
              duration={500}
              className="about-me btn"
            >
              <span className="flex-d items-center">
                About Me <img src={arrowSolidDown} />
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section
        className="flex-d-column about-me-block flex-center"
        id="aboutMe"
        ref={navbarAnchorRef}
      >
        <Slide left duration={500}>
          <Fade>
            <h1 className="header-title">About Me</h1>
          </Fade>
        </Slide>
        <Slide left delay={50}>
          <Fade>
            <HeaderBar />
          </Fade>
        </Slide>

        <div className="flex-d-row flex-center">
        
          <div className="flex-100 flex-md-50">
            <Slide right>
              <p className="info">
                I'm a software developer the graduated from ??ukurova University.Through
                years I have worked on different projects in several fields.
              </p>
            </Slide>
          </div>
        </div>
      </section>

      <section className="flex-d-column flex-center" id="skills">
        <Fade>
          <div>
            <Slide right>
              <h1 className="header-title">Skills</h1>
            </Slide>
            <Slide right>
              <h3 className="header-subtitle">
                Languages and Frameworks that I have used and have experince
                with
              </h3>
            </Slide>
            <Slide right>
              <HeaderBar />
            </Slide>
          </div>
        </Fade>

        {skills.map((skill, index) => {
          return (
            <Zoom key={index}>
              <SkillBlock skill={skill} />
            </Zoom>
          );
        })}
      </section>
      <section className="flex-d-column flex-center" id="experiences">
        <Fade left>
          <div>
            <Slide left>
              <h2 className="header-title">Experiences</h2>
            </Slide>
            <Slide left delay={50}>
              <HeaderBar />
            </Slide>
          </div>
        </Fade>
        {experiences.map((experience, index) => {
          return (
            <Zoom key={index}>
              <ExperienceBlock experience={experience} />
            </Zoom>
          );
        })}
      </section>
    </div>
  );
};

export default Index;
