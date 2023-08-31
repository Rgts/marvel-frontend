// import du package axios
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; //rappel

const Characters = () => {
  const navigate = useNavigate(); // rappel
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/characters");
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response); // contrairement au error.message d'express
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <>
      <main>
        <div className="container flex flex-start-start flex-wrap flex-gap-20 padding-40-20">
          {data.results.map((character) => {
            const imgUrl =
              character.thumbnail.path +
              "/standard_medium." +
              character.thumbnail.extension;
            // console.log(character._id);
            return (
              <article
                key={character._id}
                className="flip-zone"
                onClick={() => navigate(`/comics/${character._id}`)}
              >
                <div className="character-card">
                  <div className="character-name hide-on-hover">
                    {character.name}
                  </div>
                  <img
                    className="character-img hide-on-hover"
                    src={imgUrl}
                    alt=""
                  />
                  {character.description && (
                    <div className="flip-info hide-on-hover">
                      Flip to learn more {">>"}
                    </div>
                  )}
                  <div className="character-description show-on-hover">
                    {character.description}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Characters;
