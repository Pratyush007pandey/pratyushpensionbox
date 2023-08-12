import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Details.css";
import noteContext from "../Context/notes/noteContext";
import { FaSistrix } from "react-icons/fa";
import { BsFillHeartFill, BsBag } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import Search from "./Search";

import Header from "./Header";

const Details = () => {
  let a = useContext(noteContext);
  const params = useParams();
  useEffect(() => {
    fetch(params.id);
    return () => {
      a.setDetails({});
    };
  }, []);

  let fetch = async (id) => {
    let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    a.setDetails(res.data);
    console.log(res.data);
  };
  return (
    <>
      <div className="desktop-view">
        <Header />
      </div>
      <div className="mobile-view">
        <div className="header-child-container-one">
          <ul className="header-childlist">
            <li>
              <Link to="/">
                <BiArrowBack />
              </Link>
            </li>
            <li>
              <a>{a.details.category}</a>
            </li>
          </ul>
          <ul className="header-childlist">
            <li>
              <Search />
            </li>
            <li>
              <BsFillHeartFill />
            </li>
            <li>
              <BsBag />
            </li>
          </ul>
        </div>
      </div>
      <div className="details-container">
        <div className="left-container">
          <img src={a.details.image} />
        </div>
        <div className="right-container">
          <h1>{a.details.title}</h1>
          <br />
          <p>{a.details.category}</p>
          <br />
          <h4>{a.details.description}</h4>
          <br />
          <div className="price">
            <p>$</p>
            <p>{a.details.price}</p>
          </div>
          <br />
          <div className="size">
            <p>S</p>
            <p>M</p>
            <p>L</p>
            <p>XL</p>
          </div>
          <br />
          <button className="cart">Add To Cart</button>
        </div>
      </div>
    </>
  );
};

export default Details;
