"use client";
//import styles from "./page.module.css";
//import Categories from "@/features/Categories";
import styles from "./HomePage.module.css";
import React, { useState } from "react";
import Link from "next/link";
import pageData from "../mocks/movies.data.js";
import Image from "next/image";
import { useScreenDetector } from "@/hooks/useScreenDetector";
import { useSearch } from "@/hooks/useSearch";
import PaginationButtons from "@/components/PaginationButtons";
import MovieCard from "@/components/MovieCard";
import { RiSearch2Line } from "react-icons/ri";
import classNames from "classnames";
import CameraMovie from "../../public/images/CameraMovie";

export default function HomePage({
  movies,
  randomInitialQuery,
  paginationMovies,
}) {
  //console.log(movies)

  const { errors, search, updateSearch } = useSearch();
  const [openSearchBar, setOpenSearchBar] = useState(false);
  console.log(randomInitialQuery);
  function handleChange(e) {
    const newSearch = e.target.value;
    updateSearch(newSearch);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleOpenSearchInput() {
    setOpenSearchBar(!openSearchBar);
    console.log(openSearchBar);
  }

  //console.log(pageData);
  return (
    <div className={styles.container}>
      {/* <header className={styles.headerContainer}>
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
      </header> */}
      <header className={styles.headerContainer}>
        <RiSearch2Line
          style={{ height: "4rem", width: "4rem", cursor: "pointer" }}
          onClick={handleOpenSearchInput}
        />

        <div
          style={{
            marginRight: "1rem",
            gridTemplateRows: `${openSearchBar ? "1fr" : ""}`,
          }}
          className={classNames([
            styles.content,
            openSearchBar ? styles.showSearchInput : "",
          ])}
        >
          <div>
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="search movie"
                style={{ padding: "5px" }}
                value={search}
                name="query"
                onChange={handleChange}
              />
              <button style={{ padding: "5px" }}>search</button>
            </form>
            <p style={{ color: `${errors && "red"}` }}>{errors}</p>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <div style={{ marginBottom: "1rem" }}>
          <CameraMovie />
          <h3>
            The best place to find everything about you favorites movies and
            series
          </h3>
        </div>
        <small>Movies you may like:</small>
        <MovieCard
          initialMovies={movies}
          randomInitialQuery={randomInitialQuery}
          paginationMovies={paginationMovies}
        />
      </main>
      <footer></footer>
    </div>
  );
}
