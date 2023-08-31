// import du package axios
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ComicsByCharacter = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/comics/${id}`);
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
          {data.comics.map((comic) => {
            const imgUrl =
              comic.thumbnail.path + "." + comic.thumbnail.extension;
            // console.log(comic._id);
            return (
              <article key={comic._id} className="flip-zone">
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
      </main>
    </>
  );
};

export default ComicsByCharacter;
