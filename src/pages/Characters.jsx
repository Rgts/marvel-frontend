// import du package axios
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; //rappel
import ReactPaginate from "react-paginate";
import SearchBar from "../components/SearchBar";
import CardCharacter from "../components/CardCharacter";

const Characters = () => {
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
        // React-pagination handles pagination, skip is not used
        const skip = currentPage * itemsPerPage;
        const limit = 100;
        const response = await axios.get(
          `https://site--marvel-backend--v2szvx96sr9l.code.run/characters?limit=${limit}&skip=${skip}&name=${search}`
        );

        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response); // contrairement au error.message d'express
      }
    };
    fetchData();
  }, [search, currentPage]);

  return isLoading ? (
    <main className="container padding-40-0">
      <i className="fa-solid fa-spinner fa-spin"></i> En cours de chargement
    </main>
  ) : (
    <>
      <main>
        <h1 className="container">Characters</h1>
        <SearchBar search={search} setSearch={setSearch} />

        <div className="container flex flex-between-start flex-wrap flex-gap-20 padding-40-0">
          {data.results.map((character) => {
            // console.log(character._id);
            return (
              <CardCharacter
                key={character._id}
                character={character}
                favorite={"add"}
              />
            );
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

export default Characters;
