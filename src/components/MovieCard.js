"use client";

import Link from "next/link";
import styles from "./MovieCard.module.css";
import { useScreenDetector } from "@/hooks/useScreenDetector";
import Image from "next/image";
import React, { createRef, useCallback, useEffect, useRef, useState } from "react";

const MovieCard = ({ initialMovies, randomInitialQuery, paginationMovies }) => {
  const { isMobile } = useScreenDetector();
  const [movies, setMovies] = useState([]);
  const [pageNumber, setpageNumber] = useState(2);
  const [elements, setElements] = useState([])
  const hiddenElements = useRef([]);
  console.log(paginationMovies);

  let elementos = []
  elementos.push(hiddenElements.current = initialMovies?.Search?.map((_, index) => hiddenElements.current[index] ?? createRef())) 

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
     elementos.forEach((el) => observer.observe(el))
     console.log(elementos)
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
            <div className="hidden" ref={hiddenElements.current[index]}>
              <section key={movie.imdbID} className={styles.movieContainer}>
                <Link
                 
                  href={`/movie/${movie.imdbID}`}
                  passHref
                >
                  <Image
                    src={movie.Poster}
                    quality={100}
                    width={!isMobile ? 280 : 160}
                    height={!isMobile ? 280 : 160}
                    layout="responsive"
                    loading="eager"
                    objectFit="contain"
                    objectPosition="unset"
                    sizes="(max-width: 768px) 100vw"
                  />
                  <p>{movie.Title}</p>
                </Link>
              </section>
            </div>
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
