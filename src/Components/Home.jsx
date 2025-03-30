import React from 'react'
import styles from "../Css/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>THIAGO S. GOMES</h1>
        <h2 className={styles.subtitle}>Full Stack Web Developer</h2>
      </main>
    </div>
  );
};

export default Home;
