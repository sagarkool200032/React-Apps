import React from "react";
import "./Characters.css";
import CharactersList from "./CharactersList";

function Characters(props) {
  return (
    <div className="characters">
      <CharactersList isLoading={props.isLoading} items={props.items} />
    </div>
  );
}

export default Characters;
