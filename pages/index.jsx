import styles from "../styles/Home.module.css";
import Layout from "../components/_Layout";
import Link from "next/link";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Layout
      sx={{
        flexGrow: 1,
      }}
    >
      <h2 className={styles.title}>Welcome!</h2>
      <Box
        sx={{
          display: "flex",
          flexFlow: "column wrap",
          alignItems: "center",
        }}
      >
        <br />
        <br />
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        <br />
        <Link href="/cv">
          <a>CV</a>
        </Link>
      </Box>
    </Layout>
  );
}
