import React from "react";
import Card from "./Card";
import gamesData from "db";

function GameList({ cartIds, addGameIdToCart }) {
  return gamesData
    .map(game => ({
      ...game,
      isInCart: !!cartIds.find(gameId => gameId === game.id)
    }))
    .map(({ id, ...game }) => (
      <Card key={id} id={id} handleClick={addGameIdToCart} {...game} />
    ));
}

export default GameList;
