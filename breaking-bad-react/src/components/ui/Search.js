import React, { useState } from "react";
import "./Search.css";

function Search(props) {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    props.getQuery(q);
  };

  return (
    <div className="search">
      <div className="form-control">
        <form>
          <input
            type="text"
            className="form"
            placeholder="Search Characters"
            autofocus
            onChange={(e) => onChange(e.target.value)}
            value={text}
          />
        </form>
      </div>
    </div>
  );
}

export default Search;