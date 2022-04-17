import { CardBox, Poster } from "../../../styles/Home";
import { IMovieProps } from "../../pages";

interface IMovieType {
  moviesinfo?: IMovieProps[];
}

function Card({ moviesinfo }: IMovieType) {
  console.log(moviesinfo)
  return (
    <CardBox>
      {
        moviesinfo?.map((item, index) => <Poster key={index}>sex</Poster>)
      }
    </CardBox>
  )
}
export default Card;
// https://image.tmdb.org/t/p/w500/포스터 주소