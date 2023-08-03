import PropTypes from "prop-types";
import React, { memo } from "react";
import { PaginationWrapper } from "./style";

const EntirePagination = memo((props) => {
  return (
    <PaginationWrapper>
      <div>EntirePagination</div>
    </PaginationWrapper>
  );
});

EntirePagination.propTypes = {};

export default EntirePagination;
