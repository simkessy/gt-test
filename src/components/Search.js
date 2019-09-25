import React from "react";
import PropTypes from "prop-types";

export default function SearchBox(props) {
  const { placeHolder = "Search GameTime", onSearch, value } = props;
  return (
    <div className="search-box">
      <input
        autoFocus
        ref={props.inputRef}
        type="text"
        value={value}
        className="search-input"
        placeholder={placeHolder}
        onChange={onSearch}
      />
    </div>
  );
}

SearchBox.propTypes = {
  value: PropTypes.string,
  onSearch: PropTypes.func,
  placeholder: PropTypes.string
};

SearchBox.defaultProps = {
  value: "Dogs"
};
