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
      <Container>
        <div className={classes.contents}>
          <Typography variant="h3">Xiaoning He (to be updated)</Typography>
          <p>
            Second-year undergraduate at Imperial College London. Enthusiastic
            about Computer Science, eager to solve engineering problems and to
            further technical knowledge, particularly in a professional
            environment.
          </p>
          <p>
            <b>Technical Skills:</b> Python, C, Java, JavaScript, Haskell,
            React, SQLite, Git
          </p>
          <Typography variant="h5" className={classes.title}>
            Education
          </Typography>
          <div>
            <Typography>
              <b>
                2019 – Present (Expected Grad: Jun 2022) | Imperial College
                London – Mathematics and Computer Science (BEng)
              </b>
            </Typography>
            <br />
            <b>Relevant Courses: </b>
            Programming (<b>C, Java, Haskell</b>) – 73.60%, Graphs and
            Algorithms – 87.88%, Calculus – 84.69%, Mathematical Analysis –
            76.19%
            <ul>
              <li>Achieved average of 75.23% in First-Year assessments</li>
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
                Aug 2020 - present | Type.GG - Competitive typing website |
                Passion Project
              </b>
            </Typography>
            <br />
            2-person passion project building a competitive typing website
            aiming to deliver a more accurate measurement of typing speed and
            overcoming certain shortfalls on other existing sites such as
            statistics tracking and ease of use.
            <ul>
              <li>
                Building using <b>React</b>, Next.js, Node.js, Redis and MongoDB
              </li>
              <li>
                Jointly responsible for designing and implementing the RESTful
                APIs, database schemas and UI/UX
              </li>
              <li>
                Co-running a Type.GG Discord server, with over 100 members, to
                communicate ideas with the community
              </li>
              <li>
                Currently have designed APIs, database schemas, and implemented
                front-end for profile and login pages
              </li>
            </ul>
          </div>
          <div>
            <Typography>
              <b>Oct - Nov 2020 | PintOS | University Group Project</b>
            </Typography>
            <br />
            4-person team implementing features of an operating system in C
            according to a given specification.
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
              <b>Jan - Apr 2019 | Online Chess | Individual Project</b>
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
                Written using <b>Python3</b>, Flask, <b>SQLite3</b>, HTML, CSS,
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
            <ul>
              <li>
                Participated in coding competitions such as Google Hash Code,
                Google Code Jam and Project Euler
              </li>
              <li>
                Enrolled in the Imperial College Horizons program learning
                Japanese. Awarded Distinction in Level 1
              </li>
            </ul>
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
