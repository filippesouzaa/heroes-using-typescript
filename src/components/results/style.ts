import styled from "styled-components";

export const ResultsContainer = styled.div`
  padding: 40px 170px;
`;
export const TitleResult = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 12px;
  color: #8e8e8e;
`;
export const ResultsBody = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffff;
  margin-top: 12px;
  border-radius: 4px;
  box-shadow: 0px 0px 5px #00000033;
  padding: 8px;
`;

export const MovieStats = styled.span`
  width: 150px;
  padding: 25px;
`;

export const MovieCover = styled.img`
  border-radius: 4px;
  width: 48px;
  height: 48px;
`;

export const MovieStatsDescription = styled.span`
  width: 450px;
  overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   max-height: 52px;      /* fallback */
   -webkit-line-clamp: 3; /* number of lines to show */
   -webkit-box-orient: vertical;
`;
