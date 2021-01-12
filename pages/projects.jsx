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

export default function Projects() {
  const classes = useStyles();

  return (
    <Layout title="Projects">
      <Container>
        <div>
          <Link href="/digit-recognizer">
            <a>Digit Recognizer</a>
          </Link>
        </div>
        <div>
          <Link href="https://type-gg-rewrite.vercel.app/login" passHref>
            <a>TypeGG</a>
          </Link>
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
