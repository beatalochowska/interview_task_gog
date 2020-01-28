import React from "react";
import Card from "./Card";
import gamesData from "db";

function GameList({ cartIds, addGameIdToCart }) {
  return gamesData
    .map(game => ({
      ...game,
      isInCart: !!cartIds.find(gameId => gameId === game.id)
    }))
    .map(({ isInCart, id, ...game }) => (
      <Card
        key={id}
        id={id}
        isInCart={isInCart}
        handleClick={id => addGameIdToCart(id)}
        {...game}
      />
    ));
}

export default GameList;
