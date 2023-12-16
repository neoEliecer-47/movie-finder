import MovieCard from "@/components/MovieCard"
import HomePage from "@/features/HomePage"
import { useRouter } from "next/router"

// export async function getStaticPaths(){
//     return {
//         paths: [],
//         fallback: "blocking"
//     }
// }


// export async function getStaticProps({ params }){
//     const { query } = useRouter()
//     const res = await fetch(`https://www.omdbapi.com/?apikey=4287ad07&s=${query}&page=${params.pageNumber}`)
//     const moviePag = await res.json()

//     return { props: {moviePag} }

// }

async function fetchMovies(){
    const { query } = useRouter()
    const res = await fetch(`https://www.omdbapi.com/?apikey=4287ad07&s=${query}&page=${params.pageNumber}`, {
        next: {
          revalidate: 60//hacer un nuevo fetching cada 60 sec
        }
      })
    const moviePag = await res.json()


   
 
  
    return { moviePag }
  }

export default async function PageNumber(){
    const { moviePag } = await fetchMovies()
    console.log(moviePag)
    return (
      <HomePage paginationMovies={moviePag}/>
    )
}