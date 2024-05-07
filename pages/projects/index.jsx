import { Container } from "@mui/material";
import { grey } from "@mui/material/colors";
import Link from "next/link";

import Layout from "../../components/_Layout";

export default function Projects() {
  return (
    <Layout title="Projects">
      <Container
        sx={{
          padding: "10px",
          textAlign: "center",
          color: grey[800],
        }}
      >
        <div>
          <Link href="/projects/digit-recognizer">
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
