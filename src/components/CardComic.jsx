import FavoriteAdd from "./FavoriteAdd";
import FavoriteRemove from "./FavoriteRemove";

const CardComic = ({ comic, favorite, setData }) => {
  return (
    <article key={comic._id} className="flip-zone">
      {favorite === "add" && <FavoriteAdd obj={comic} storageKey={"comics"} />}
      {favorite === "remove" && (
        <FavoriteRemove obj={comic} storageKey={"comics"} setData={setData} />
      )}

      <div
        className="comic-card"
        style={{
          backgroundImage: `url(${
            comic.thumbnail.path + "." + comic.thumbnail.extension
          })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="comic-name hide-on-hover">{comic.title}</div>

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
};

export default CardComic;
