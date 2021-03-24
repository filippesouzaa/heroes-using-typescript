import React from "react";
import "../../globalStyles.css";
import {
  List,
  MainFooter,
  NavigationContent,
  PageNumber,
  PaginationSquare,
} from "../pagination/styles";

interface IPaginationProps {
  dataPerPage: number;
  totalData: number;
  paginate: Function;
  currentPage: number;
}

const Pagination = ({
  dataPerPage,
  totalData,
  paginate,
  currentPage,
}: IPaginationProps) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <MainFooter>
      <NavigationContent>
        <List>
          {pageNumbers.map((number) => (
            <PaginationSquare key={number}>
              <PageNumber
                onClick={() => {
                  paginate(number);
                }}
              >
                {number}
              </PageNumber>
            </PaginationSquare>
          ))}
        </List>
      </NavigationContent>
    </MainFooter>
  );
};

export default Pagination;
