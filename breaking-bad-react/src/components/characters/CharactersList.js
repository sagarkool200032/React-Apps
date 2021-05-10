import React from "react";
import "./CharactersList.css";
import CharacterItem from "./CharacterItem";
import Spinner from "../ui/Spinner";

const CharactersList = (props) => {
  return props.isLoading ? (
    <Spinner />
  ) : (
    <div className="list">
      {props.items.map((item) => {
        return <CharacterItem key={item.char_id} item={item} />;
      })}
    </div>
  );
};

export default CharactersList;
