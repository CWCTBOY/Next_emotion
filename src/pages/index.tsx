import { GetServerSideProps } from "next";
import Seo from "../components/default/Seo";
import Card from "../components/Home/Card";
export interface IMovieProps {
  results: {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }[];
}
function Home({ results }: IMovieProps) {
  return (
    <>
      <Seo title='Home' />
      <Card results={results} />
    </>
  )
}
export const getServerSideProps: GetServerSideProps = async () => {
  const API_KEY = '26796b4505cf13e86b12a4746609c749';
  const { results } = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)).json(); //index.tsx
  return {
    props: {
      results,
    }
  }
}
export default Home;