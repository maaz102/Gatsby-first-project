import React from "react";
import Mylayout from "../components/Mylayout";
import * as styles from '../styles/home.module.css'; // Use "import * as styles" instead of "import styles"

export default function Home() {
  return (
    <Mylayout>
      <section className={styles.header}>
        <div>
          <h3>This is my home page center content</h3>
          <img src="/banner.png" alt="Banner" />
        </div>  
      </section>
    </Mylayout>
  );
}
