import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="main">
      <Link to="/create-presentation" className="create">
        Create New Presentation
      </Link>
      <Link to="/view" className="view">
        View Last Presentation
      </Link>
    </div>
  );
}

export default Main;
