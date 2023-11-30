import React from 'react'

export function getStaticPaths(){
    let paths = []
    
        paths.push({
          params: { category: "horror" },
        });
     
    
      return {
        paths,
        fallback: "blocking",
      };
}

export function getStaticProps({ params }){
    return { props: { params } };
}


const CategoryPage = ({ props }) => {
console.log(props)

  return (
    <div>{props}</div>
  )
}

export default CategoryPage