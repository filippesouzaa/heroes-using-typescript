import styled from "styled-components";

export const PaginationSquare = styled.li`
  opacity: 1;
  max-height: 10px;
  display: table;
`;

export const PageNumber = styled.span`
  background-color: #f5f5f5;
  text-align: center;
  vertical-align: middle;
  display: table-cell;
  padding: 10px;
  width: 25px;
  border-radius: 5px;
  &&:hover {
    background-color: #167abc;
    color: #ffff;
  }
`;

export const NavigationContent = styled.nav`
  margin-top: 40px;
  display: grid;
  place-content: center;
`;

export const MainFooter = styled.footer`
  background-color: #ffffff;
  padding: 8px 9px 30px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  cursor: pointer;
`;
