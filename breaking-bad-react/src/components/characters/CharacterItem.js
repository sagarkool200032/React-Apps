import React from "react";
import "./CharacterItem.css";

const CharacterItem = (props) => {
  return (
    <div className="container">
      <div className="card-container">
        <div className="card">
          <figure className="card-front">
            <div className="image">
              <img src={props.item.img} alt="404" />
            </div>
          </figure>

          <figure className="card-back">
            <h1>{props.item.name}</h1>
            <h5>
              <strong>Actor Name: </strong>
              {props.item.portrayed}
            </h5>
            <h5>
              <strong>NickName: </strong>
              {props.item.nickname}
            </h5>
            <h5>
              <strong>Birthday: </strong>
              {props.item.birthday}
            </h5>
            <h5>
              <strong>Status: </strong>
              {props.item.status}
            </h5>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
