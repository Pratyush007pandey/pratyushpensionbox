import { useContext } from "react";
import noteContext from "../Context/notes/noteContext";

const Categories = () => {
  let a = useContext(noteContext);
  let handleCategory = (value) => {
    console.log("selected-category", value);
    a.setSelectedCategory(value);
  };
  return (
    <div className="category">
      <select onChange={(event) => handleCategory(event.target.value)}>
        <option value="" key="all">
          All Category
        </option>
        {a.category.map((item) => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Categories;
