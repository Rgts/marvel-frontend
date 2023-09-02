import FavoriteAdd from "./FavoriteAdd";
import FavoriteRemove from "./FavoriteRemove";
import { useNavigate } from "react-router-dom"; //rappel
const CardCharacter = ({ character, favorite }) => {
  const navigate = useNavigate(); // rappel
  return (
    <article
      key={character._id}
      className="flip-zone"
      onClick={() => navigate(`/comics/${character._id}`)}
    >
      {favorite === "add" && (
        <FavoriteAdd obj={character} storageKey={"characters"} />
      )}
      {favorite === "remove" && (
        <FavoriteRemove obj={character} storageKey={"characters"} />
      )}
      <div className="character-card">
        <div className="character-name hide-on-hover">{character.name}</div>
        <img
          className="character-img hide-on-hover"
          src={character.thumbnail.path + "." + character.thumbnail.extension}
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
};

export default CardCharacter;
