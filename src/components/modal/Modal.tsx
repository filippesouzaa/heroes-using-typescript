import React from "react";
import {
  MatchBackground,
  MatchTitle,
  ModalBody,
  ModalContainer,
  ModalContent,
  ModalContentContainer,
  ModalFooter,
  ModalHeader,
  ModalReleaseDate,
  ModalResultInfo,
  ModalTitle,
  MoreInformation,
  PosterImage,
  Tags,
  ReturnButton,
  TagsStyle,
  Title,
} from "./style";
import IMovie from "../../models/movie.model";

interface IData {
  data: IMovie;
  setSelected: Function;
  onClose: () => void;
}
const Modal = ({ data, onClose, setSelected }: IData) => {
  return (
    <ModalContainer>
      <ModalBody>
        <ModalHeader>
          <ModalTitle>{data.title}</ModalTitle>
          <ModalReleaseDate>{data.release_date}</ModalReleaseDate>
        </ModalHeader>
        <ModalContentContainer>
          <ModalContent>
            <div>
              <Title>Sinopse</Title>
              <hr style={{ color: `#3ee8e4`, border: `solid 1px` }}></hr>
              {data.overview}
            </div>
            <div style={{ marginTop: 40 }}>
              <Title>Informações</Title>
              <hr style={{ color: `#3ee8e4`, border: `solid 1px` }}></hr>
              <MoreInformation>
                <div>
                  <Title>Situação</Title>
                  <ModalResultInfo>Lançado</ModalResultInfo>
                </div>
                <div>
                  <Title>Situação</Title>
                  <ModalResultInfo>Lançado</ModalResultInfo>
                </div>
                <div>
                  <Title>Idioma</Title>
                  <ModalResultInfo>EN</ModalResultInfo>
                </div>
                <div>
                  <Title>Duração</Title>
                  <ModalResultInfo>2:45</ModalResultInfo>
                </div>
              </MoreInformation>
            </div>
            <ModalFooter>
              <Tags>
                <TagsStyle>Ação</TagsStyle>
                <TagsStyle>Aventura</TagsStyle>
                <TagsStyle>Fantasia</TagsStyle>
              </Tags>
            </ModalFooter>
            <MatchBackground>
              <MatchTitle>{data.vote_average * 10}%</MatchTitle>
            </MatchBackground>
          </ModalContent>
          <PosterImage
            src={`https://image.tmdb.org/t/p/w185${data.poster_path}`}
            alt="modal-poster"
          />
        </ModalContentContainer>
        <ReturnButton onClick={() => setSelected(null)} data-cy="button">
          <h1>Retornar</h1>
        </ReturnButton>
      </ModalBody>
    </ModalContainer>
  );
};
export default Modal;
