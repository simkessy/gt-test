import React from "react";

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
