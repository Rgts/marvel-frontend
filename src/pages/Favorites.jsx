// import du package axios
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; //rappel
import ReactPaginate from "react-paginate";
import SearchBar from "../components/SearchBar";
import CardComic from "../components/CardComic";

const Favorites = () => {
  const navigate = useNavigate(); // rappel
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("comics")) || []
  );

  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  //React paginate--
  const [currentPage, setCurrentPage] = useState(0);
  let itemsPerPage = 25;
  let startIndex = currentPage * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;
  //React paginate--

  useEffect(() => {
    setIsLoading(false);
  }, [search]);

  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <>
      {/* <SearchBar search={search} setSearch={setSearch} /> */}
      <main>
        <div className="container flex flex-start-start flex-wrap flex-gap-20 padding-40-20">
          {/* .slice(,) is for pagination in React-pagination */}
          {data.slice(startIndex, endIndex).map((comic) => {
            const imgUrl =
              comic.thumbnail.path + "." + comic.thumbnail.extension;
            // console.log(comic._id);
            return (
              <CardComic key={comic._id} comic={comic} favorite={"remove"} />
            );
          })}
        </div>
        <div className="container">
          <ReactPaginate
            pageCount={Math.ceil(data.length / itemsPerPage)}
            onPageChange={(event) => setCurrentPage(event.selected)}
            className="react-paginate"
          />
        </div>
      </main>
    </>
  );
};

export default Favorites;
