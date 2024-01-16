import HomePage from "@/features/HomePage";
import Script from "next/script";
import Head from "next/head";

// export async function getStaticPaths(){
//   return {
//     paths: [],
//     fallback: "blocking"
//   }
// }
//
// async function getInitialMovies() {
//   const res = await fetch("https://www.omdbapi.com/?apikey=4287ad07&s=taxi", {
//     method: "GET"
//   })
//   const movies = await res.json()
//   console.log(movies)
//   return { props: { movies }, revalidate: 60 }
// }
//
//INCFREMENTAL STATIC REGENERATION

const querys = [
  "bad",
  "batman",
  "spider man",
  "driver",
  "avengers",
  "curious",
  "curse",
  "007",
  "pokemon",
  "naruto",
  "dragon",
  "dragon ball",
];

function getRandomString(){
  return querys[Math.floor(Math.random() * querys.length)];
}

async function fetchMovies() {

  const randomMovies = getRandomString()
  const randomMoviesBanner = getRandomString()
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=4287ad07&s=${randomMovies}`,
    {
      next: {
        revalidate: 60, //hacer un nuevo fetching cada 60 sec
      },
    }
  );
  const movies = await res.json();

  return { movies, randomMovies };
}

export default async function Home() {
  const { movies, randomMovies } = await fetchMovies();
  console.log(movies);
  console.log(randomMovies);
  return (
    <div>
    <Head>
        <script defer></script>
    </Head>
      <HomePage movies={movies} randomInitialQuery={randomMovies} />
    </div>
  );
}
