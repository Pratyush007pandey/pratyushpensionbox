import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const [state, setState] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [search, setSearch] = useState("");
  const [details, setDetails] = useState({});

  return (
    <NoteContext.Provider
      value={{
        state,
        setState,
        category,
        setCategory,
        selectedCategory,
        setSelectedCategory,
        search,
        setSearch,
        products,
        setProducts,
        details,
        setDetails,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
