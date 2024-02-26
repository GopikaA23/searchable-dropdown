import React, { useState, useEffect } from "react";
import _ from "lodash";
import "./Searchable-Dropdown.css";
import { fetchFilteredOptions } from "./MockData";

const OptionContainer = ({ searchTerm, onChange }) => {
  const [filteredOptions, setFilteredOptions] = useState([]);

  // using useeffect:

  useEffect(() => {
    const filterValues = fetchFilteredOptions(searchTerm);
    setFilteredOptions(filterValues);
  }, [searchTerm]);

  // using await-promise

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFilteredOptions(searchTerm);
      setFilteredOptions(data);
    };
    fetchData();
  }, [searchTerm]);

  return (
    <div>
      {_.map(filteredOptions, (word) => (
        <div className="items" onClick={onChange} key={word}>
          {word}
        </div>
      ))}
    </div>
  );
};

const SearchableDropdown = () => {
  const [searchOption, setSearchOption] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);

  const handleValueChange = () => {
    setSearchOption("");
    setShowDropDown(false);
  };

  const handleChange = (e) => {
    setSearchOption(e.target.value);
  };

  const handleFocus = () => {
    setShowDropDown(true);
  };

  const handleBlur = () => {
    setShowDropDown(false);
  };

  return (
    <div className="dropdown-container">
      <div>
        <input
          type="text"
          placeholder="Search option..."
          value={searchOption}
          onChange={handleChange}
          onFocus={handleFocus}
          // onBlur={handleBlur}
        />
      </div>
      {showDropDown && (
        <OptionContainer
          searchTerm={searchOption}
          onChange={handleValueChange}
        />
      )}
    </div>
  );
};

export default SearchableDropdown;
