import marvelLogo from "../assets/images/marvel-logo.svg";
import { useNavigate } from "react-router-dom"; //rappel

const Footer = () => {
  const navigate = useNavigate(); // rappel

  return (
    <footer>
      <div className="container flex flex-between-center">
        <img
          className="logo"
          src={marvelLogo}
          alt="marvel-logo"
          onClick={() => navigate("/")}
        />

        <p className="copyright">Made by Renaud Gantois | Le Reacteur</p>
      </div>
    </footer>
  );
};

export default Footer;
