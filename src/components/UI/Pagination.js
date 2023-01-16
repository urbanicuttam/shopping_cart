import React from 'react';
import classes from './Pagination.module.css'


const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }


  return (
    <div className={classes.pagination}>
        <a href="#">&laquo;</a>
        {pageNumbers.map(number => (
            <a onClick={() => paginate(number)} href='!#' >
                {number}
            </a>
        ))}
        <a href="#">&raquo;</a>
    </div>
  );
};

export default Pagination;