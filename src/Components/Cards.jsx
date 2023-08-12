import { useContext } from "react";
import noteContext from "../Context/notes/noteContext";
import "./Cards.css";
import Categories from "./Categories";
import Filter from "./Filter";
import { Link } from "react-router-dom";

const Cards = () => {
  let a = useContext(noteContext);
  if (a.state.length === 0) {
    return <h1>Item doesnt exist.</h1>;
  }

  return (
    <div className="products-container">
      <h1>
        {a.selectedCategory != ""
          ? a.selectedCategory.toUpperCase()
          : "all products".toUpperCase()}
      </h1>
      <div className="filters">
        <Categories />
        <Filter />
      </div>
      <div className="card-container">
        {a.state.map((item) => {
          return (
            <>
              <Link to={`./products/${item.id}`}>
                <div className="product-card" key={item.id}>
                  <div className="badge">Hot</div>
                  <div className="product-tumb">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="product-details">
                    <span className="product-catagory">{item.category}</span>
                    <h4 className="product-title">
                      <a href="">{item.title}</a>
                    </h4>
                    <p className="product-description">{item.description}</p>
                    <div className="product-bottom-details">
                      <div className="product-price">
                        <small>${(item.price + 10).toFixed(2)}</small>
                        {item.price}
                      </div>
                      <div className="product-links">
                        <a href="">
                          <i className="fa fa-heart"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-shopping-cart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
