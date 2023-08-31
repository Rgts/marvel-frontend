import marvelLogo from "../assets/images/marvel-logo.svg";
import { useNavigate } from "react-router-dom"; //rappel

const Header = () => {
  const navigate = useNavigate(); // rappel

  return (
    <header>
      <div className="container flex flex-between-center">
        <img
          className="logo"
          src={marvelLogo}
          alt="marvel-logo"
          onClick={() => navigate("/")}
        />
        <div className="flex flex-gap-20 flex-start-start">
          <button onClick={() => navigate("/comics")}>Comics</button>
          <button onClick={() => navigate("/")}>Characters</button>
          <button>Favoris</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
