import React, { useState } from "react";

import Card from "./Card";
import axios from "axios";

const Homepage = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);

  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q= " +
            search +
            " &key=AIzaSyATMP2ZrguLQJLkMv_0v7xnH1ubD0S7MfA" +
            " &maxResults=40"
        )

        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            Discover an e-Book...
            <br /> BIGGEST LIBRARY.
            <br />
            <p> Lots of free books </p>{" "}
          </h1>
        </div>
        <div className="row2">
          <h2> Search your Book </h2>
          <div className="search">
            <input
              type="text"
              placeholder="search books..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="container">{<Card book={bookData} />}</div>
    </>
  );
};
export default Homepage;
