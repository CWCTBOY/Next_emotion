import React, { useState } from "react";
import { CardBox, Poster, Popular, PopulatTxt } from "../../../styles/Home";
import { IMovieProps } from "../../pages";

function Card({ results }: IMovieProps) {
  return (
    <>
      <Popular>
        <PopulatTxt>Popular Movies</PopulatTxt>
      </Popular>
      <CardBox>
        {
          results?.map((item, index) =>
            <Poster key={index} src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`} />
          )
        }
      </CardBox>
    </>)
}
export default Card; // useRoute 사용 또는 Link path props url masking and dynamic routing 사용해보기
// https://image.tmdb.org/t/p/w500/포스터 주소