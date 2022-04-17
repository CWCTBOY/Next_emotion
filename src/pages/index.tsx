import { useEffect, useState } from "react";
import Seo from "../components/default/Seo";
import Card from "../components/Home/Card";

export interface IMovieProps {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
}
const API_KEY = '26796b4505cf13e86b12a4746609c749';
function Home() {
  const [moviesinfo, setMoviesinfo] = useState<IMovieProps[]>();
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)).json();
      setMoviesinfo(results)
    })()
  }, [])
  return (
    <>
      <Seo title='Home' />
      <Card moviesinfo={moviesinfo} />
    </>
  )
}//data fetching only. from here next day
export default Home;