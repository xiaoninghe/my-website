import styles from "../styles/Home.module.css";
import Layout from "../components/_Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <h1 className={styles.title}>Welcome!</h1>
      <div>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </div>
    </Layout>
  );
}
