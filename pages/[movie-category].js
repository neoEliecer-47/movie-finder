

export async function getStaticPaths(){
  const categoryOne = "horror"  
  const paths = []
    
        paths.push({
          params: { category: categoryOne },
        });
     
    
      return {
        paths,
        fallback: "blocking",
      };
}

export async function getStaticProps({ params }){
  console.log("PARAMS:", params)  
  return { props: { category: params.category }, revalidate: 60 };
}


const CategoryPage = ({ category }) => {
  //onsole.log("PROPS:", props?.params)
  console.log(category)  

  return (
    <div>page 1</div>
  )
}

export default CategoryPage