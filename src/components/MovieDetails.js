'use client'
import Image from "next/image";
import { useState } from "react";
import styles from "./MovieDetails.module.css"


const MovieDetails = ({ movie }) => {
  const {
    Title,
    Year,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Country,
    Awards,
    Poster,
  } = movie;
 

  const [film, ] = useState([movie])
  console.log(film)
  const keys = Object.keys(movie).slice(0, 13)
  return (
    <div className={styles.container}>
      <section>
        <Image />
        <p></p>
      </section>
      <article className={styles.swiper}>
        {
          keys.map((key) => (
            <div className={styles.metaDataBar}>{key}</div>
          ))
        }
      </article>
      
    </div>
  );
};

export default MovieDetails;
