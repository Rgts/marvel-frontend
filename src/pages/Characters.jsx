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
          `http://localhost:3000/characters?limit=${limit}&skip=${skip}&name=${search}`
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
    <main className="container">En cours de chargement</main>
  ) : (
    <>
      <SearchBar search={search} setSearch={setSearch} />

      <main>
        <div className="container flex flex-start-start flex-wrap flex-gap-20 padding-40-20">
          {/* .slice(,) is for pagination in React-pagination */}
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
          />
        </div>
      </main>
    </>
  );
};

export default Characters;
