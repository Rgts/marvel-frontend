import FavoriteAdd from "./FavoriteAdd";
import FavoriteRemove from "./FavoriteRemove";
import { useNavigate } from "react-router-dom"; //rappel
import marvelLogoTransparent from "../assets/images/marvel-logo-transparent.svg";
import marvelLogoSquare from "../assets/images/marvel-logo-square.svg";

const CardCharacter = ({ character, favorite }) => {
  const navigate = useNavigate(); // rappel

  // Trying to catch pictures not available, replace by standard logo
  let img = character.thumbnail.path + "." + character.thumbnail.extension;
  if (img.includes("image_not_available") || img.includes("4c002e0305708")) {
    img = marvelLogoSquare;
  }
  return (
    <article key={character._id} className="flip-zone flex-shrink-0">
      {favorite === "add" && (
        <FavoriteAdd obj={character} storageKey={"characters"} />
      )}
      {favorite === "remove" && (
        <FavoriteRemove obj={character} storageKey={"characters"} />
      )}
      {/* Link to comics related to current character */}
      <div
        className="link-from-character-to-comics"
        onClick={() => navigate(`/comics/${character._id}`)}
      >
        <i className="fa-solid fa-book"></i>
      </div>
      <div className="character-card">
        <div className="character-name hide-on-hover">{character.name}</div>

        <img className="character-img hide-on-hover" src={img} alt="" />

        <div
          className="character-description show-on-hover"
          style={{
            backgroundImage: `url(${marvelLogoTransparent})`,
            height: "inherit",
            backgroundSize: "contain",
            backgroundRepeat: "repeat",
          }}
        >
          {character.description}
        </div>
      </div>
    </article>
  );
};

export default CardCharacter;
