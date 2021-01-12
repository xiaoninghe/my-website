import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export default function Layout({ title = "Xiaoning's Website", children }) {
  const redirect = (url) => {
    console.log(url);
    window.location = url;
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        Website by Xiaoning He
        <IconButton
          color="inherit"
          onClick={() => redirect("https://github.com/xiaoninghe")}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          edge="start"
          color="inherit"
          onClick={() => redirect("https://www.linkedin.com/in/xiaoning-he/")}
        >
          <LinkedInIcon />
        </IconButton>
        Updated Jan. 2021
      </footer>
    </div>
  );
}
