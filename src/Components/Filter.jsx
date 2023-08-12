import { useContext } from "react";
import noteContext from "../Context/notes/noteContext";

const Filter = () => {
  let a = useContext(noteContext);

  let filters = (value) => {
    if (value === "phtl") {
      a.setState((prevState) => {
        const sortedState = [...prevState];
        sortedState.sort((a, b) => b.price - a.price);
        return sortedState;
      });
    } else if (value === "plth") {
      a.setState((prevState) => {
        const sortedState = [...prevState];
        sortedState.sort((a, b) => a.price - b.price);
        return sortedState;
      });
    } else if (value === "rhtl") {
      a.setState((prevState) => {
        const sortedState = [...prevState];
        sortedState.sort((a, b) => b.rating.rate - a.rating.rate);
        return sortedState;
      });
    } else if (value === "rlth") {
      a.setState((prevState) => {
        const sortedState = [...prevState];
        sortedState.sort((a, b) => a.rating.rate - b.rating.rate);
        return sortedState;
      });
    }
    console.log(a.state);
  };

  return (
    <div className="filter">
      <select onChange={(event) => filters(event.target.value)}>
        <option>Filter:Item By</option>
        <option value="phtl">Price:High to Low</option>
        <option value="plth">Price:Low to High</option>
        <option value="rhtl">Rating:High to Low</option>
        <option value="rlth">Rating:Low to High</option>
      </select>
    </div>
  );
};

export default Filter;
