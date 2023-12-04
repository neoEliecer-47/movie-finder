import Image from "next/image";
//import styles from "./page.module.css";
//import Categories from "@/features/Categories";
import styles from "./home.module.css";
import React from "react";

export default function Home() {
  //<Categories />
  return (
    <div className={styles.container}>
      <header className={styles.headerContainer}>
        <form className={styles.form}>
          <input 
            type="text"
            placeholder="search movie"
            style={{padding: "5px"}}
          />
          <button style={{padding: "5px"}}>
            search
          </button>
        </form>
      </header>
      <main className={styles.main}></main>
      <footer></footer>
    </div>
  );
}
