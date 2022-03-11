import { useCallback, useState } from "react";
import "./style.scss";
import debounce from "lodash.debounce";

const Filter = ({ onFilterSubmit, initialState }) => {
  const [inputValues, setInputValues] = useState(initialState);

  const debouncedFilterSubmit = useCallback(
    debounce((e) => onFilterSubmit(e), 2000),
    []
  );

  const onInputChange = (e) => {
    const newValue = { ...inputValues, [e.target.name]: e.target.value };
    setInputValues(newValue);
    debouncedFilterSubmit(newValue);
  };

  return (
    <form className="filter">
      <input
        value={inputValues.status}
        onChange={onInputChange}
        type="text"
        name="status"
        placeholder="status"
      />
      <input
        value={inputValues.species}
        onChange={onInputChange}
        type="text"
        name="species"
        placeholder="species"
      />
      <input
        value={inputValues.gender}
        onChange={onInputChange}
        type="text"
        name="gender"
        placeholder="gender"
      />
      <input
        value={inputValues.type}
        onChange={onInputChange}
        type="text"
        name="type"
        placeholder="type"
      />
    </form>
  );
};

export default Filter;
