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
import Modal from "@/components/mobile/Modal";
import { fetchMoviesByQuery } from "@/services/movieQueries";

export default function HomePage({
  movies,
  randomInitialQuery,
  paginationMovies,
}) {
  //console.log(movies)
  
  const { errors, search, updateSearch } = useSearch();
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [modal, setModal] = useState(false)
  

  const [currentQueryMovies, setCurrentQueryMovies] = useState([])
  //const { data } = await fetchMoviesByQuery(query)


  function handleChange(e) {
    const newSearch = e.target.value;
    updateSearch(newSearch);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    //console.log(search)
    const { data } = await fetchMoviesByQuery(search)
    setCurrentQueryMovies(data)

  }

  function handleOpenSearchInput() {
    setOpenSearchBar(!openSearchBar);
    
  }

  function handleModal(){
    setModal(!modal)
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
        <button className={styles.modalContainer} onClick={handleModal}>modal</button>
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
                style={{ padding: "5px", width: '5rem'}}
                value={search}
                name="search"
                onChange={handleChange}
              />
              <button style={{ padding: "5px" }}>search</button>
            </form>
            <p style={{ color: `${errors && "red"}` }}>{errors}</p>
          </div>
        </div>
      </header>
      <aside className={styles.modalContainer}>
        <Modal modal={modal} setModal={setModal}/>
      </aside>
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
          currentQueryMovies={currentQueryMovies}

        />
      </main>
      <footer></footer>
    </div>
  );
}
