export async function fetchMoviesByQuery(query) {
  if(!query) return
  try {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=4287ad07&s=${query}`,
      {
        next: {
          revalidate: 60,
        },
      }
    );

    const data = await res.json();

    return { data };
  } catch (error) {
    console.log(error);
  }
}
