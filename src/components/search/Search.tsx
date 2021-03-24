import React from "react";
import Results from "../results/Results";
import {
  SearchContainer,
  SearchTitle,
  InputSearch,
  SubTitleSearch,
} from "./style";

const Search: React.FC = () => {
  const [search, setSearch] = React.useState("");

  return (
    <>
      <SearchContainer>
        <SearchTitle>Busca de personagens</SearchTitle>
        <SubTitleSearch>Nome do personagem</SubTitleSearch>
        <InputSearch
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </SearchContainer>
      <Results search={search} />
    </>
  );
};

export default Search;
