import { makeStyles } from "@material-ui/core/styles";
import { Container, Paper, Grid, Typography } from "@material-ui/core";
import Link from "next/link";

import Layout from "../components/_Layout";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  contents: {
    display: "flex",
    flexFlow: "column wrap",
  },
  title: {
    margin: theme.spacing(3, 0, 2, 0),
  },
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <Layout title="Projects">
      <Container maxWidth="md">
        <div className={classes.contents}>
          <Typography variant="h3">Xiaoning He</Typography>
          <p>
            Final year undergraduate at Imperial College London. Enthusiastic
            about Computer Science, eager to solve engineering problems and
            further technical knowledge.
          </p>
          <p>
            <b>Technical Skills:</b> Python, C, Java, JavaScript, Haskell,
            React, Git
          </p>
          <Typography variant="h5" className={classes.title}>
            Education
          </Typography>
          <div>
            <Typography>
              <b>
                2019 – Present (Expected Grad: Jun 2023) | Imperial College
                London – Mathematics and Computer Science (MEng)
              </b>
            </Typography>
            <br />
            <b>Notable modules: </b>
            Programming Projects (Operating systems, Compilers, WebApp) –
            86.57%, Algorithms – 87.25%, Software Engineering Design – 85.59%,
            Probability and Statistics – 89.30%, Robotics - 81.30%, Graphics -
            73.00%,
            <ul>
              <li>
                Achieved overall 1st class qualifications in 1st, 2nd and 3rd
                year studies
              </li>
              <li>
                Awarded Entrance Scholarship from the Imperial College
                Department of Computing (10 out of 200)
              </li>
            </ul>
          </div>
          <div>
            <Typography>
              <b>2015 – 2019 | Beauchamp College</b>
            </Typography>
            <br />
            A*A*A*A*a* in A-Level Further Maths, Maths, Computer Science,
            Physics, Extended Project Qualification
            <ul>
              <li>
                Awarded Student of the Year for Academic Excellence in my
                6th-form College out of class of 400+
              </li>
              <li>
                Awarded Merit in British Mathematical Olympiad – top 500
                nationally
              </li>
              <li>
                Represented my 6th-form college in the Senior Team Maths
                Challenge. Placed 16/80 in National Finals
              </li>
            </ul>
          </div>
          <Typography variant="h5" className={classes.title}>
            Experience
          </Typography>
          <div>
            <Typography>
              <b>
                Jun - Sep 2022 | Meta, Privacy Messaging | Software Engineering
                Internship
              </b>
            </Typography>
            <br />
            Member of the Messaging Encrypted Backups team. Engineered backend
            infrastructure and UI for crucial security features on Messenger,
            allowing users to manage their keys to an encrypted backup. Work
            consisted of full-stack development using <b>Hack</b> and{" "}
            <b>React</b>.
            <ul>
              <li>
                Worked with cross-functional teams, including Product Managers,
                Designers, and Engineers
              </li>
              <li>
                Delivered my 14-week project 5 weeks early and presented my work
                to Messenger Privacy organisation
              </li>
              <li>
                Written most critical Jest end-to-end tests for my team’s work
                to increase production quality and reduced test execution time
                by 70% using data builders
              </li>
              <li>
                Proposed solution to unblock H1 project working with Senior
                software engineers after gaining thorough understanding of
                backend user key management infrastructure
              </li>
            </ul>
          </div>
          <div>
            <Typography>
              <b>
                Oct 2021 - Jan 2022 | University Group Project | Haskell Cryptic
                Crossword Solver
              </b>
            </Typography>
            <br />
            Led a 7-person team working with our university professor creating a
            full-stack web application to showcase a crossword solver programmed
            in Haskell. Website at:{" "}
            <a href="https://cryptic-solver.herokuapp.com/">
              https://cryptic-solver.herokuapp.com/
            </a>
            <ul>
              <li>
                Built with Node.js, <b>React</b>, <b>Python</b> Django, SQL and deployed using
                Heroku
              </li>
              <li>
                Implemented web worker running computer vision image recognition
                algorithms to transcribe crossword images
              </li>
              <li>
                Built CI/CD pipeline using GitHub actions with Jest unit and
                end-to-end tests
              </li>
              <li>
                Implemented stateful, functional React components, React
                Context, and built RESTful APIs
              </li>
            </ul>
          </div>
          <div>
            <Typography>
              <b>
                Jun - Sep 2021 | Amazon, Alexa Shopping | Software Development
                Engineering Internship
              </b>
            </Typography>
            <br />
            Worked as part of the User Feedback team implementing features to
            address customer pain points, improving the Alexa user experience.
            Solutions coded in <b>Java</b> and Alexa Presentation Language
            (APL).
            <ul>
              <li>
                Engineered solution to enable voice back navigation on Alexa
                shopping’s feedback overlay for screen devices
              </li>
              <li>
                Improved style consistency and screen reader accessibility of
                feedback customer experiences using APL
              </li>
              <li>
                Written unit and integration tests, and successfully deployed my
                features to production via CI/CD pipeline
              </li>
            </ul>
          </div>
          <div>
            <Typography>
              <b>
                May – Jun 2021 | University Group Project | Intelligent Food App
              </b>
            </Typography>
            <br />
            Worked in a 4-person team creating a full-stack web application to
            suggest recipes for food items you have in your kitchen. Website
            found at:{" "}
            <a href="https://food-app-frontend.herokuapp.com">
              https://food-app-frontend.herokuapp.com
            </a>
            <ul>
              <li>
                Built with Node.js, <b>React</b>, Python Django, SQL and
                deployed using Heroku
              </li>
              <li>
                Collaborated closely with users iterating on feedback and
                suggestions
              </li>
              <li>
                Implemented stateful, functional React components, React Context
                and built RESTful APIs
              </li>
            </ul>
          </div>
          <div>
            <Typography>
              <b>Jan – Apr 2021 | University Group Project | WACC Compiler</b>
            </Typography>
            <br />
            Worked in a 5-person team creating an implementation of an ARM
            compiler for programming language WACC.
            <ul>
              <li>
                - Compiler written in <b>Java</b> and used ANTLR parser
              </li>
              <li>
                - Created continuous integration pipeline on GitLab, testing
                each stage of the compiler with unit tests
              </li>
              <li>
                - Followed software engineering techniques such as Visitor and
                Builder patterns
              </li>
            </ul>
          </div>
          <div>
            <Typography>
              <b>Oct - Nov 2020 | University Group Project | PintOS</b>
            </Typography>
            <br />
            Worked in a 4-person team implementing features of an operating
            system in <b>C</b> according to a given specification.
            <ul>
              <li>
                Responsible for implementing priority scheduling, priority
                donation and system calls
              </li>
              <li>
                Worked in multi-threaded environment utilising synchronization
                primitives
              </li>
              <li>
                Extensive use of <b>Git</b> for version control and debugging
                using the GNU Debugger
              </li>
            </ul>
          </div>
          <div>
            <Typography>
              <b>Jan - Apr 2019 | School Project | Online Chess</b>
            </Typography>
            <br />
            Built website ‘Beauchamp Chess’ for my college chess club.
            Registered users can play chess online with features such as viewing
            game history, a Glicko-2 rating system and creating tournaments.
            <br />
            URL:{" "}
            <a href="https://beauchampchess.eu.pythonanywhere.com">
              https://beauchampchess.eu.pythonanywhere.com
            </a>
            <ul>
              <li>
                Written using <b>Python3</b>, Flask, SQLite3, HTML, CSS,
                Bootstrap 4, JavaScript and jQuery
              </li>
              <li>
                Stored data in a normalised relational SQLite database with a
                dozen members and around 100 games played
              </li>
            </ul>
          </div>
          <Typography variant="h5" className={classes.title}>
            Additional Experience and Awards
          </Typography>
          <div>
            <b>Apr 2021 |</b> Collaboration with the University of St.
            Petersburg and the Technical University of Munich learning
            continuous deployment using GitHub Actions to remotely deploy
            changes to robots.
            <br />
            <b>Jan 2021 |</b> Machine learning project in recognising numerical
            digits. Trained neural network in Python using TensorFlow. The
            project can be found{" "}
            <u>
              <Link href="/projects/digit-recognizer">here.</Link>
            </u>
            <br />
            <b>Oct 2020 |</b> Completed JPMorgan Software Engineering Virtual
            Experience. Built a web app to display stock prices
            <br />
            <b>Oct 2019 - Present |</b> Enrolled in the Imperial College Horizons program
            learning Japanese. Awarded Merit in Level 3
          </div>
        </div>
        <br />
        <br />
        <br />
        <Link href="/">
          <a>Return Home</a>
        </Link>
      </Container>
    </Layout>
  );
}
