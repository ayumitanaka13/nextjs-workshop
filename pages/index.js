import Link from "next/link";
import styles from "../styles/Home.module.css";

import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Home">
      <div className={styles.container}>
        <main className={styles.main}>
          <Link href="/blog">
            <h1 className={styles.title}>
              <a>Move to Blog</a>
            </h1>
          </Link>
        </main>
      </div>
    </Layout>
  );
}
