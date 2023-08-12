import { useContext } from "react";
import noteContext from "../Context/notes/noteContext";
import _ from "lodash"; // Import lodash library
import { FaSistrix } from "react-icons/fa";
import "./Search.css";

const Search = () => {
  let a = useContext(noteContext);

  const handleChange = (val) => {
    const value = val;
    debouncedHandleChange(value);
  };
  const debouncedHandleChange = _.debounce((value) => {
    let filteredItems = a.products.filter((item) => {
      return item.title.toLowerCase().includes(value.toLowerCase());
    });
    a.setState(filteredItems);
    console.log("hello", filteredItems);
  }, 500);
  return (
    <div className="search">
      <input
        type="text"
        onChange={(event) => handleChange(event.target.value)}
        placeholder="Search by category, name ..."
      ></input>
      <span>
        <FaSistrix></FaSistrix>
      </span>
    </div>
  );
};

export default Search;
