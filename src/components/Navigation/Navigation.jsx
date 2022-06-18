import { Link } from "react-router-dom";
import "./Navigation.scss";

export const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="container">
        <li>
          <Link className="navigation-link navigation-link--home" to="/">
            <strong>Great</strong>Reads
          </Link>
        </li>
        <li>
          <Link className="navigation-link" to="/add-new-author">
            Add an Author
          </Link>
        </li>
      </ul>
    </nav>
  );
};
