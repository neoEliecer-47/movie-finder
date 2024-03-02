"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./MovieDetails.module.css";
import { IoPlayBackCircle } from "react-icons/io5";
import { useRouter } from "next/router";

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

  const [film] = useState([movie]);
  const [activeTab, setActiveTab] = useState(null);
  const [content, setContent] = useState("");
  const router = useRouter();
  console.log(film);
  const keys = Object.keys(movie).slice(0, 13);

  function handleActiveTab(key, index) {
    setActiveTab(index);
    setContent(() => movie[key]);
  }

  return (
    <div className={styles.container}>
      <div onClick={() => router.push("/")}>
        <IoPlayBackCircle style={{ height: "2.5rem", width: "2.5rem" }} />
      </div>
      <section>
        <h1>{movie.Title}</h1>
        <Image src={movie.Poster} width={350} height={350} />
      </section>
      <article className={styles.swiper}>
        {keys.map((key, index) => {
          //if (key === "Year") index = index + 1
          if (key === "Plot" || key === "Title") return;
          return (
            <div
              key={index}
              style={{
                backgroundColor: `${index === activeTab ? "#EA8974" : ""}`,
              }}
              className={styles.metaDataBar}
              onClick={() => handleActiveTab(key, index)}
            >
              {key}
            </div>
          );
        })}
      </article>
      <div className={styles.content}>
        {activeTab ? <p>{content}</p> : <p>Click a tab to see extra content</p>}
      </div>
      <article className={styles.plot}>
        <h2>Plot</h2>
        <p>{movie.Plot}</p>
      </article>
    </div>
  );
};

export default MovieDetails;
