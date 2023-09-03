// import du package axios
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardComic from "../components/CardComic";
import CardCharacter from "../components/CardCharacter";

const Favorites = () => {
  const navigate = useNavigate(); // rappel
  const [comics, setComics] = useState(
    JSON.parse(localStorage.getItem("comics")) || []
  );
  const [characters, setCharacters] = useState(
    JSON.parse(localStorage.getItem("characters")) || []
  );

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return isLoading ? (
    <main className="container padding-40-0">
      <i className="fa-solid fa-spinner fa-spin"></i> En cours de chargement
    </main>
  ) : (
    <>
      <main>
        <section>
          <h1 className="container">Favorites comics</h1>
          <div className="container flex flex-start-start flex-nowrap overflow-hidden overflow-x-scroll flex-gap-20 padding-40-0">
            {comics.map((comic) => {
              // console.log(comic._id);
              return (
                <CardComic key={comic._id} comic={comic} favorite={"remove"} />
              );
            })}
            {comics.length === 0 && (
              <p>
                It looks like you don't have any comics in your favorites yet !
                Use the <i className="fa-regular fa-heart"></i> button to select
                !
              </p>
            )}
          </div>
        </section>
        <section>
          <h1 className="container">Favorites characters</h1>

          <div className="container flex flex-start-start flex-nowrap overflow-hidden overflow-x-scroll flex-gap-20 padding-40-0">
            {characters.map((character) => {
              // console.log(comic._id);
              return (
                <CardCharacter
                  key={character._id}
                  character={character}
                  favorite={"remove"}
                />
              );
            })}

            {characters.length === 0 && (
              <div>
                It looks like you don't have any characters in your favorites
                yet ! Use the <i className="fa-regular fa-heart"></i> button to
                select !
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Favorites;
