import React from 'react';
import './employee.styles.css';
const SearchBox = (props) => {
  return (
    <React.Fragment>
      <span className="fa fa-search"></span>
      <input
        className="search "
        type="search"
        placeholder={props.placeholder}
        onChange={(event) => {
          props.onChange(event);
        }}
      />
    </React.Fragment>
  );
};

export default SearchBox;
