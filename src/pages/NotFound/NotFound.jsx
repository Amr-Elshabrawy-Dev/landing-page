import { Link } from "react-router";
import NotFoundSvg from "../../assets/404-page.svg?react";

import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="container">
      <div className="overlay notFound__overlay" />
      <div className="notFound">
        <div className="notFound__svg">
          <NotFoundSvg />
        </div>
        <div className="notFound__error">
          <p>Page not found</p>
          <Link to="/">
            <button>return home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
