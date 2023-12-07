import MovieDetails from "@/components/MovieDetails";

//const categoryOne = "horror";
export async function getStaticPaths() {
  // const number1 = "1"
  // const number2 = "2"

  return {
    paths: [],
    fallback: "blocking"
  };
}

export async function getStaticProps({ params }) {//nos ayuda a generar paginas estaticas
  // let description = "Jessy and Celine met each other in the summer of 1995...";
  // let description2 = "Benjamin was born witn an strange desease that made him younger with the pass of years...";
  // let movieDescription = "";
  // if (params.id === "1") movieDescription = description;
  // if (params.id === "2") movieDescription = description2;
  
  const res = await fetch(`https://www.omdbapi.com/?apikey=4287ad07&i=${params.id}`)
  const data = await res.json()
  
  return { props: { movie: data }, revalidate: 60 };
}

const CategoryPage = ({ movie }) => {
  //onsole.log("PROPS:", props?.params)
  //console.log(category)

  return (
   <MovieDetails movie={movie}/>
  );
};

export default CategoryPage;
