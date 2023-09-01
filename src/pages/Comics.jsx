// import du package axios
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; //rappel
import ReactPaginate from "react-paginate";
import SearchBar from "../components/SearchBar";

const Comics = () => {
  const navigate = useNavigate(); // rappel
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  //React paginate--
  const [currentPage, setCurrentPage] = useState(0);
  let itemsPerPage = 25;
  let startIndex = currentPage * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;
  //React paginate--

  useEffect(() => {
    const fetchData = async () => {
      try {
        // React-pagination handles pagination, skip is not used
        const skip = 0;
        const limit = 100;
        const response = await axios.get(
          `http://localhost:3000/comics?limit=${limit}&skip=${skip}&title=${search}`
        );

        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response); // contrairement au error.message d'express
      }
    };
    fetchData();
  }, [search]);

  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <>
      <SearchBar search={search} setSearch={setSearch} />
      <main>
        <div className="container flex flex-start-start flex-wrap flex-gap-20 padding-40-20">
          {/* .slice(,) is for pagination in React-pagination */}
          {data.results.slice(startIndex, endIndex).map((comic) => {
            const imgUrl =
              comic.thumbnail.path + "." + comic.thumbnail.extension;
            // console.log(comic._id);
            return (
              <article key={comic._id} className="flip-zone">
                <div className="favorite">
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div
                  className="comic-card"
                  style={{
                    backgroundImage: `url(${imgUrl})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="comic-name hide-on-hover">{comic.title}</div>

                  {/* <img
                    className="comic-img hide-on-hover"
                    src={imgUrl}
                    alt=""
                  /> */}
                  {comic.description && (
                    <div className="flip-info hide-on-hover">
                      Flip to learn more {">>"}
                    </div>
                  )}
                  <div className="comic-description show-on-hover">
                    {comic.description}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <div className="container">
          <ReactPaginate
            pageCount={Math.ceil(data.results.length / itemsPerPage)}
            onPageChange={(event) => setCurrentPage(event.selected)}
            className="react-paginate"
          />
        </div>
      </main>
    </>
  );
};

export default Comics;
