// import du package axios
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; //rappel
import ReactPaginate from "react-paginate";
import SearchBar from "../components/SearchBar";
import Cookies from "js-cookie";
import CardComic from "../components/CardComic";

const Comics = () => {
  const navigate = useNavigate(); // rappel
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  //React paginate--
  const [currentPage, setCurrentPage] = useState(0);
  let itemsPerPage = 100;
  //React paginate--

  useEffect(() => {
    const fetchData = async () => {
      try {
        // When page is change on pagination, a request is done to fetch 100 new items
        const skip = currentPage * itemsPerPage;
        const limit = 100;
        const response = await axios.get(
          `http://localhost:3000/comics?limit=${limit}&skip=${skip}&title=${search}`
        );

        setData(response.data);
        setIsLoading(false);
        console.log(response.data.results[0].title);
        console.log(currentPage);
        console.log(data.count);
        // setCurrentPage(currentPage);
      } catch (error) {
        console.log(error.response); // contrairement au error.message d'express
      }
    };
    fetchData();
  }, [search, currentPage]);

  return isLoading ? (
    <main className="container">En cours de chargement</main>
  ) : (
    <>
      <SearchBar search={search} setSearch={setSearch} />
      <main>
        <div className="container flex flex-start-start flex-wrap flex-gap-20 padding-40-20">
          {data.results.map((comic) => {
            return <CardComic key={comic._id} comic={comic} favorite={"add"} />;
          })}
        </div>
        <div className="container">
          <ReactPaginate
            pageCount={Math.ceil(data.count / itemsPerPage)}
            onPageChange={(event) => setCurrentPage(event.selected)}
            className="react-paginate"
            previousLabel={"<"}
            nextLabel={">"}
          />
        </div>
      </main>
    </>
  );
};

export default Comics;
