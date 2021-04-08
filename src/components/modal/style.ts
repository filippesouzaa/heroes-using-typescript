import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 20px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(155, 153, 153, 0.4);
  backdrop-filter: blur(3px);
`;

export const ModalBody = styled.div`
  background-color: #ffff;
  width: 900px;
  max-height: 90vh;
  margin: 0 auto;
`;

export const ModalHeader = styled.div`
  background-color: #e6e6e6;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ModalTitle = styled.span`
  padding: 30px;
  font-size: 26px;
  color: #166193;
`;

export const ModalReleaseDate = styled.span`
  padding-right: 30px;
  color: silver;
`;

export const ModalContentContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const ModalContent = styled.div`
  padding: 30px;
`;

export const PosterImage = styled.img`
  width: 100%;
  max-height: 500px;
`;
export const Title = styled.span`
  font-size: 21px;
  color: #166193;
`;

export const MoreInformation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ModalResultInfo = styled.p`
  margin-top: 5px;
  text-align: center;
  font-size: 14px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Tags = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  width: 240px;
  margin-left: 20px;
`;

export const TagsStyle = styled.p`
  background-color: white;
  padding: 5px 10px;
  border-radius: 20px;
  border: 1px solid #166193;
  color: #166193;
`;

export const MatchBackground = styled.div`
  border-radius: 50px;
  width: 100px;
  height: 100px;
  background-color: #166193;
  border: #3ee8e4 solid 5px;
  text-align: center;
  float: right;
`;

export const MatchTitle = styled.span`
  height: 100px;
  line-height: 100px;
  font-size: 32px;
  font-weight: bold;
  color: #3ee8e4;
`;

export const ReturnButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: #166193;
  color: white;
  border: none;
`;
