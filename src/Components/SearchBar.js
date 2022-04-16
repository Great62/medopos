import React, { useState } from "react";
import "../Styles/searchBar.css";
import searchSvg from "../Pictures/search_black_24dp.svg";
import closeSvg from "../Pictures/close_black_24dp.svg";
import { services } from "../Data";

function SearchBar() {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = services.filter((value) => {
      return value.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
    console.log(filteredData.length);
    console.log(searchWord);
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="service-search-container">
      <div
        className={`search-bar ${
          filteredData.length !== 0 && "search-bar-active"
        } `}
      >
        {wordEntered ? (
          <img
            className="search-icon"
            src={closeSvg}
            alt=""
            onClick={clearInput}
          />
        ) : (
          <img className="search-icon" src={searchSvg} alt="" />
        )}
        <input
          type="text"
          className="search-bar-input"
          placeholder="Browse our services"
          value={wordEntered}
          onChange={handleFilter}
        ></input>
        {filteredData.length !== 0 && (
          <div className="data-search-result">
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <div className="data-search-item" target="_blank">
                  <p>{value}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
