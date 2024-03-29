"use client";

import Link from "next/link";
import styles from "./MovieCard.module.css";
import { useScreenDetector } from "@/hooks/useScreenDetector";
import Image from "next/image";
import React, { createRef, useEffect, useRef, useState } from "react";

const MovieCard = ({ initialMovies, randomInitialQuery, paginationMovies }) => {
  const { isMobile } = useScreenDetector();
  const [movies, setMovies] = useState([]);
  const [pageNumber, setpageNumber] = useState(2);
  const [elements, setElements] = useState([]);
  const hiddenElements = useRef([]);
  

  let elementos = [];
  elementos.push(
    (hiddenElements.current = initialMovies?.Search?.map(
      (_, index) => hiddenElements.current[index] ?? createRef()
    ))
  ); //this evaluate every hiddenElement to push them in an array, otherwise if it is undefined it creates a reference for that hiddemElement


  function handlePageNumber() {
    setpageNumber(pageNumber + 1);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  useEffect(() => {
    // hiddenElements.current.forEach((element) => observer.observe(element));
    //elementos.forEach((el, index) => observer?.observe(el[index].current));
    //console.log(elementos.forEach((element, i) => console.log(element[1]?.current)))
    //buscar la manera de agregar el defer en el HTML
  }, []);

  return (
    <>
      {/* <aside className={styles.pagButtonsContainer}>
        <button className={styles.pagButtons}>1</button>
        <Link href={`movies/${randomInitialQuery}/page/${pageNumber}`} prefetch={false} onClick={handlePageNumber}>
          <button className={styles.pagButtons}>2</button>
        </Link>
      </aside> */}
      <div className={styles.cardMovies}>
        {initialMovies?.Search?.map((movie, index) => {
          return (
            <section key={movie.imdbID} className={styles.movieContainer}>
              <Link href={`/movie/${movie.imdbID}`} passHref rel="norferrer">
                <Image
                  className={styles.img}
                  src={movie.Poster}
                  quality={100}
                  width={!isMobile ? 100 : 250}
                  height={!isMobile ? 100 : 250}
                  layout="responsive"
                  objectFit="cover"
                />
                <p className={styles.titleMovies}>{movie.Title}</p>
              </Link>
            </section>
          );
        })}

        {paginationMovies &&
          paginationMovies?.Search?.map((movie) => {
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
    </>
  );
};

export default MovieCard;
