import marvelLogo from "../assets/images/marvel-logo.svg";
import { useNavigate } from "react-router-dom"; //rappel

const SearchBar = ({ search, setSearch }) => {
  const navigate = useNavigate(); // rappel

  return (
    <div className="container">
      <input
        className="search"
        type="text"
        value={search}
        placeholder="Search..."
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
