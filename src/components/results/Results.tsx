import axios, { AxiosResponse } from "axios";
import React from "react";
import IMovie from "../../models/movie.model";
import Modal from "../modal/Modal";
import Pagination from "../pagination/Pagination";
import "./style";
import {
  ResultsBody,
  ResultsContainer,
  TitleResult,
  MovieStats,
  MovieCover,
  MovieStatsDescription,
} from "./style";

interface ISearch {
  search?: string;
}

const URL =
  "https://api.themoviedb.org/4/list/1?api_key=437b7483b6be815caab820e07b004e22";

const Results = ({ search }: ISearch) => {
  const [data, setData] = React.useState<IMovie[]>([]);
  const [selected, setSelected] = React.useState<IMovie | null>(null); // is a movie or null
  const [currentPage, setCurrentPage] = React.useState(1);
  const [dataPerPage] = React.useState(10);

  async function getData() {
    const response: AxiosResponse<any> = await axios.get(URL);
    setData(response.data.results);
  }
  React.useEffect(() => {
    getData();
  }, []);

  const matchingMovies = search
    ? data.filter((result) =>
        result.title.toLowerCase().includes(search.toLowerCase())
      )
    : data;

  const indexLastData = currentPage * dataPerPage;
  const indexFirstData = indexLastData - dataPerPage;
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const currentData = matchingMovies.slice(indexFirstData, indexLastData);

  return (
    <>
      <ResultsContainer>
        <TitleResult>
          <span>Personagem</span>
          <span>Sinopse</span>
          <span>Data</span>
        </TitleResult>
        {currentData.map((item) => (
          <ResultsBody
            key={item.id}
            onClick={() => setSelected(item)}
            data-cy="table-heroes"
          >
            <MovieCover
              data-cy="item"
              src={`https://image.tmdb.org/t/p/w185${item.poster_path}`}
              alt="poster"
            />
            <MovieStats style={{ fontWeight: `bold` }}>{item.title}</MovieStats>
            <MovieStatsDescription>{item.overview}</MovieStatsDescription>
            <MovieStats>{item.release_date}</MovieStats>
          </ResultsBody>
        ))}
      </ResultsContainer>
      {selected === null || (
        <Modal
          data={selected}
          setSelected={setSelected}
          onClose={() => setSelected(null)}
        />
      )}
      <Pagination
        dataPerPage={dataPerPage}
        totalData={matchingMovies.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
};

export default Results;
