import { makeStyles } from "@material-ui/core/styles";
import { Container, Paper, Grid } from "@material-ui/core";
import Link from "next/link";

import Layout from "../components/_Layout";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  container: {},
}));

export default function DigitRecognizer() {
  const classes = useStyles();

  return (
    <Layout>
      <Container>
        <div>Digit recognizer</div>
        <br />
        <br />
        <br />
        <div>
          <Link href="/projects">
            <a>Return to projects</a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a>Return Home</a>
          </Link>
        </div>
      </Container>
    </Layout>
  );
}
