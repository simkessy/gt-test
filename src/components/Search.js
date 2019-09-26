import React from "react";

export default function SearchBox(props) {
  const { placeHolder = "Search GameTime", onSearch, value } = props;
  return (
    <div className="search-box">
      <img
        className="search-icon"
        alt="search Icon"
        src="https://cdn3.iconfinder.com/data/icons/eightyshades/512/11_Search-256.png"
      ></img>
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
