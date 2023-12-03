import RenderMovieCategory from "@/components/RenderMovieCategory";

const categoryOne = "horror";
export async function getStaticPaths() {
  const number1 = "1"
  const number2 = "2"

  return {
    paths: [{ params: { id: number1 } }, { params: { id: number2 } }],
    fallback: "blocking"
  };
}

export async function getStaticProps({ params }) {
  let description = "Jessy and Celine met each other in the summer of 1995...";
  let description2 = "Benjamin was born witn an strange desease that made him younger with the pass of years...";
  let movieDescription = "";
  if (params.id === "1") movieDescription = description;
  if (params.id === "2") movieDescription = description2;
  return { props: { movie: movieDescription.toString() }, revalidate: 60 };
}

const CategoryPage = ({ movie }) => {
  //onsole.log("PROPS:", props?.params)
  //console.log(category)

  return (
   <RenderMovieCategory movie={movie}/>
  );
};

export default CategoryPage;
