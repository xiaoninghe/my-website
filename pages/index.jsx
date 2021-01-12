import styles from "../styles/Home.module.css";
import Layout from "../components/_Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <h2 className={styles.title}>Welcome.</h2>
      <div>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </div>
    </Layout>
  );
}
