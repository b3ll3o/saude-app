import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <h1>AzziCare</h1>
        <nav></nav>
      </header>
      <main className={styles.main}>
        <p>Ola mundo!</p>
      </main>
      <footer>fotter</footer>
    </>
  );
}
