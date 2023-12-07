"use client";
//import styles from "./page.module.css";
//import Categories from "@/features/Categories";
import styles from "./HomePage.module.css";
import React from "react";
import Link from "next/link";
import pageData from "../mocks/movies.data.js";
import Image from "next/image";
import { useScreenDetector } from "@/hooks/useScreenDetector";
import { useSearch } from "@/hooks/useSearch";

export default function HomePage() {
  const { isMobile } = useScreenDetector();
  const { errors, search, updateSearch } = useSearch();

  function handleChange(e) {
    const newSearch = e.target.value;
    updateSearch(newSearch);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  console.log(pageData);
  return (
    <div className={styles.container}>
      <header className={styles.headerContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="search movie"
            style={{ padding: "5px"}}
            value={search}
            name="query"
            onChange={handleChange}
            
          />
          <button style={{ padding: "5px" }}>search</button>
        </form>
        <p style={{color: `${errors && "red"}`}}>{errors}</p>
      </header>
      <main className={styles.main}>
        <div className={styles.cardMovies}>
          {pageData.Search?.map((movie) => {
            return (
              <section key={movie.imdbID} className={styles.movieContainer}>
                <Link href={`/movie/${movie.imdbID}`} passHref>
                  <Image
                    src={movie.Poster}
                    quality={100}
                    width={!isMobile ? 280 : 180}
                    height={!isMobile ? 280 : 180}
                  />
                  <p>{movie.Title}</p>
                </Link>
              </section>
            );
          })}
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
