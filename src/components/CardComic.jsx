import FavoriteAdd from "./FavoriteAdd";
import FavoriteRemove from "./FavoriteRemove";
// import marvelLogoSquare from "../assets/images/marvel-logo-square.jpg";
import marvelCover from "../assets/images/marvel-cover.svg";

const CardComic = ({ comic, favorite }) => {
  // Trying to catch pictures not available, replace by standard logo
  let img = comic.thumbnail.path + "." + comic.thumbnail.extension;
  if (
    img.includes("image_not_available") ||
    img.includes("4c002e0305708") ||
    img.includes("55c106b0200f5")
  ) {
    img = marvelCover;
  }
  return (
    <article key={comic._id} className="flip-zone">
      {favorite === "add" && <FavoriteAdd obj={comic} storageKey={"comics"} />}
      {favorite === "remove" && (
        <FavoriteRemove obj={comic} storageKey={"comics"} />
      )}

      <div
        className="comic-card"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
        }}
      >
        <div className="comic-name hide-on-hover">{comic.title}</div>

        <div className="comic-description show-on-hover">
          {comic.description}
        </div>
      </div>
    </article>
  );
};

export default CardComic;
