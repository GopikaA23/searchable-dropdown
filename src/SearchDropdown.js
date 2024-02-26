import React, { useState, useEffect } from "react";
import _ from "lodash";
import "./Searchable-Dropdown.css";

const SearchableDropdown = ({ options }) => {
  const [searchOption, setSearchOption] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showDropDown, setShowDropDown] = useState(false);
  const [showValue, setShowValue] = useState("");

  const handleValueChange = (e) => {
    setShowValue(e.target.textContent);
    setSearchOption("");
    setShowDropDown(!showDropDown);
  };

  const handleChange = (e) => {
    setSearchOption(e.target.value);
    setShowValue(e.target.textContent);
  };

  useEffect(() => {
    const filteredOption = _.filter(options, (option) =>
      _.includes(_.lowerCase(option), _.lowerCase(searchOption))
    );
    setFilteredOptions(filteredOption);
  }, [options, searchOption]);

  const handleClick = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <div className="dropdown-container">
      <div>
        <input
          type="text"
          placeholder="Search option..."
          value={searchOption}
          onChange={handleChange}
          onClick={handleClick}
        />
      </div>
      {showDropDown && (
        <div>
          {_.map(filteredOptions, (word) => (
            <div className="items" onClick={handleValueChange} key={word}>
              {word}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchableDropdown;
