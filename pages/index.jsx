import { makeStyles } from "@material-ui/core/styles";
import styles from "../styles/Home.module.css";
import Layout from "../components/_Layout";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  contents: {
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Layout>
      <h2 className={styles.title}>Welcome!</h2>
      <div className={classes.contents}>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        CV (to be updated)
      </div>
    </Layout>
  );
}
