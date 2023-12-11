import HomePage from "@/features/HomePage";

// export async function getStaticPaths(){
//   return {
//     paths: [],
//     fallback: "blocking"
//   }
// }

// async function getInitialMovies() {
//   const res = await fetch("https://www.omdbapi.com/?apikey=4287ad07&s=taxi", {
//     method: "GET"
//   })
//   const movies = await res.json()
//   console.log(movies)
//   return { props: { movies }, revalidate: 60 }
// }

//INCFREMENTAL STATIC REGENERATION
async function fetchMovies(){
  const querys = ['bad','batman','spider man','driver','avengers','curious','curse','007','pokemon','naruto','dragon','dragon ball']
  const randomMovies = querys[Math.floor(Math.random() * querys.length)]
  const res = await fetch(`https://www.omdbapi.com/?apikey=4287ad07&s=${randomMovies}`, {
    next: {
      revalidate: 60//hacer un nuevo fetching cada 60 sec
    }
  })
  const movies = await res.json()   

  return { movies, randomMovies }
}

export default async function Home(){

  const { movies, randomMovies } = await fetchMovies()
  console.log(movies)
  console.log(randomMovies)
  return (
    <HomePage movies={movies} randomInitialQuery={randomMovies}/>
  )
}

