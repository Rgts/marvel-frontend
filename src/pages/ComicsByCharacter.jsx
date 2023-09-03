// import du package axios
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardComic from "../components/CardComic";

const ComicsByCharacter = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--v2szvx96sr9l.code.run/comics/${id}`
        );
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
    <main className="container padding-40-0">
      <i className="fa-solid fa-spinner fa-spin"></i> En cours de chargement
    </main>
  ) : (
    <>
      <main>
        <h1 className="container">Comics with {data.name} </h1>
        <div className="container flex flex-start-start flex-wrap flex-gap-20 padding-40-0">
          {data.comics.map((comic) => {
            return <CardComic key={comic._id} comic={comic} favorite={"add"} />;
          })}
        </div>
      </main>
    </>
  );
};

export default ComicsByCharacter;
