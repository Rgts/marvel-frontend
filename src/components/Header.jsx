import marvelLogo from "../assets/images/marvel-logo.svg";
import { useNavigate } from "react-router-dom"; //rappel

const Header = () => {
  const navigate = useNavigate(); // rappel

  return (
    <header className="flex flex-center-center">
      <div className="container flex flex-between-center flex-wrap">
        <img
          className="logo"
          src={marvelLogo}
          alt="marvel-logo"
          onClick={() => navigate("/")}
        />

        <div className="button-container flex flex-gap-20 flex-start-start">
          <button onClick={() => navigate("/comics")}>Comics</button>
          <button onClick={() => navigate("/")}>Characters</button>
          <button onClick={() => navigate("/favorites")}>Favorites</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
